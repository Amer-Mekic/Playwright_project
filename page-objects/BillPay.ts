import { Page, Locator, expect } from '@playwright/test';
import { AbstractPage } from './AbstractPage';
import { AccountService } from './AccountService';

export class BillPay extends AccountService {
    readonly billPayLink: Locator;
    readonly payeeNameInput: Locator;
    readonly addressInput: Locator;
    readonly cityInput: Locator;
    readonly stateInput: Locator;
    readonly zipCodeInput: Locator;
    readonly phoneInput: Locator;
    readonly accountInput: Locator;
    readonly verifyAccountInput: Locator;
    readonly amountInput: Locator;
    readonly sendPaymentButton: Locator;
    constructor(page: Page) {
    super(page);
    this.billPayLink = page.locator('a[href="billpay.htm"]');
    this.payeeNameInput = page.locator('input[name="payee\\.name"]');
    this.addressInput = page.locator('input[name="payee\\.address\\.street"]');
    this.cityInput = page.locator('input[name="payee\\.address\\.city"]');
    this.stateInput = page.locator('input[name="payee\\.address\\.state"]');
    this.zipCodeInput = page.locator('input[name="payee\\.address\\.zipCode"]');
    this.phoneInput = page.locator('input[name="payee\\.phoneNumber"]');
    this.accountInput = page.locator('input[name="payee\\.accountNumber"]');
    this.verifyAccountInput = page.locator('input[name="verifyAccount"]');
    this.amountInput = page.locator('input[name="amount"]');
    this.sendPaymentButton = page.getByRole('button', { name: 'Send Payment' });
}

async goHome() {
  await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
}

async navigateToBillPay() {
    await this.billPayLink.click();
  }

  async fillBillPayForm({
    payeeName,
    address,
    city,
    state,
    zipCode,
    phone,
    accountNumber,
    verifyAccount,
    amount,
  }: {
    payeeName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    accountNumber: string;
    verifyAccount: string;
    amount: string;
  }) {
    await this.payeeNameInput.fill(payeeName);
    await this.addressInput.fill(address);
    await this.cityInput.fill(city);
    await this.stateInput.fill(state);
    await this.zipCodeInput.fill(zipCode);
    await this.phoneInput.fill(phone);
    await this.accountInput.fill(accountNumber);
    await this.verifyAccountInput.fill(verifyAccount);
    await this.amountInput.fill(amount);
  }

  async submitPayment() {
    await this.sendPaymentButton.click({timeout:2000});
  }

  

  async payeeNameRequired() {
    await expect(this.page.locator('span.error#validationModel-name')).toBeVisible();
  }
  
  async addressRequired() {
    await expect(this.page.locator('#validationModel-address')).toBeVisible();
  }
  
  async cityRequired() {
    await expect(this.page.locator('#validationModel-city')).toBeVisible();
  }
  
  async stateRequired() {
    await expect(this.page.locator('#validationModel-state')).toBeVisible();
  }
  
  async zipCodeRequired() {
    await expect(this.page.locator('#validationModel-zipCode')).toBeVisible();
  }
  
  async phoneRequired() {
    await expect(this.page.locator('#validationModel-phoneNumber')).toBeVisible();
  }
  
  async accountRequired() {
    await expect(this.page.locator('#validationModel-account-empty')).toBeVisible();
  }

  async verifyAccountRequired() {
    await expect(this.page.locator('#validationModel-verifyAccount-empty')).toBeVisible();
  }

  async accountInvalid() {
    await expect(this.page.locator('#validationModel-account-invalid')).toBeVisible();
  }

  async accountNonMatch() {
    await expect(this.page.locator('#validationModel-verifyAccount-mismatch')).toBeVisible();
  }

  async amountRequired() {
    await expect(this.page.getByText('The amount cannot be empty.')).toBeVisible();
  }

  async assertErrorMessage() {
    await this.page.waitForTimeout(2000);
    const errorMessages = await this.page.locator('.error').allTextContents();
    expect(errorMessages.length).toBeGreaterThan(0);
  }

  async amountInvalid() {
    await expect(this.page.locator('#validationModel-amount-invalid')).toBeVisible();
  }
  
  async paymentCompleted() {
    await expect(this.page.locator('h1.title', { hasText: 'Bill Payment Complete' })).toBeVisible();
  }

  async paymentNotCompleted() {
    await expect(this.page.locator('h1.title', { hasText: 'Bill Payment Complete' })).not.toBeVisible();
  }

}
