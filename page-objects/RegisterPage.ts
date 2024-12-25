import { Locator, Page, expect } from '@playwright/test';
import { AbstractPage } from './AbstractPage';

export class RegisterPage extends AbstractPage {
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly addressField: Locator;
  readonly cityField: Locator;
  readonly stateField: Locator;
  readonly zipField: Locator;
  readonly phoneField: Locator;
  readonly ssnField: Locator;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly confirmPasswordField: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameField = page.locator('#customer\\.firstName');
    this.lastNameField = page.locator('#customer\\.lastName');
    this.addressField = page.locator('#customer\\.address\\.street');
    this.cityField = page.locator('#customer\\.address\\.city');
    this.stateField = page.locator('#customer\\.address\\.state');
    this.zipField = page.locator('#customer\\.address\\.zipCode');
    this.phoneField = page.locator('#customer\\.phoneNumber');
    this.ssnField = page.locator('#customer\\.ssn');
    this.usernameField = page.locator('#customer\\.username');
    this.passwordField = page.locator('#customer\\.password');
    this.confirmPasswordField = page.locator('#repeatedPassword');
    this.registerButton = page.locator('input[value="Register"]');
  }

  async visit(): Promise<void> {
    await this.navigateTo('https://parabank.parasoft.com/parabank/register.htm');
  }

  async register(
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    phone: string,
    ssn: string,
    username: string,
    password: string
  ): Promise<void> {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.addressField.fill(address);
    await this.cityField.fill(city);
    await this.stateField.fill(state);
    await this.zipField.fill(zip);
    await this.phoneField.fill(phone);
    await this.ssnField.fill(ssn);
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.confirmPasswordField.fill(password);
    await this.registerButton.click();
  }
}
