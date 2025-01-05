import { test, expect } from '@playwright/test';

test.describe('Forgot Login Info Tests', () => {
  test('Test "Forgot Login Info" Link', async ({ page }) => {
    // Go to the main page
    await page.goto('https://parabank.parasoft.com/parabank/login.htm');
    
    // Locate the "Forgot login info?" link and verify its href
    const forgotLoginInfoLink = page.locator('a[href="lookup.htm"]');
    
    // Ensure that the link is visible on the page
    await expect(forgotLoginInfoLink).toBeVisible();

    // Click on the "Forgot login info?" link
    await forgotLoginInfoLink.click();
    
    // Wait for the "Forgot Login Info" page to load and verify the URL
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/lookup.htm');
    
    // Optionally, verify some element on the "Forgot Login Info" page
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Forgot Login Info'); // Adjust according to the actual heading text
  });
});
