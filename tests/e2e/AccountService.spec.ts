
import { test, expect } from '@playwright/test';
import { AccountService } from '../../page-objects/AccountService';

test.describe('Account Services', () => {
  let accountService: AccountService;

  test.beforeEach(async ({ page }) => {

    accountService = new AccountService(page);

    await page.goto('https://parabank.parasoft.com/parabank/overview.htm');

    await page.fill('input[name="username"]', 'jd123');
    await page.fill('input[name="password"]', 'pass1');
    await page.click('input[type="submit"]');

    await page.waitForSelector('a[href="openaccount.htm"]');
  });

  test('Verify Account Services links after login', async ({ page }) => {
    const accountService = new AccountService(page);
  
    await accountService.clickOpenNewAccount();
    await accountService.clickAccountsOverview();
    await accountService.clickTransferFunds();
    await accountService.clickBillPay();
    await accountService.clickFindTransactions();
    await accountService.clickUpdateContactInfo();
    await accountService.clickRequestLoan();
    await accountService.clickLogOut();
  });
});
