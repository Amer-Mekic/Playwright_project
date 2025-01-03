import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';
import { LogoutPage } from '../../page-objects/LogoutPage';

test.describe.parallel('Logout Functionality', () => {
  let loginPage: LoginPage;
  let logoutPage: LogoutPage;

  // Before hook for logging in
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    logoutPage = new LogoutPage(page);

    await loginPage.visit();
    await loginPage.login('jd123', 'pass1');
  });

  test('Successful Logout and redirection to login page', async ({ page }) => {
    await logoutPage.logout();
    await logoutPage.isLogoutSuccessful(); // Check redirection to login page (which is also homepage)
  });
});
