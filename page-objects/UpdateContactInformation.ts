import { Page, Locator, expect } from '@playwright/test';

export class UpdateContactInformationPage {
  private page: Page;

  // Locators
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private updateContactInfoLink: Locator;
  private zipCodeInput: Locator;
  private updateProfileButton: Locator;
  private profileUpdatedHeading: Locator;
  private successMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    // Initialize locators
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    this.updateContactInfoLink = page.getByRole('link', { name: 'Update Contact Info' });
    this.zipCodeInput = page.locator('[id="customer\\.address\\.zipCode"]');
    this.updateProfileButton = page.getByRole('button', { name: 'Update Profile' });
    this.profileUpdatedHeading = page.getByRole('heading', { name: 'Profile Updated' });
    this.successMessage = page.getByText('Your updated address and');
  }

  // Log in to the application
  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // Navigate to Update Contact Info page
  async navigateToUpdateContactInfo(): Promise<void> {
    await this.updateContactInfoLink.click();
  }

  // Update the ZIP code
  async updateZipCode(newZipCode: string): Promise<void> {
    await this.zipCodeInput.click();
    await this.zipCodeInput.fill(newZipCode);
  }

  // Submit the updated contact information
  async submitUpdatedContactInfo(): Promise<void> {
    await this.updateProfileButton.click();
  }

  // Verify that the ZIP code has been updated
  async verifyZipCodeUpdated(newZipCode: string): Promise<void> {
    const zipCodeValue = await this.zipCodeInput.inputValue();
    expect(zipCodeValue).toBe(newZipCode);
  }

  // Verify that the ZIP code input remains empty
  async verifyZipCodeNotUpdated(): Promise<void> {
    const zipCodeValue = await this.zipCodeInput.inputValue();
    expect(zipCodeValue).toBe('');
  }
}
