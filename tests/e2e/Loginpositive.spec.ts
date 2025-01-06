import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe.parallel('Login Flow', () => {
  let loginPage: LoginPage

  // Before Hook
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    // Clear cookies
    await page.context().clearCookies();

    await loginPage.visit()
  })

 
  // Positive Scenario
  test('Positive Scenario for login', async ({ page }) => {
    await loginPage.login('jd123', 'pass1')
    await expect(page).toHaveURL(/.*overview\.htm.*/);
    //await page.goto('https://parabank.parasoft.com/parabank/logout.htm')
  })
})