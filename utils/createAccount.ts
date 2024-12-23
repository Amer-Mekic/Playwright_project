import { Page } from '@playwright/test';

export async function createAccount(page: Page) {
  await page.goto('https://parabank.parasoft.com/parabank/register.htm');
  await page.fill('#customer\\.firstName', 'Test');
  await page.fill('#customer\\.lastName', 'User');
  await page.fill('#customer\\.address\\.street', '123 Main St');
  await page.fill('#customer\\.address\\.city', 'TestCity');
  await page.fill('#customer\\.address\\.state', 'TestState');
  await page.fill('#customer\\.address\\.zipCode', '12345');
  await page.fill('#customer\\.phoneNumber', '1234567890');
  await page.fill('#customer\\.ssn', '123-45-6789');
  await page.fill('#customer\\.username', 'testuser');
  await page.fill('#customer\\.password', 'password');
  await page.fill('#repeatedPassword', 'password');
  await page.click('input[type="submit"]');
}
