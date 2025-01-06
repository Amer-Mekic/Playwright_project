import { test, expect } from '@playwright/test';
import { OpenNewAccount } from '../../page-objects/OpenNewAccount';

test('Open Checking and Savings accounts', async ({ page }) => {
  const openNewAccountPage = new OpenNewAccount(page);

  // Log in with new credentials
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await openNewAccountPage.logIn('jd123', 'pass1');

  // Open Checking Account
  await openNewAccountPage.openNewAccount('0', '13566');  // '0' for CHECKING account type, '13566' is the account to fund from
  await openNewAccountPage.verifyAccountOpened();  // Verify the "Account Opened!" heading is visible

  // Open Savings Account
  await openNewAccountPage.openNewAccount('1', '13566');  // '1' for SAVINGS account type, '13566' is the account to fund from
  await openNewAccountPage.verifyAccountOpened();  // Verify the "Account Opened!" heading is visible
});
