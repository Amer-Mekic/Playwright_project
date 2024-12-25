import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';
import { TransferFundsPage } from '../../page-objects/TransferFundsPage';

test.describe('Transfer Funds', () => {
  let loginPage: LoginPage;
  let transferFundsPage: TransferFundsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    transferFundsPage = new TransferFundsPage(page);

    // Visit login page and log in
    await loginPage.visit();
    await loginPage.login('2', '1');

    // Navigate to the transfer funds page
    await transferFundsPage.visit();
  });

  test('Transfer funds successfully and verify success message', async ({ page }) => {
    await transferFundsPage.transferFunds('100');

    // Assert the success message is displayed
    await transferFundsPage.assertTransferSuccess();
  });
});
