import { Locator, Page, expect } from '@playwright/test';

export class UpdateContactInformation {
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly addressField: Locator;
  readonly cityField: Locator;
  readonly stateField: Locator;
  readonly zipCodeField: Locator;
  readonly phoneField: Locator;
  readonly updateProfileButton: Locator;

  constructor(page: Page) {
    this.firstNameField = page.locator('#customer.firstName');
    this.lastNameField = page.locator('#customer.lastName');
    this.addressField = page.locator('#customer.address.street');
    this.cityField = page.locator('#customer.address.city');
    this.stateField = page.locator('#customer.address.state');
    this.zipCodeField = page.locator('#customer.address.zipCode');
    this.phoneField = page.locator('#customer.phoneNumber');
    this.updateProfileButton = page.locator('input[type="button"]');
  }

  async fillContactInfo(
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    phone: string
  ): Promise<void> {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.addressField.fill(address);
    await this.cityField.fill(city);
    await this.stateField.fill(state);
    await this.zipCodeField.fill(zipCode);
    await this.phoneField.fill(phone);
  }

  async updateProfile(): Promise<void> {
    await this.updateProfileButton.click();
  }

  async assertUpdateSuccess(): Promise<void> {
    await expect(this.firstNameField).toHaveValue('John');
    await expect(this.lastNameField).toHaveValue('Doe');
    await expect(this.addressField).toHaveValue('123 New Address');
  }
}
