import { Locator, Page, expect} from '@playwright/test';
import { AbstractPage } from './AbstractPage';

export class TransferFundsPage extends AbstractPage {
  readonly fromAccountField: Locator;
  readonly toAccountField: Locator;
  readonly amountField: Locator;
  readonly transferButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.fromAccountField = page.locator('#fromAccountId');
    this.toAccountField = page.locator('#toAccountId');
    this.amountField = page.locator('#amount');
    this.transferButton = page.locator('input[value="Transfer"]');
    this.successMessage = page.locator('#showResult h1');
  }

  async visit(): Promise<void> {
    await this.navigateTo('https://parabank.parasoft.com/parabank/transfer.htm');
  }

  async transferFunds(amount: string): Promise<void> {
    await this.fromAccountField.selectOption({index:0});
    await this.toAccountField.selectOption({index:0});
    await this.amountField.fill(amount);
    await this.transferButton.click();
  }

  async assertTransferSuccess(): Promise<void> {
    await expect(this.successMessage).toContainText('Transfer Complete!');
  }
}
