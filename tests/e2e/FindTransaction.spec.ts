import { test } from '@playwright/test';

import { FindTransaction } from '../../page-objects/FindTransaction';

test('Find Transactions Test', async ({ page }) => {
  const findTransaction = new FindTransaction(page);
  await page.goto('https://parabank.parasoft.com/parabank/overview.htm');
  
      await page.fill('input[name="username"]', 'jd123');
      await page.fill('input[name="password"]', 'pass1');
      await page.click('input[type="submit"]');

      await findTransaction.navigateToFindTransactions();

      
  await findTransaction.navigateToFindTransactions();

  await findTransaction.searchByTransactionId(FindTransaction.randomTransactionId);
  await findTransaction.navigateToFindTransactions();
  await findTransaction.searchByTransactionDate(FindTransaction.todayFormatted);
  await findTransaction.navigateToFindTransactions();
  await findTransaction.searchByDateRange(
    FindTransaction.yesterdayFormatted,
    FindTransaction.todayFormatted
  );
  await findTransaction.navigateToFindTransactions();
  await findTransaction.searchByAmount('20');
});