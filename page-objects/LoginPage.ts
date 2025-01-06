import { expect, Locator, Page } from '@playwright/test';
import { AbstractPage } from './AbstractPage';

export class LoginPage extends AbstractPage {
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameField = page.locator('input[name="username"]');
    this.passwordField = page.locator('input[name="password"]');
    this.loginButton = page.locator('input[value="Log In"]');
    this.errorMessage = page.locator('.error');
  }

  async visit(): Promise<void> {
    await this.navigateTo('https://parabank.parasoft.com/parabank/index.htm');
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async assertWrongRedirect() {
    await expect(this.page).toHaveURL(
      /.*login\.htm.*/
    )
  }
  async assertSuccessfulRedirect(){
    await expect(this.page).toHaveURL(/.*overview\.htm.*/);
  }
  async assertErrorMessage() {
    await expect(this.page.locator('.error')).toBeVisible();
  }
}
