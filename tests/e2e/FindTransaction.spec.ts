import { test } from '@playwright/test';
import { FindTransaction } from '../../page-objects/FindTransaction';

test('Search by Transaction ID', async ({ page }) => {
  const findTransaction = new FindTransaction(page);
  await findTransaction.goHome();

  await page.fill('input[name="username"]', 'jd123');
  await page.fill('input[name="password"]', 'pass1');
  await page.click('input[type="submit"]');

  await findTransaction.navigateToFindTransactions();
  
  await findTransaction.searchByTransactionId('');
  await findTransaction.checkTransactionIdError();

  await findTransaction.searchByTransactionId('99999');
  await findTransaction.checkTransactionIdError();
});

test('Search by Transaction Date', async ({ page }) => {
  const findTransaction = new FindTransaction(page);
  await findTransaction.goHome();

  await page.fill('input[name="username"]', 'jd123');
  await page.fill('input[name="password"]', 'pass1');
  await page.click('input[type="submit"]');

  await findTransaction.navigateToFindTransactions();
  
  await findTransaction.searchByTransactionDate('');
  await findTransaction.checkTransactionDateError();

  await findTransaction.searchByTransactionDate('invalid-date');
  await findTransaction.checkTransactionDateError();
});

test('Search by Amount', async ({ page }) => {
  const findTransaction = new FindTransaction(page);
  await findTransaction.goHome();

  await page.fill('input[name="username"]', 'jd123');
  await page.fill('input[name="password"]', 'pass1');
  await page.click('input[type="submit"]');

  await findTransaction.navigateToFindTransactions();
  
  await findTransaction.searchByAmount('');
  await findTransaction.checkAmountError();

  await findTransaction.searchByAmount('invalid-amount');
  await findTransaction.checkAmountError();
});

test('Search with Invalid Filters', async ({ page }) => {
  const findTransaction = new FindTransaction(page);
  await findTransaction.goHome();

  await page.fill('input[name="username"]', 'jd123');
  await page.fill('input[name="password"]', 'pass1');
  await page.click('input[type="submit"]');

  await findTransaction.navigateToFindTransactions();

  await findTransaction.searchByTransactionId('a');
  await findTransaction.checkTransactionIdError();

  await findTransaction.searchByTransactionDate('a');
  await findTransaction.checkTransactionDateError();

  await findTransaction.searchByDateRange('a', 'b');
  await findTransaction.checkDateRangeError();

  await findTransaction.searchByAmount('a');
  await findTransaction.checkAmountError();
});

test('Search with Empty fields', async ({ page }) => {
  const findTransaction = new FindTransaction(page);
  await findTransaction.goHome();

  await page.fill('input[name="username"]', 'jd123');
  await page.fill('input[name="password"]', 'pass1');
  await page.click('input[type="submit"]');

  await findTransaction.navigateToFindTransactions();

  await findTransaction.searchByTransactionId('');
  await findTransaction.checkTransactionIdError();

  await findTransaction.searchByTransactionDate('');
  await findTransaction.checkTransactionDateError();

  await findTransaction.searchByDateRange('', '');
  await findTransaction.checkDateRangeError();

  await findTransaction.searchByAmount('');
  await findTransaction.checkAmountError();
});
