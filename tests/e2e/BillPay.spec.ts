import { test } from '@playwright/test';
import { BillPay } from '../../page-objects/BillPay';

test('Bill Payment Test', async ({ page }) => {
  const billPay = new BillPay(page);
await page.goto('https://parabank.parasoft.com/parabank/overview.htm');

    await page.fill('input[name="username"]', 'jd123');
    await page.fill('input[name="password"]', 'pass1');
    await page.click('input[type="submit"]');

    await billPay.navigateToBillPay();

  await billPay.fillBillPayForm({
    payeeName: 'john',
    address: 'adr',
    city: 'city',
    state: 'state',
    zipCode: '1234',
    phone: '4567',
    accountNumber: '11',
    verifyAccount: '11',
    amount: '20',
  });

  await billPay.submitPayment();
});

