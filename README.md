# Advance Playwright Framework 2x Self Study

A modular Playwright + TypeScript automation framework for web and API testing, built for structured, maintainable, and scalable test automation.

## Project Overview

This project demonstrates a structured approach to Playwright automation using:

- Playwright Test for browser automation
- TypeScript for typed, reusable code
- Environment-based configuration using `.env`
- Page Object Model (POM) style structure
- API utilities and reusable helpers
- Reporting and test data management
- Custom logging and configuration patterns

## Tech Stack

- Node.js
- TypeScript
- Playwright
- dotenv
- csv-parse
- xlsx
- Ajv / Ajv Formats
- Winston
- Allure Playwright

## Project Structure

```text
AdvancePlaywrightFramework2x-SelfStudy/
├── .env
├── .github/
├── docs/
├── rules/
├── src/
│   ├── api/
│   ├── config/
│   ├── fixtures/
│   ├── pages/
│   ├── testdata/
│   ├── tests/
│   └── utils/
├── tests/
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
├── README.md
└── node_modules/
```

## Folder Responsibilities

- `src/api` – API clients and request helpers
- `src/config` – environment and config management
- `src/fixtures` – Playwright fixtures and reusable setup
- `src/pages` – Page Object Model classes
- `src/testdata` – CSV/JSON/XLSX data files and test payloads
- `src/tests` – actual Playwright test suite
- `src/utils` – custom reporter, logger, helpers, utility code
- `docs` – documentation and notes
- `rules` – custom rules or guidance
- `.github` – GitHub workflow and automation files

## Prerequisites

Before running tests, install the following:

- Node.js 18+
- npm
- Git

## Installation

```bash
npm install
npx playwright install
```

## Environment Configuration

The project uses a `.env` file for runtime configuration.

Example values:

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

## Playwright Configuration

The framework uses `playwright.config.ts` to configure:

- base URL selection based on environment
- test directory
- timeouts
- retries
- HTML and list reporting
- browser project configuration
- screenshots, video, and trace capture

## Run Tests

Run all tests:

```bash
npm test
```

Run in headed mode:

```bash
npm run test:headed
```

Open the HTML report:

```bash
npm run test:report
```

## Example Test

A sample test file is available under `tests/example.spec.ts` and demonstrates:

- page navigation
- title assertions
- element interactions
- role-based selectors

## Notes

- This repository is designed for learning and structured automation practice.
- The project is intentionally modular so new test flows, pages, and utilities can be added cleanly.
- The configuration can be extended for multiple environments (QA, STG, DEV, PROD).

## Author

Pramod Dutta

## Repository

https://github.com/Aviparam/AdvancePlaywrightFramework2x-SelfStudy.git