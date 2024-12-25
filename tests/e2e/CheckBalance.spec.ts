import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';
import { AccountPage } from '../../page-objects/AccountPage';

test.describe('Check Balance', () => {
  let loginPage: LoginPage;
  let accountPage: AccountPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    accountPage = new AccountPage(page);

    // Navigate and log in
    await loginPage.visit();
    await loginPage.login('2', '1');

    // Navigate to the account overview page
    await accountPage.visit();
  });

  test('Verify account overview is visible and total balance is correct', async ({ page }) => {
    // Check if the account overview is visible
    const isOverviewVisible = await accountPage.isAccountOverviewVisible();
    expect(isOverviewVisible).toBe(true);

    // Verify the total balance
    const totalBalance = await page.locator('#accountTable tbody tr td:nth-child(2) b').textContent();
    expect(totalBalance).toContain('$'); // Assert that the total balance contains a dollar sign
  });

  test('Verify account details can be viewed', async ({ page }) => {
    // Click on account details link to navigate to activity page
    await accountPage.viewAccountDetails();
    await expect(page).toHaveURL(/activity\.htm/); // Assert navigation to the activity page
  });
});
