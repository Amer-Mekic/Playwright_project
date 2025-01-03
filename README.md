# Playwright Testing Project

This project uses Playwright for end-to-end testing of various features in a web application. Below are instructions for setting up the project, running tests, and ensuring the environment is correctly configured.

---

## Prerequisites

Ensure the following are installed on your machine:
- **Node.js**
- **npm** 
- **Git**

---

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

---

## How to Run Tests

### Running All Tests
To execute all the tests in the project:
```bash
npx playwright test
```

### Running Specific Tests
Run a specific test file:
```bash
npx playwright test tests/e2e/<TestFileName>.spec.ts
```

### Running Tests in a Specific Browser
Execute tests in a specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Running Smoke Tests
Use the custom NPM command :
```bash
npm run test:smoke
```

### Debugging Tests
Run tests in debug mode:
```bash
npx playwright test --debug
```

### Generating Reports
After running tests, a report will be generated. Open it using:
```bash
npx playwright show-report
```

---

## Test Environment

- **User Login Required:**
  Some tests require the user to be logged in. Ensure valid credentials are set up for automated login during test execution.

- **Session Management:**
  Before running tests, session data from previous runs should be cleared. This is handled automatically in the tests, but ensure localStorage and cookies are managed as needed.

---

## Troubleshooting

- **Tests Not Executing as Expected:**
  If tests aren’t running after pulling from the repository, ensure the test directory and test file naming conventions match the `testDir` configuration in `playwright.config.ts`.

- **Browser Issues:**
  If browsers are not launching, reinstall Playwright browsers:
  ```bash
  npx playwright install
  ```

- **Dependency Issues:**
  Ensure dependencies are up to date:
  ```bash
  npm install
  ```

---

## Additional Notes

- For optimal performance, ensure adequate system resources are available (e.g., CPU and memory).
- For any specific configurations, modify `playwright.config.ts`