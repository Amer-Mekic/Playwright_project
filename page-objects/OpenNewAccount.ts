import { Locator, Page } from '@playwright/test';

export class OpenNewAccount {
  readonly accountTypeSelector: Locator;
  readonly fromAccountIdSelector: Locator;
  readonly openAccountButton: Locator;

  constructor(page: Page) {
    this.accountTypeSelector = page.locator('#type');
    this.fromAccountIdSelector = page.locator('#fromAccountId');
    this.openAccountButton = page.locator('input[type="submit"]');
  }

  async selectAccountType(type: string): Promise<void> {
    await this.accountTypeSelector.selectOption({ label: type });
  }

  async selectFromAccount(accountId: string): Promise<void> {
    await this.fromAccountIdSelector.selectOption({ value: accountId });
  }

  async openAccount(): Promise<void> {
    await this.openAccountButton.click();
  }
}
