import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe.parallel.only('Login / Logout Flow', () => {
  let loginPage: LoginPage

  // Before Hook
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    // Clear cookies
    await loginPage.visit()
  })

  // Negative Scenario
  test('Negative Scenario for login invalid creds', async ({ page }) => {
    await loginPage.login('invalid username', 'invalid password')
    await loginPage.assertErrorMessage()
  })
  // Negative Scenario
  test('Negative scenario for login no creds', async ({ page }) => {
    await loginPage.login('', '')
    await loginPage.assertErrorMessage()
  })
})

