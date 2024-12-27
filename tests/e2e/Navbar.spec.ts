import { test, expect } from '@playwright/test';
import { NavbarPage } from '../../page-objects/NavbarPage';

test.describe.parallel('Navbar Before Login', () => {
  let navbarPage: NavbarPage;

  test.beforeEach(async ({ page }) => {
    navbarPage = new NavbarPage(page);
    await navbarPage.visit(); // Visit the base page before each test
  });

  test('Verify Solutions link navigates to Solutions page', async ({ page }) => {
    await navbarPage.solutionsLink.click();
    await page.waitForNavigation(); // Wait for the page to navigate
    await expect(page).toHaveURL(/.*solutions\.htm/); // Assert the correct URL
  });

  test('Verify About Us link navigates to About Us page', async ({ page }) => {
    await navbarPage.aboutUsLink.click();
    await page.waitForNavigation();
    await expect(page).toHaveURL(/.*about\.htm/);
  });

  test('Verify Services link navigates to Services page', async ({ page }) => {
    await navbarPage.servicesLink.click();
    await page.waitForNavigation();
    await expect(page).toHaveURL(/.*services\.htm/);
  });

  test('Verify Products link navigates to Products page', async ({ page }) => {
    await navbarPage.productsLink.click(); // Directly click the products link
    await page.waitForNavigation();
    await expect(page).toHaveURL(/.*products\.htm/);
  });

  test('Verify Locations link navigates to Locations page', async ({ page }) => {
    await navbarPage.locationsLink.click();
    await page.waitForNavigation();
    await expect(page).toHaveURL(/.*locations\.htm/);
  });

  test('Verify Admin Page link navigates to Admin Page', async ({ page }) => {
    await navbarPage.adminPageLink.click();
    await page.waitForNavigation();
    await expect(page).toHaveURL(/.*admin\.htm/);
  });
});
