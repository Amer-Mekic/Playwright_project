import { Page, Locator, expect } from '@playwright/test';
import { AbstractPage } from './AbstractPage';
import { AccountService } from './AccountService';

export class LoanRequest extends AccountService {
  readonly requestLoanLink: Locator;
  readonly amountInput: Locator;
  readonly downPaymentInput: Locator;
  readonly applyNowButton: Locator;
  readonly approvalStatus: Locator;
  readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.requestLoanLink = page.locator('a[href="requestloan.htm"]');
        this.amountInput = page.locator('#amount');
        this.downPaymentInput = page.locator('#downPayment');
        this.applyNowButton = page.locator('input[type="button"][value="Apply Now"]');
        this.approvalStatus = page.locator('td', { hasText: 'Approved' });
    }

    async navigateToLoanRequest() {
      await this.requestLoanLink.click();
    }
  
    async fillLoanRequest(amount: string, downPayment: string) {
      await this.amountInput.fill(amount);
      await this.downPaymentInput.fill(downPayment);
    }
  
    async applyForLoan() {
      await this.applyNowButton.click();
    }
  
    async verifyLoanApproval() {
      await expect(this.approvalStatus).toBeVisible();
    }
        
    async clickRequestLoan() {
      await this.requestLoanLink.click();
    }

    async goHome() {
      await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    }

    async verifyLoanRejection() {
      await expect(this.approvalStatus).not.toBeVisible();
  }
}
