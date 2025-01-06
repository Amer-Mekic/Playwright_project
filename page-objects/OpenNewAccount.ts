import { Page, Locator, expect } from '@playwright/test';

export class OpenNewAccount {
  private page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private openNewAccountLink: Locator;
  private accountTypeDropdown: Locator;
  private fromAccountDropdown: Locator;
  private openAccountButton: Locator;
  private accountOpenedHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    this.openNewAccountLink = page.getByRole('link', { name: 'Open New Account' });
    this.accountTypeDropdown = page.locator('#type');
    this.fromAccountDropdown = page.locator('#fromAccountId');
    this.openAccountButton = page.getByRole('button', { name: 'Open New Account' });
    this.accountOpenedHeading = page.getByRole('heading', { name: 'Account Opened!' });
  }

  // Log in to the application
  async logIn(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // Open a new account
  async openNewAccount(accountType: string, fromAccount: string): Promise<void> {
    await this.openNewAccountLink.click();
    await this.accountTypeDropdown.selectOption(accountType);
    await this.fromAccountDropdown.selectOption(fromAccount);
    await this.openAccountButton.click();
  }

  // Verify if the account was opened successfully
  async verifyAccountOpened(): Promise<void> {
    await expect(this.accountOpenedHeading).toBeVisible();
  }
}
