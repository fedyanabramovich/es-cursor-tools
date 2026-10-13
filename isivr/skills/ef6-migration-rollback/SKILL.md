---
name: ef6-migration-rollback
description: >-
  Generates a PostgreSQL rollback SQL script for ISIVR Entity Framework 6
  migrations in ISIVR.DM. Use when the user asks for a migration rollback,
  downgrade script, откат миграции, or dotnet ef migrations script between
  two ISIVR releases or migration ids. Releases are numbered 1.49, 1.50,
  1.51, and so on, and map to branches release/1.49, release/1.50, or to
  dev when that version is only marked by a tag such as v-1.51.0. Use this
  skill for requests like «откат с 1.51 на 1.50».
---

# EF6 migration rollback

ISIVR migrations under `ISIVR.DM/Migrations` are Entity Framework 6 (`System.Data.Entity.Migrations.DbMigration`) against PostgreSQL. `dotnet ef migrations script` is EF Core and cannot script them. EF6 `MigratorScriptingDecorator.ScriptUpdate` throws when the source migration is newer than the target.

Source is the newer migration (current database). Target is the older migration to land on. The target's own `Down` is not included.

## Refresh git

Before resolving releases, fetch the latest refs:

```bash
git fetch origin --tags --prune
```

Compare `origin/...`, not stale local branches. If the current branch is `dev` and `git merge --ff-only origin/dev` can fast-forward, do that. If it cannot, leave the local branch as it is and compare `origin/dev`.

## Resolve a release

Versions are `1.49`, `1.50`, `1.51`, and so on. For version `1.N`:

1. If `origin/release/1.N` exists, that ref is the release.
2. If that branch does not exist, but tag `v-1.N.0` exists and is an ancestor of `origin/dev` (`git merge-base --is-ancestor v-1.N.0 origin/dev`), the release is the whole current `origin/dev`. The tag only marks that dev is this release; commits after the tag count. Today `release/1.51` does not exist and `v-1.51.0` is on `dev`, so `1.51` is `origin/dev`.
3. If neither the branch nor such a tag exists, stop and name the missing ref.

## Release rollback

A rollback is from a newer `release/*` branch to an older one, for example from `release/1.50` to `release/1.49`. The source release is the newer one and the target release is the older one. Write the file in the repository root:

`isivr_rollback_1.<newer>_to_1.<older>.sql`

Example: 1.50 to 1.49 is `isivr_rollback_1.50_to_1.49.sql`.

Migrations are `ISIVR.DM/Migrations/*.cs` except `*.Designer.cs` that exist on the source ref and not on the target ref.

- If there are none, write a comment-only script and do not run the exporter:

```sql
-- Rollback from 1.51 to 1.50.
-- No migrations to revert.
```

- If there are some, the script source is the newest migration on the newer release (highest timestamp prefix). The script target is the newest migration on the older release. Its `Down` is not included. Then run the exporter below.

## Generate the script

Run from anywhere. `<output.sql>` is a path relative to the repository root unless it is absolute.

```bash
.cursor/skills/ef6-migration-rollback/scripts/export-rollback.sh \
  <sourceMigration> <targetMigration> <output.sql>
```

Example for a rollback from `release/1.50` to `release/1.49`. Release 1.50 adds `202608250941394_IVRAudioGroupIsDynamic` and `202609151202366_AccessUserRemoveRoleIDp1`. The source is the newest 1.50 migration. The target is the newest 1.49 migration; its `Down` is not included.

```bash
.cursor/skills/ef6-migration-rollback/scripts/export-rollback.sh \
  202609151202366_AccessUserRemoveRoleIDp1 \
  202603311232132_IVRDynamicListRuleEmailMessages \
  isivr_rollback_1.50_to_1.49.sql
```

The script copies a temporary exporter into `ISIVR.DM`, builds it, writes the SQL, then deletes the exporter and `.migration-scripter`. A live database is not required. Do not leave those temporary files in the tree, and do not commit them.

## After generation

Read the SQL and the `Down` method of every migration strictly after the target, through the source. Tell the user:

- which migrations are reverted, newest first
- that the target migration stays applied
- any `Down` that is empty or commented out, so only the `__MigrationHistory` row is removed

For a comment-only script, say that the releases have no migration difference.

History deletes use `ContextKey` `ISIVR.DM.Migrations.Configuration` unless `Configuration` sets another key. Do not commit the SQL unless the user asks.
