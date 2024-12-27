import { test, expect } from '@playwright/test';
import { NavbarPage } from '../../page-objects/NavbarPage';

test.describe.parallel.only('Navbar Before Login', () => {
  let navbarPage: NavbarPage;

  // Before Hook
  test.beforeEach(async ({ page }) => {
    navbarPage = new NavbarPage(page);
    // Clear cookies (if relevant for your navigation flow)
    await page.context().clearCookies();

    await navbarPage.visit(); // Visit the base page before each test
  });

  // Test for Solutions link navigation
  test('Verify Solutions link navigates to Solutions page', async ({ page }) => {
    await navbarPage.solutionsLink.click();
    await page.waitForLoadState('domcontentloaded'); // Wait for the page content to load
    await expect(page).toHaveURL(/solutions\.htm/); // Flexible matching for solutions.htm
  });

  // Test for About Us link navigation
  test('Verify About Us link navigates to About Us page', async ({ page }) => {
    await navbarPage.aboutUsLink.waitFor({ state: 'visible', timeout: 60000 });

    await navbarPage.aboutUsLink.scrollIntoViewIfNeeded({ timeout: 60000 });
    await navbarPage.aboutUsLink.click({ timeout: 60000 });

    await page.waitForNavigation({ waitUntil: 'load' });
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/about.htm');
  });

  // Test for Services link navigation
  test('Verify Services link navigates to Services page', async ({ page }) => {
    await navbarPage.servicesLink.click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/services\.htm/);
  });

  // Test for Products link navigation
  test('Verify Products link navigates to Products page', async ({ page }) => {
    await navbarPage.productsLink.click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/products\.htm/);
  });

  // Test for Locations link navigation
  test('Verify Locations link navigates to Locations page', async ({ page }) => {
    await navbarPage.locationsLink.click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/locations\.htm/);
  });

  // Test for Admin Page link navigation
  test('Verify Admin Page link navigates to Admin Page', async ({ page }) => {
    await navbarPage.adminPageLink.click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/admin\.htm/);
  });
});
