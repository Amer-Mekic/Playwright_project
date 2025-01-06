import { test, expect } from '@playwright/test';
import { ContactPage } from '../../page-objects/ContactPage';

test.describe('Contact Form Functionality', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);

    // Go to login page
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // Log in using credentials
    await contactPage.logIn('jd123', 'pass1');
  });

  // Positive test case
  test('positive: Fill and submit the form successfully', async ({ page }) => {
    // Navigate to Contact Us page
    await contactPage.contactUsLink.click();

    // Fill out the contact form
    await contactPage.fillOutContactForm('sema', 'sekir@example.com', '4545', 'sta ima');

    // Submit the contact form
    await contactPage.submitContactForm();

    // Check if the form is no longer visible after submission (form disappears)
    await contactPage.checkFormNotVisible();

    // Check if the "Send to Customer Care" button is no longer visible
    await contactPage.checkSubmitButtonNotVisible();
  });

  // Negative test case 1: Missing phone number
  test('negative: Fail to submit the form when phone is missing', async ({ page }) => {
    // Navigate to Contact Us page
    await contactPage.contactUsLink.click();

    // Fill out the contact form (no phone number)
    await contactPage.fillOutContactForm('seka', 'secir@example.com', '', 'Test message with missing phone');

    // Submit the contact form
    await contactPage.submitContactForm();

    // Check for the error message for missing phone
    await contactPage.checkPhoneErrorVisible();
  });

  // Negative test case 2: Missing message
  test('negative: Fail to submit the form when message is missing', async ({ page }) => {
    // Navigate to Contact Us page
    await contactPage.contactUsLink.click();

    // Fill out the contact form (no message)
    await contactPage.fillOutContactForm('seka', 'secir@example.com', '1234567890', '');

    // Submit the contact form
    await contactPage.submitContactForm();

    // Check for the error message for missing message
    await contactPage.checkMessageErrorVisible();
  });
});
