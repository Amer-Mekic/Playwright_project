
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
   
    await accountService.clickOpenNewAccount();
    await expect(page).toHaveURL(/.*openaccount/);

    await page.waitForSelector('a[href="overview.htm"]');
    await accountService.clickAccountsOverview();
    await expect(page).toHaveURL(/.*overview/);

    await accountService.clickTransferFunds();
    await expect(page).toHaveURL(/.*transfer/);

    await accountService.clickBillPay();
    await expect(page).toHaveURL(/.*billpay/);

    await accountService.clickFindTransactions();
    await expect(page).toHaveURL(/.*findtrans/);

    await accountService.clickUpdateContactInfo();
    await expect(page).toHaveURL(/.*updateprofile/);

    await accountService.clickRequestLoan();
    await expect(page).toHaveURL(/.*requestloan/);

    await accountService.clickLogOut();
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');
  });
});
