using System.Data.Common;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Migrations;
using System.Data.Entity.Migrations.Infrastructure;
using System.Reflection;
using System.Text;
using System.Xml.Linq;

namespace ISIVR.DM.Migrations;

public static class MigrationScriptExporter
{
    public static string Export(string sourceMigration, string targetMigration, string connectionString)
    {
        DbConfiguration.Loaded += (_, args) =>
        {
            args.ReplaceService<IManifestTokenResolver>((_, _) => new StaticManifestTokenResolver());
        };

        var config = new Configuration
        {
            TargetDatabase = new DbConnectionInfo(connectionString, "Npgsql")
        };

        var migrator = new DbMigrator(config);
        var scriptor = new MigratorScriptingDecorator(migrator);
        var localMigrations = migrator.GetLocalMigrations().OrderBy(id => id, StringComparer.Ordinal).ToList();
        var sourceId = ResolveMigrationId(localMigrations, sourceMigration);
        var targetId = ResolveMigrationId(localMigrations, targetMigration);
        var sourceIndex = localMigrations.IndexOf(sourceId);
        var targetIndex = localMigrations.IndexOf(targetId);

        if (sourceIndex < targetIndex)
        {
            throw new InvalidOperationException(
                $"Source migration '{sourceId}' is older than target '{targetId}'. Swap them to script a downgrade.");
        }

        var migrations = typeof(Configuration).Assembly
            .GetTypes()
            .Where(type => type is { IsClass: true, IsAbstract: false } && typeof(DbMigration).IsAssignableFrom(type))
            .Select(type => (DbMigration)Activator.CreateInstance(type)!)
            .ToDictionary(migration => ((IMigrationMetadata)migration).Id, StringComparer.Ordinal);

        var revertMigration = typeof(DbMigrator).GetMethod(
            "RevertMigration",
            BindingFlags.Instance | BindingFlags.NonPublic)
            ?? throw new MissingMethodException(nameof(DbMigrator), "RevertMigration");

        for (var index = sourceIndex; index > targetIndex; index--)
        {
            var migrationId = localMigrations[index];
            var previousId = localMigrations[index - 1];
            var migration = migrations[migrationId];
            var targetModel = GetTargetModel(migrations[previousId]);
            revertMigration.Invoke(migrator, [migrationId, migration, targetModel]);
        }

        var sqlBuilder = typeof(MigratorScriptingDecorator)
            .GetField("_sqlBuilder", BindingFlags.Instance | BindingFlags.NonPublic)
            ?.GetValue(scriptor) as StringBuilder
            ?? throw new MissingFieldException(nameof(MigratorScriptingDecorator), "_sqlBuilder");

        return sqlBuilder.ToString();
    }

    private static string ResolveMigrationId(IReadOnlyList<string> localMigrations, string migration)
    {
        var match = localMigrations.SingleOrDefault(id =>
            id.Equals(migration, StringComparison.OrdinalIgnoreCase)
            || id.EndsWith("_" + migration, StringComparison.OrdinalIgnoreCase));

        if (match == null)
        {
            throw new InvalidOperationException($"Migration '{migration}' was not found.");
        }

        return match;
    }

    private static XDocument GetTargetModel(DbMigration migration)
    {
        var getTargetModel = typeof(DbMigration).GetMethod(
            "GetTargetModel",
            BindingFlags.Instance | BindingFlags.NonPublic)
            ?? throw new MissingMethodException(nameof(DbMigration), "GetTargetModel");
        var versionedModel = getTargetModel.Invoke(migration, null)
            ?? throw new InvalidOperationException($"Migration '{migration.GetType().Name}' has no target model.");
        var model = versionedModel.GetType().GetProperty("Model")?.GetValue(versionedModel) as XDocument
            ?? throw new MissingMemberException(versionedModel.GetType().FullName, "Model");
        return model;
    }

    private sealed class StaticManifestTokenResolver : IManifestTokenResolver
    {
        public string ResolveManifestToken(DbConnection connection) => "14.0";
    }
}
