import { test } from '@playwright/test';
import { BillPay } from '../../page-objects/BillPay';

test.describe('Bill Payment Tests', () => {
  let billPay: BillPay;

  test.beforeEach(async ({ page }) => {
    billPay = new BillPay(page);
    await billPay.goHome();
    await page.fill('input[name="username"]', 'jd123');
    await page.fill('input[name="password"]', 'pass1');
    await page.click('input[type="submit"]');
    await billPay.navigateToBillPay();
  });

  // Positive Tests
  test('Valid Payment Submission', async () => {
    await billPay.fillBillPayForm({
      payeeName: 'john',
      address: 'adress',
      city: 'city',
      state: 'state',
      zipCode: '1234',
      phone: '4567',
      accountNumber: '11',
      verifyAccount: '11',
      amount: '20',
    });
    await billPay.submitPayment();
    await billPay.paymentCompleted();
  });

  test('Numbers instead of Payee Name', async () => {
    await billPay.fillBillPayForm({
      payeeName: '12345', 
      address: 'address',
      city: 'city',
      state: 'state',
      zipCode: '90001',
      phone: '1234567890',
      accountNumber: '123456',
      verifyAccount: '123456',
      amount: '20.00',
    });
    await billPay.submitPayment();
    await billPay.paymentCompleted();
  });

  test('Negative Amount', async () => {
    await billPay.fillBillPayForm({
      payeeName: 'John Doe',
      address: 'address',
      city: 'city',
      state: 'state',
      zipCode: '90001',
      phone: '1234567890',
      accountNumber: '123456',
      verifyAccount: '123456',
      amount: '-15.00', 
    });
    await billPay.submitPayment();
    await billPay.paymentCompleted();
  });

  test('Letters for Zip Code', async () => {
    await billPay.fillBillPayForm({
      payeeName: 'John Doe',
      address: 'address',
      city: 'city',
      state: 'state',
      zipCode: 'ABCDE', 
      phone: '1234567890',
      accountNumber: '12',
      verifyAccount: '12',
      amount: '11.00',
    });
    await billPay.submitPayment();
    await billPay.paymentNotCompleted();
  });


  // Negative Tests
  test('Empty Form Submission', async () => {
    await billPay.submitPayment();
    await billPay.assertErrorMessage();
  });

  test('One Field Blank', async () => {
    await billPay.fillBillPayForm({
      payeeName: 'John Doe',
      address: 'address',
      city: 'city',
      state: 'state',
      zipCode: '90001',
      phone: ' ', 
      accountNumber: '1234',
      verifyAccount: '1234',
      amount: '1',
    });
    await billPay.submitPayment();
    await billPay.phoneRequired();
  });


  test('Mismatched Account Numbers', async () => {
    await billPay.fillBillPayForm({
      payeeName: 'John Doe',
      address: 'address',
      city: 'city',
      state: 'state',
      zipCode: '90001',
      phone: '1234',
      accountNumber: '123456',
      verifyAccount: '654321', 
      amount: '5',
    });
    await billPay.submitPayment();
    await billPay.accountNonMatch();
  });

  test('Verify Account Number field is empty', async () => {
    await billPay.fillBillPayForm({
      payeeName: 'John Doe',
      address: 'address',
      city: 'city',
      state: 'state',
      zipCode: '90001',
      phone: '1234',
      accountNumber: '1',
      verifyAccount: ' ', 
      amount: '5',
    });
    await billPay.submitPayment();
    await billPay.verifyAccountRequired();
  });

  test('Account Number field is empty', async () => {
    await billPay.fillBillPayForm({
      payeeName: 'John Doe',
      address: 'address',
      city: 'city',
      state: 'state',
      zipCode: '90001',
      phone: '1234',
      accountNumber: ' ',
      verifyAccount: '1', 
      amount: '5',
    });
    await billPay.submitPayment();
    await billPay.accountRequired();
    await billPay.accountNonMatch();
  });

  // Performance Tests
  test('Large Input Data', async () => {
    await billPay.fillBillPayForm({
      payeeName: 'John'.repeat(50), 
      address: 'address'.repeat(20), 
      city: 'Metropolis'.repeat(10), 
      state: 'state'.repeat(20),
      zipCode: '90001'.repeat(20),
      phone: '1234567890'.repeat(20),
      accountNumber: '123456'.repeat(20),
      verifyAccount: '123456'.repeat(20),
      amount: '20.00',
    });
    await billPay.submitPayment();
    await billPay.paymentNotCompleted();
  });

  test('All Input Data is a number', async () => {
    await billPay.fillBillPayForm({
      payeeName: '1',
      address: '1', 
      city: '1', 
      state: '1',
      zipCode: '1',
      phone: '1',
      accountNumber: '1',
      verifyAccount: '1',
      amount: '1',
    });
    await billPay.submitPayment();
    await billPay.paymentCompleted();
  });

  test('All Input Data is a character', async () => {
    await billPay.fillBillPayForm({
      payeeName: 'a',
      address: 'a', 
      city: 'a', 
      state: 'a',
      zipCode: 'a',
      phone: 'a',
      accountNumber: 'a',
      verifyAccount: 'a',
      amount: 'a',
    });
    await billPay.submitPayment();
    await billPay.accountInvalid();
    await billPay.amountInvalid();
    await billPay.goHome();
  });

  //Boundry Tests

  test('Minimum Boundary Value for Zip Code', async () => {
    // Minimum zip code
    await billPay.fillBillPayForm({
      payeeName: 'John Doe',
      address: 'address',
      city: 'city',
      state: 'state',
      zipCode: '00001',
      phone: '1234567890',
      accountNumber: '123456',
      verifyAccount: '123456',
      amount: '7.00',
    });
    await billPay.submitPayment();
    await billPay.paymentCompleted();
  });

    test('Maximum Boundary Values for Zip Code', async () => {
    // Maximum zip code
    await billPay.fillBillPayForm({
      payeeName: 'John Doe',
      address: 'address',
      city: 'city',
      state: 'state',
      zipCode: '99999999999999',
      phone: '1234567890',
      accountNumber: '1234',
      verifyAccount: '1234',
      amount: '6',
    });
    await billPay.submitPayment();
    await billPay.paymentCompleted();
  });

  test('Minimum Boundary Values for Amount', async () => {
    await billPay.fillBillPayForm({
      payeeName: 'John',
      address: 'address',
      city: 'city',
      state: 'state',
      zipCode: '5678',
      phone: '5678',
      accountNumber: '1234',
      verifyAccount: '1234',
      amount: '0.01',
    });
    await billPay.submitPayment();
    await billPay.paymentCompleted();
  });

  test('Maximum Boundary Values for Amount', async () => {
    await billPay.fillBillPayForm({
      payeeName: 'John Doe',
      address: 'address',
      city: 'Dubai',
      state: 'state',
      zipCode: '90001',
      phone: '1234567890',
      accountNumber: '123456',
      verifyAccount: '123456',
      amount: '10000.00',
    });
    await billPay.submitPayment();
    await billPay.paymentCompleted();
  });
});
