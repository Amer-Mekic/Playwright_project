import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../page-objects/RegisterPage';

test.describe.parallel.only('Registration Flow', () => {
  let registerPage: RegisterPage;

  // Before Hook
  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);

    // Clear cookies to ensure the user is logged out
    await page.context().clearCookies();

    // Navigate to the registration page
    await registerPage.visit();
  });
  
  // Positive Scenario
  test('Positive Scenario for registration', async ({ page }) => {
    const username = `testuser${Date.now()}`; // Unique username
    const password = 'securepassword';

    await registerPage.register(
      'Test', 
      'User', 
      '123 Main St', 
      'Cityville', 
      'State', 
      '12345', 
      '555-555-5555', 
      '123-45-6789', 
      username, 
      password
    );
    // Check if the registration was successful
    await expect(page.locator("#rightPanel form")).toBeHidden({timeout:3000});
   });

  // Negative Scenario
  test('Negative Scenario for registration', async ({ page }) => {
    // Try to register without filling required fields
    await registerPage.register(
      '', '', '', '', '', '', '', '', '', ''
    );

    // Check for validation error messages
    await page.waitForTimeout(2000);
    const errorMessages = await page.locator('.error').allTextContents();
    expect(errorMessages.length).toBeGreaterThan(0);
  });
});
