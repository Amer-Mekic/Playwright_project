import { test, expect } from '@playwright/test';

test.describe('Admin Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Login step
    await page.goto('https://parabank.parasoft.com/parabank/login.htm');
    await page.fill('#username', 'mire88'); // Login username
    await page.fill('#password', '5555'); // Login password
    await page.click('input[type="submit"]'); // Login button

    // Wait for navigation after login
    await page.waitForNavigation({ timeout: 60000 });

    // Navigate to Admin Page
    await page.goto('https://parabank.parasoft.com/parabank/admin.htm');
  });

  test('Test Database Initialization button', async ({ page }) => {
    const initializeButton = page.locator('button[name="action"][value="INIT"]');
    await initializeButton.click();

    const successMessage = page.locator('.success'); // Adjust locator if needed
    await expect(successMessage).toBeVisible({ timeout: 60000 });
  });

  test('Test Database Cleaning button', async ({ page }) => {
    const cleanButton = page.locator('button[name="action"][value="CLEAN"]');
    await cleanButton.click();

    const successMessage = page.locator('.success'); // Adjust locator if needed
    await expect(successMessage).toBeVisible({ timeout: 60000 });
  });

  test('Test Starting JMS service button', async ({ page }) => {
    const startJmsButton = page.locator('input[type="submit"][value="Startup"]');
    await startJmsButton.click();

    const successMessage = page.locator('.success'); // Adjust locator if needed
    await expect(successMessage).toBeVisible({ timeout: 60000 });
  });
});
