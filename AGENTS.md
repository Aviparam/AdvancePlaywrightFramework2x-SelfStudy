# AGENTS.md

## Purpose

This repository is a Playwright + TypeScript test automation project for web and API testing. Keep changes aligned with the structure documented in [README.md](README.md) and the test config in [playwright.config.ts](playwright.config.ts).

## Project conventions

- Use Node.js and TypeScript.
- Keep test automation code in the Playwright project structure, not in ad-hoc top-level files.
- Prefer `npm` scripts from [package.json](package.json) for running tests.
- Use the existing folder boundaries:
  - `src/pages` for Page Object Model classes
  - `src/tests` for automation specs
  - `src/utils` for helpers, custom reporters, logging, and reuse
  - `src/config` for environment/config logic
  - `src/api` for API clients and request logic
  - `src/fixtures` for Playwright fixtures
  - `src/testdata` for data files
- Keep tests readable, maintainable, and deterministic.
- Prefer role-based selectors and stable locators over brittle CSS queries when possible.
- Avoid hardcoding environment-specific URLs in tests; use `.env` and Playwright config environment resolution.

## Commands

Use the package scripts for normal flows:

```bash
npm install
npx playwright install
npm test
npm run test:headed
npm run test:report
```

## Environment and config

- The project loads environment values from `.env`.
- Do not commit secrets or personal credentials.
- Default environment behavior is configured in [playwright.config.ts](playwright.config.ts).
- Use `BASE_URL`, `QA_BASE_URL`, `STG_BASE_URL`, `PROD_BASE_URL`, `DEV_BASE_URL`, and `API_BASE_URL` when adding environment-aware logic.

## Testing guidance

- Add or update tests in `src/tests` or `tests` when appropriate.
- Keep assertions focused on real behavior.
- Avoid mock-only assertions; validate what a real browser or API interaction returns.
- When introducing new helpers, place them in the most specific utility or fixture area instead of scattering logic across tests.

## Documentation

- Keep [README.md](README.md) as the primary entry point for setup and workflow.
- For project-specific behavior, prefer updating the relevant docs rather than duplicating them here.

## Changes to prefer

- Small, focused edits that match the repository structure.
- Reuse existing helper patterns before creating new abstractions.
- Keep naming consistent with the existing Playwright/TypeScript style.
