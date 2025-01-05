import { test, expect } from '@playwright/test';
import { ContactPage } from '../../page-objects/ContactPage';

test.describe('Contact Page Tests', () => {

  test('Verify Contact Page form functionality', async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.fillForm('John Doe', 'john@example.com', '1234567890', 'Test message');
    await contactPage.submitForm();
    await contactPage.assertSuccessMessage(); // Adjust as per actual success criteria
  });

  test('Verify Contact Page form with empty fields', async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.submitForm();
    await contactPage.assertErrorMessage(); // Adjust as per error message
  });

  test('Verify Contact Page form reset after submission', async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.fillForm('John Doe', 'john@example.com', '1234567890', 'Test message');
    await contactPage.submitForm();
    await contactPage.assertSuccessMessage();
    await contactPage.assertFormFieldsAreEmpty(); // Fields should be empty after submission
  });

  test('Verify Contact Page form with invalid email', async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.fillForm('John Doe', 'invalid-email', '1234567890', 'Test message');
    await contactPage.submitForm();
    await contactPage.assertErrorMessage(); // Error for invalid email
  });

});
