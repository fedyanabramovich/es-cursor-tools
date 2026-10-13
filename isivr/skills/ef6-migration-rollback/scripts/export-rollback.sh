#!/usr/bin/env bash
# Generate a PostgreSQL downgrade script for ISIVR EF6 migrations.
# Usage: export-rollback.sh <sourceMigration> <targetMigration> <output.sql>
# Source is the newer migration. Target is the migration to land on (its Down is not included).
set -euo pipefail

if [[ $# -ne 3 ]]; then
  echo "Usage: export-rollback.sh <sourceMigration> <targetMigration> <output.sql>" >&2
  exit 1
fi

SOURCE="$1"
TARGET="$2"
OUTPUT="$3"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

REPO_ROOT="$SCRIPT_DIR"
while [[ "$REPO_ROOT" != "/" && ! -f "$REPO_ROOT/ISIVR.DM/ISIVR.DM.csproj" ]]; do
  REPO_ROOT="$(dirname "$REPO_ROOT")"
done

if [[ ! -f "$REPO_ROOT/ISIVR.DM/ISIVR.DM.csproj" ]]; then
  echo "ISIVR.DM/ISIVR.DM.csproj not found above $SCRIPT_DIR" >&2
  exit 1
fi

EXPORTER_DEST="$REPO_ROOT/ISIVR.DM/Migrations/MigrationScriptExporter.cs"
RUNNER="$REPO_ROOT/.migration-scripter"
OUTPUT_ABS="$OUTPUT"
if [[ "$OUTPUT_ABS" != /* ]]; then
  OUTPUT_ABS="$REPO_ROOT/$OUTPUT"
fi

if [[ -e "$EXPORTER_DEST" ]]; then
  echo "Refusing to overwrite $EXPORTER_DEST" >&2
  exit 1
fi

cleanup() {
  rm -f "$EXPORTER_DEST"
  rm -rf "$RUNNER"
}
trap cleanup EXIT

cp "$SCRIPT_DIR/MigrationScriptExporter.cs" "$EXPORTER_DEST"
mkdir -p "$RUNNER"

cat > "$RUNNER/migration-scripter.csproj" << 'EOF'
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>
  <ItemGroup>
    <ProjectReference Include="..\ISIVR.DM\ISIVR.DM.csproj" />
  </ItemGroup>
</Project>
EOF

cat > "$RUNNER/App.config" << 'EOF'
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <configSections>
    <section name="entityFramework" type="System.Data.Entity.Internal.ConfigFile.EntityFrameworkSection, EntityFramework, Version=6.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" requirePermission="false" />
  </configSections>
  <connectionStrings>
    <add name="ISIVR" connectionString="Host=127.0.0.1;Port=5432;Database=isivr;Username=postgres;Password=postgres" providerName="Npgsql" />
  </connectionStrings>
  <entityFramework>
    <providers>
      <provider invariantName="Npgsql" type="Npgsql.NpgsqlServices, EntityFramework6.Npgsql" />
    </providers>
  </entityFramework>
</configuration>
EOF

cat > "$RUNNER/Program.cs" << 'EOF'
var sql = ISIVR.DM.Migrations.MigrationScriptExporter.Export(args[0], args[1], args[2]);
File.WriteAllText(args[3], sql);
Console.WriteLine($"Wrote {sql.Length} chars to {args[3]}");
EOF

dotnet run --project "$RUNNER/migration-scripter.csproj" -- \
  "$SOURCE" \
  "$TARGET" \
  "Host=127.0.0.1;Port=5432;Database=isivr;Username=postgres;Password=postgres" \
  "$OUTPUT_ABS"

python3 - "$OUTPUT_ABS" "$SOURCE" "$TARGET" << 'PY'
import pathlib, sys
path, source, target = sys.argv[1:]
sql = pathlib.Path(path).read_text()
if not sql.strip():
    raise SystemExit("EF6 produced an empty script")
body = sql.rstrip() + "\n"
if not body.rstrip().endswith(";"):
    body = body.rstrip() + "\n;\n"
header = (
    f"-- Rollback from {source}\n"
    f"-- to {target}.\n"
    "-- Target migration is kept.\n\n"
)
pathlib.Path(path).write_text(header + body)
print(path)
PY
