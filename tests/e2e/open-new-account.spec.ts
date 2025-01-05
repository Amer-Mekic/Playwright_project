import { test, expect } from '@playwright/test';
import { OpenNewAccount } from '../../page-objects/OpenNewAccount';

test.describe('Open New Account Tests', () => {

  test('Test ability to open a new checking account', async ({ page }) => {
    const openNewAccount = new OpenNewAccount(page);
    await openNewAccount.selectAccountType('CHECKING');
    await openNewAccount.selectFromAccount('14565');
    await openNewAccount.openAccount();
    // Add assertions based on expected result after account creation
  });

  test('Test ability to open a new savings account', async ({ page }) => {
    const openNewAccount = new OpenNewAccount(page);
    await openNewAccount.selectAccountType('SAVINGS');
    await openNewAccount.selectFromAccount('14565');
    await openNewAccount.openAccount();
    // Add assertions based on expected result after account creation
  });

  test('Test invalid account selection', async ({ page }) => {
    const openNewAccount = new OpenNewAccount(page);
    await openNewAccount.selectAccountType('INVALID_ACCOUNT_TYPE');
    await openNewAccount.selectFromAccount('14565');
    await openNewAccount.openAccount();
    // Expected error message due to invalid selection
    await expect(page.locator('.error')).toBeVisible();
  });

});
