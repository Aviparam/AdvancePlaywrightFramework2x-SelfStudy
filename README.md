# Advance Playwright Framework 2x Self Study

This repository is a Playwright + TypeScript-based test automation framework focused on browser UI automation, environment-based execution, reusable page objects, and detailed reporting.

## Project purpose

The goal of this project is to help learn and practice:

- Playwright test automation
- Page Object Model (POM) design
- Environment-driven test configuration
- Reusable utility patterns
- Failure artifact capturing
- HTML and custom reporting
- Modular project structure for scalable automation suites

## Tech stack

- Node.js
- TypeScript
- Playwright Test
- dotenv
- Winston
- Xlsx
- csv-parse
- Ajv and Ajv Formats
- Faker
- Allure Playwright

## Current project structure

```text
AdvancePlaywrightFramework2x-SelfStudy/
├── .env
├── .github/
├── .gitignore
├── AGENTS.md
├── README.md
├── custom-report/
├── docs/
├── node_modules/
├── package-lock.json
├── package.json
├── playwright.config.ts
├── rules/
├── src/
│   ├── api/
│   ├── config/
│   ├── fixtures/
│   ├── pages/
│   ├── testdata/
│   ├── tests/
│   └── utils/
├── test-results/
├── tests/
├── tsconfig.json
└── playwright-report/
```

## Folder responsibilities

- `src/api` – API-related helpers and clients
- `src/config` – environment configuration logic
- `src/fixtures` – Playwright fixtures and setup hooks
- `src/pages` – Page Object Model classes such as `LoginPage` and `BasePage`
- `src/testdata` – test data inputs for CSV/JSON/XLSX driven testing
- `src/tests` – actual Playwright test specs
- `src/utils` – logging, custom report generation, selectors, and reusable utilities
- `docs` – project documentation and notes
- `rules` – custom rules and guidance
- `.github` – GitHub automation and workflow files
- `custom-report` – generated custom HTML report output
- `test-results` – Playwright execution artifacts such as screenshots, video, and traces

## Prerequisites

Make sure the following are installed:

- Node.js 18+
- npm
- Git

## Installation

```bash
npm install
npx playwright install
```

## Environment configuration

The project uses a `.env` file to drive environment-dependent URLs and variables.

Current example values:

```env
TTA_ENV=qa
BASE_URL=https://app.thetestingacademy.com
QA_BASE_URL=https://app.thetestingacademy.com
STG_BASE_URL=https://stage.thetestingacademy.com
PROD_BASE_URL=https://app.thetestingacademy.com
DEV_BASE_URL=http://localhost:3000
API_BASE_URL=https://restful-booker.herokuapp.com
LOG_LEVEL=info
TEST_ENV=QA
TEST_AUTHOR=Pramod
USERNAME=admin
PASSWORD=ADMIN123
```

## Playwright config behavior

The framework is set up in [playwright.config.ts](playwright.config.ts) with:

- `testDir: ./src/tests`
- `timeout: 60_000`
- `fullyParallel: true`
- HTML reporter enabled
- custom reporter enabled
- screenshots captured only on failure
- video captured for every test
- trace captured for every test
- Chromium project configured for desktop browser testing

## Running tests

Run the full suite:

```bash
npm test
```

Run in headed mode:

```bash
npm run test:headed
```

Open Playwright HTML report:

```bash
npm run test:report
```

## Current sample test

A sample login test exists in:

- `src/tests/login.spec.ts`

It validates login using the TTACart demo app and confirms the login form hides after successful login.

## Reporting

The project includes:

- standard Playwright HTML report
- custom HTML reporter in `src/utils/CustomReporter.ts`
- generated reports in `custom-report/`
- run artifacts in `test-results/`

Artifacts include:

- screenshots on failure
- video recording for every test run
- trace files for debugging and analysis

## Notes

- The project is intentionally modular for learning and expansion.
- It is suitable for building more realistic automation suites with page objects, fixtures, and API helpers.
- The config and utilities can be extended for QA, staging, dev, and production environments.

## Repository

https://github.com/Aviparam/AdvancePlaywrightFramework2x-SelfStudy.git

## Author

Pramod Dutta