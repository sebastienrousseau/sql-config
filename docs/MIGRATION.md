# Migration Guide for `@sebastienrousseau/sql-config`

How to migrate from ad-hoc or legacy tooling configurations to `@sebastienrousseau/sql-config`.

## Upgrading from Previous Versions

1. Update package version:

   ```bash
   npm install --save-dev @sebastienrousseau/sql-config@latest
   ```

1. Verify module resolution with `npm test`.

## Migrating from Bespoke Configurations

Remove fragmented configuration files from the project root and reference `@sebastienrousseau/sql-config` in your project configuration or config entrypoint.
