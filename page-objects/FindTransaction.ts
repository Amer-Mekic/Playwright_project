import { Page, Locator, expect } from '@playwright/test';
import { AbstractPage } from './AbstractPage';
import { AccountService } from './AccountService';

export class FindTransaction extends AccountService {
    readonly findTransactionsLink: Locator;
    readonly transactionIdInput: Locator;
  readonly findByTransactionIdButton: Locator;
  readonly transactionDateInput: Locator;
  readonly findByDateButton: Locator;
  readonly fromDateInput: Locator;
  readonly toDateInput: Locator;
  readonly findByDateRangeButton: Locator;
  readonly amountInput: Locator;
  readonly findByAmountButton: Locator;

    constructor(page: Page) {
        super(page);

        this.findTransactionsLink = page.locator('a[href="findtrans.htm"]');
        this.transactionIdInput = page.locator('#transactionId');
    this.findByTransactionIdButton = page.locator('#findById');
    this.transactionDateInput = page.locator('#transactionDate');
    this.findByDateButton = page.locator('#findByDate');
    this.fromDateInput = page.locator('#fromDate');
    this.toDateInput = page.locator('#toDate');
    this.findByDateRangeButton = page.locator('#findByDateRange');
    this.amountInput = page.locator('#amount');
    this.findByAmountButton = page.locator('#findByAmount');
    }

    static formatDate(date: Date): string {
        const mm = String(date.getMonth() + 1).padStart(2, '0'); 
        const dd = String(date.getDate()).padStart(2, '0');
        const yyyy = date.getFullYear();
        return `${mm}-${dd}-${yyyy}`;
      }
    
      static get todayFormatted(): string {
        return FindTransaction.formatDate(new Date());
      }
    
      static get yesterdayFormatted(): string {
        const yesterday = new Date();
        yesterday.setDate(new Date().getDate() - 1);
        return FindTransaction.formatDate(yesterday);
      }
    
      static get randomTransactionId(): string {
        return Math.floor(10000 + Math.random() * 90000).toString();
      }

    async navigateToFindTransactions() {
        await this.findTransactionsLink.click();
      }
    
      async searchByTransactionId(transactionId: string) {
        await this.transactionIdInput.fill(transactionId);
        await this.findByTransactionIdButton.click();
      }
    
      async searchByTransactionDate(date: string) {
        await this.transactionDateInput.fill(date);
        await this.findByDateButton.click();
      }
    
      async searchByDateRange(fromDate: string, toDate: string) {
        await this.fromDateInput.fill(fromDate);
        await this.toDateInput.fill(toDate);
        await this.findByDateRangeButton.click();
      }
    
      async searchByAmount(amount: string) {
        await this.amountInput.fill(amount);
        await this.findByAmountButton.click();
      }

      async checkTransactionIdError() {
        await expect(this.page.locator('#transactionIdError')).toBeVisible();
    }

    async checkTransactionDateError() {
        await expect(this.page.locator('#transactionDateError')).toBeVisible();
    }

    async checkDateRangeError() {
        await expect(this.page.locator('#dateRangeError')).toBeVisible();
    }

    async checkAmountError() {
        await expect(this.page.locator('#amountError')).toBeVisible();
    }

    async goHome() {
      await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    }
}
    
