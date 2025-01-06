import { Page, Locator, expect } from '@playwright/test';

export class ContactPage {
  private page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  public contactUsLink: Locator;
  private nameInput: Locator;
  private emailInput: Locator;
  private phoneInput: Locator;
  private messageInput: Locator;
  private sendButton: Locator;
  private formContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    this.contactUsLink = page.getByRole('link', { name: 'Contact Us' });
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.phoneInput = page.locator('#phone');
    this.messageInput = page.locator('#message');
    this.sendButton = page.getByRole('button', { name: 'Send to Customer Care' });
    this.formContainer = page.locator('form');  // Assuming the form is wrapped in a <form> tag
  }

  // Log in to the application
  async logIn(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // Fill out the contact form
  async fillOutContactForm(name: string, email: string, phone: string, message: string): Promise<void> {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.messageInput.fill(message);
  }

  // Submit the contact form
  async submitContactForm(): Promise<void> {
    await this.sendButton.click();
  }

  // Check if the form is no longer visible after submission
  async checkFormNotVisible(): Promise<void> {
    await expect(this.formContainer).toBeHidden();
  }

  // Check if the submit button is no longer visible after submission
  async checkSubmitButtonNotVisible(): Promise<void> {
    await expect(this.sendButton).toBeHidden();
  }

  // Check for the error message for missing phone
  async checkPhoneErrorVisible(): Promise<void> {
    const phoneError = this.page.locator('text=Phone is required.');
    await expect(phoneError).toBeVisible();
  }

  // Check for the error message for missing message
  async checkMessageErrorVisible(): Promise<void> {
    const messageError = this.page.locator('text=Message is required.');
    await expect(messageError).toBeVisible();
  }
}
