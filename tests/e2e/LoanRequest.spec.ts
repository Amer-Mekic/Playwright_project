import { test } from '@playwright/test';
import { LoanRequest } from '../../page-objects/LoanRequest';

test.beforeEach(async ({ page }) => {
  const loanRequest = new LoanRequest(page);
  await loanRequest.goHome(); 
  await page.fill('input[name="username"]', 'jd123');
  await page.fill('input[name="password"]', 'pass1');
  await page.click('input[type="submit"]');
});

test('Request Loan with All Empty Fields', async ({ page }) => {
  const loanRequest = new LoanRequest(page);
  
  await loanRequest.navigateToLoanRequest();
  await loanRequest.fillLoanRequest('', ''); 
  await loanRequest.applyForLoan();
  await loanRequest.verifyLoanRejection();
});

test('Request Loan with Invalid Fields', async ({ page }) => {
  const loanRequest = new LoanRequest(page);
  
  await loanRequest.navigateToLoanRequest();
  await loanRequest.fillLoanRequest('invalid', 'invalid');
  await loanRequest.applyForLoan();
  await loanRequest.verifyLoanRejection();
});

test('Request Loan with One Empty Field', async ({ page }) => {
  const loanRequest = new LoanRequest(page);
  
  await loanRequest.navigateToLoanRequest();
  await loanRequest.fillLoanRequest('', '5'); 
  await loanRequest.applyForLoan();
  await loanRequest.verifyLoanRejection();
});

test('Request Loan with Valid Fields', async ({ page }) => {
  const loanRequest = new LoanRequest(page);
  
  await loanRequest.navigateToLoanRequest();
  await loanRequest.fillLoanRequest('20', '5'); 
  await loanRequest.applyForLoan();
  await loanRequest.verifyLoanApproval();
});
