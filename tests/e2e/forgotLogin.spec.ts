import { test } from '@playwright/test';
import { ForgotLoginPage } from '../../page-objects/ForgotLoginPage';

test.describe('Forgot Login Info', () => {
  test('should retrieve login information successfully', async ({ page }) => {
    // Test data
    const firstName = 'ajdin';
    const lastName = 'hasecic';
    const street = '45';
    const city = 'sa';
    const state = 'ba';
    const zipCode = '71';
    const ssn = '455';

    // Instantiate the ForgotLoginPage object
    const forgotLoginPage = new ForgotLoginPage(page);

    // Step 1: Navigate to the main login page
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // Step 2: Navigate to the Forgot Login Info page
    await forgotLoginPage.navigateToForgotLogin();

    // Step 3: Fill out the Customer Lookup form
    await forgotLoginPage.fillCustomerLookupForm(firstName, lastName, street, city, state, zipCode, ssn);

    // Step 4: Submit the form to retrieve login info
    await forgotLoginPage.submitCustomerLookupForm();

    // Step 5: Verify the retrieved login information
    await forgotLoginPage.verifyLoginInfo();
  });

  test('should show an error when zip code is missing', async ({ page }) => {
    // Test data
    const firstName = 'ajdin';
    const lastName = 'hasecic';
    const street = '45';
    const city = 'sa';
    const state = 'ba';
    const zipCode = ''; // Intentionally left blank
    const ssn = '455';

    // Instantiate the ForgotLoginPage object
    const forgotLoginPage = new ForgotLoginPage(page);

    // Step 1: Navigate to the main login page
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // Step 2: Navigate to the Forgot Login Info page
    await forgotLoginPage.navigateToForgotLogin();

    // Step 3: Fill out the Customer Lookup form (without ZIP code)
    await forgotLoginPage.fillCustomerLookupForm(firstName, lastName, street, city, state, zipCode, ssn);

    // Step 4: Submit the form
    await forgotLoginPage.submitCustomerLookupForm();

    // Step 5: Verify the error message
    await forgotLoginPage.verifyErrorMessage();
  });
});
