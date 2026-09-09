# `@sebastienrousseau/sql-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/sql-config`.

---

## Description
Shareable SQL configuration standards providing dialect-aware SQLFluff linting and SQL formatting presets.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/sql-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. .sqlfluff
- **Description**: Dialect-aware SQLFluff linting preset enforcing uppercase keywords, lowercase identifiers, and indentation.
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. .sql-formatter.json
- **Description**: Cross-IDE SQL formatter preset for automated code beautification.
- **Scope**: Production & Development
- **Status**: Stable & Active
