import { test, expect } from '@playwright/test';
import { NavbarPage } from '../../page-objects/NavbarPage';

let navbarPage: NavbarPage;

test.beforeEach(async ({ page }) => {
  navbarPage = new NavbarPage(page);
  await navbarPage.page.goto('https://parabank.parasoft.com/parabank/index.htm', { waitUntil: 'domcontentloaded' });
});

test('Verify Solutions link is visible', async ({ page }) => {
  const navbarPage = new NavbarPage(page);

  // Check that Solutions link is visible
  await navbarPage.assertSolutionsLinkVisible();
});


test('Verify About Us link navigates to About Us page', async ({ page }) => {
  await navbarPage.aboutUsLink.click();
  await expect(page).toHaveURL(/.*about\.htm/);
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

