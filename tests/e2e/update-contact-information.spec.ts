import { test, expect } from '@playwright/test';
import { UpdateContactInformation } from '../../page-objects/UpdateContactInformation';

test.describe('Update Contact Information Tests', () => {

  test('Test update contact information', async ({ page }) => {
    const updateContactInfo = new UpdateContactInformation(page);
    await updateContactInfo.fillContactInfo('John', 'Doe', '123 New Address', 'City', 'State', '54321', '0987654321');
    await updateContactInfo.updateProfile();
    await updateContactInfo.assertUpdateSuccess(); // Verify the data was updated
  });

  test('Test update with missing first name', async ({ page }) => {
    const updateContactInfo = new UpdateContactInformation(page);
    await updateContactInfo.fillContactInfo('', 'Doe', '123 New Address', 'City', 'State', '54321', '0987654321');
    await updateContactInfo.updateProfile();
    await expect(page.locator('.error')).toBeVisible(); // Error for missing first name
  });

});
