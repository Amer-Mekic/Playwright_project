import { Locator, Page, expect } from '@playwright/test';

export class ContactPage {
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly phoneField: Locator;
  readonly messageField: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.nameField = page.locator('#name');
    this.emailField = page.locator('#email');
    this.phoneField = page.locator('#phone');
    this.messageField = page.locator('#message');
    this.submitButton = page.locator('button[type="submit"]');
    this.successMessage = page.locator('.success'); // Adjust if locator differs
  }

  async fillForm(name: string, email: string, phone: string, message: string): Promise<void> {
    await this.nameField.fill(name);
    await this.emailField.fill(email);
    await this.phoneField.fill(phone);
    await this.messageField.fill(message);
  }

  async submitForm(): Promise<void> {
    await this.submitButton.click();
  }

  async assertSuccessMessage(): Promise<void> {
    await expect(this.successMessage).toBeVisible({ timeout: 60000 });
  }
}
