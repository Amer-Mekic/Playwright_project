import { test } from '@playwright/test';
import { UpdateContactInformationPage } from '../../page-objects/UpdateContactInformation';

test.describe('Update Contact Information', () => {
  test('should update contact information successfully', async ({ page }) => {
    // Test data
    const username = 'ajdara';
    const password = '7777';
    const newZipCode = '88';

    // Instantiate the UpdateContactInformationPage object
    const updateContactInformationPage = new UpdateContactInformationPage(page);

    // Step 1: Navigate to the login page
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // Step 2: Log in to the application
    await updateContactInformationPage.login(username, password);

    // Step 3: Navigate to Update Contact Info page
    await updateContactInformationPage.navigateToUpdateContactInfo();

    // Step 4: Update the ZIP code
    await updateContactInformationPage.updateZipCode(newZipCode);

    // Step 5: Submit the updated contact information
    await updateContactInformationPage.submitUpdatedContactInfo();

    // Step 6: Verify the ZIP code was updated
    await updateContactInformationPage.verifyZipCodeUpdated(newZipCode);
  });

  test('should not update contact information when ZIP code is not entered', async ({ page }) => {
    // Test data
    const username = 'ajdara';
    const password = '7777';

    // Instantiate the UpdateContactInformationPage object
    const updateContactInformationPage = new UpdateContactInformationPage(page);

    // Step 1: Navigate to the login page
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // Step 2: Log in to the application
    await updateContactInformationPage.login(username, password);

    // Step 3: Navigate to Update Contact Info page
    await updateContactInformationPage.navigateToUpdateContactInfo();

    // Step 4: Leave the ZIP code empty (do not update it)
    // Step 5: Submit the updated contact information
    await updateContactInformationPage.submitUpdatedContactInfo();

    // Step 6: Verify the ZIP code remains empty, confirming no update occurred
    await updateContactInformationPage.verifyZipCodeNotUpdated();
  });
});
