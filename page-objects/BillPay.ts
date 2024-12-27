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
    await this.sendPaymentButton.click();
  }
}
