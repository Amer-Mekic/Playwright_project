import { Page, Locator, expect } from '@playwright/test';

export class ForgotLoginPage {
  private page: Page;

  // Locators
  private forgotLoginLink: Locator;
  private firstNameInput: Locator;
  private lastNameInput: Locator;
  private streetInput: Locator;
  private cityInput: Locator;
  private stateInput: Locator;
  private zipCodeInput: Locator;
  private ssnInput: Locator;
  private findLoginButton: Locator;
  private successMessage: Locator;
  private usernameDisplay: Locator;
  private passwordDisplay: Locator;
  private errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    // Initialize locators
    this.forgotLoginLink = page.getByRole('link', { name: 'Forgot login info?' });
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.streetInput = page.locator('[id="address\\.street"]');
    this.cityInput = page.locator('[id="address\\.city"]');
    this.stateInput = page.locator('[id="address\\.state"]');
    this.zipCodeInput = page.locator('[id="address\\.zipCode"]');
    this.ssnInput = page.locator('#ssn');
    this.findLoginButton = page.getByRole('button', { name: 'Find My Login Info' });
    this.successMessage = page.getByText('Your login information was located successfully');
    this.usernameDisplay = page.getByText('Username:');
    this.passwordDisplay = page.getByText('Password:');
    this.errorMessage = page.getByText('Zip Code is required.');
  }

  // Navigate to the Forgot Login page
  async navigateToForgotLogin(): Promise<void> {
    await this.forgotLoginLink.click();
    await expect(this.page.getByRole('heading', { name: 'Customer Lookup' })).toBeVisible();
  }

  // Fill out the customer lookup form
  async fillCustomerLookupForm(
    firstName: string,
    lastName: string,
    street: string,
    city: string,
    state: string,
    zipCode: string,
    ssn: string
  ): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.streetInput.fill(street);
    await this.cityInput.fill(city);
    await this.stateInput.fill(state);
    await this.zipCodeInput.fill(zipCode);
    await this.ssnInput.fill(ssn);
  }

  // Submit the form to retrieve login info
  async submitCustomerLookupForm(): Promise<void> {
    await this.findLoginButton.click();
  }

  // Verify the retrieved login info
  async verifyLoginInfo(): Promise<void> {
    await expect(this.successMessage).toBeVisible();
    await expect(this.usernameDisplay).toBeVisible();
    await expect(this.passwordDisplay).toBeVisible();
  }

  // Verify error message for missing fields
  async verifyErrorMessage(): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
  }
}
