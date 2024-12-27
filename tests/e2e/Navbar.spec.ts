import { test, expect } from '@playwright/test';
import { NavbarPage } from '../../page-objects/NavbarPage';

let navbarPage: NavbarPage;

test.beforeEach(async ({ page }) => {
  navbarPage = new NavbarPage(page);
  await navbarPage.page.goto('https://parabank.parasoft.com/parabank/index.htm', { waitUntil: 'domcontentloaded' });
});

test('Verify Solutions link navigates to Solutions page', async () => {
  await navbarPage.clickSolutions();
  expect(await navbarPage.page.url()).toContain('solutions');
});

test('Verify About Us link navigates to About Us page', async () => {
  await navbarPage.clickAboutUs();
  expect(await navbarPage.page.url()).toBe('https://parabank.parasoft.com/parabank/about.htm');
});

test('Verify Services link navigates to Services page', async () => {
  await navbarPage.clickServices();
  expect(await navbarPage.page.url()).toBe('https://parabank.parasoft.com/parabank/services.htm');
});

test('Verify Products link navigates to Products page', async () => {
  await navbarPage.clickProducts();
  expect(await navbarPage.page.url()).toBe('https://www.parasoft.com/products/');
});

test('Verify Locations link navigates to Locations page', async () => {
  await navbarPage.clickLocations();
  expect(await navbarPage.page.url()).toBe('https://www.parasoft.com/solutions/');
});

test('Verify Admin Page link navigates to Admin Page', async () => {
  await navbarPage.clickAdminPage();
  expect(await navbarPage.page.url()).toBe('https://parabank.parasoft.com/parabank/admin.htm');
});

