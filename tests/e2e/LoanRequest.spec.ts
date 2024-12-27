import { test, expect } from '@playwright/test';
import { LoanRequest } from '../../page-objects/LoanRequest';

test('Request Loan Test', async ({ page }) => {
    const loanRequest = new LoanRequest(page);
  
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.fill('input[name="username"]', 'jd123');
    await page.fill('input[name="password"]', 'pass1');
    await page.click('input[type="submit"]');
  
    await loanRequest.navigateToLoanRequest();
    await loanRequest.fillLoanRequest('20', '5'); 
    await loanRequest.applyForLoan();
  
    await loanRequest.verifyLoanApproval();
  });