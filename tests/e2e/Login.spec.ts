import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe.parallel.only('Login / Logout Flow', () => {
  let loginPage: LoginPage

  // Before Hook
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    // Clear cookies
    await page.context().clearCookies();

    await loginPage.visit()
  })

  // Negative Scenario
  test('Negative Scenario for login', async ({ page }) => {
    await page.context().clearCookies();
    await loginPage.login('invalid username', 'invalid password')
    await loginPage.assertErrorMessage()
  })

  // Positive Scenario
  test('Positive Scenario for login', async ({ page }) => {
    await page.context().clearCookies();
    await loginPage.login('2', '1')
    await expect(page).toHaveURL(/.*overview\.htm.*/);
    await page.goto('https://parabank.parasoft.com/parabank/logout.htm')
  })
})