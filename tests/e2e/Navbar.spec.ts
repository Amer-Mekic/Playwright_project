import { test, expect } from '@playwright/test';
import { NavbarPage } from '../../page-objects/NavbarPage';

let navbarPage: NavbarPage;

test.describe('Navbar Tests', () => {
  test.beforeEach(async ({ page }) => {
    navbarPage = new NavbarPage(page);
    await page.goto('https://parabank.parasoft.com/parabank/index.htm', { waitUntil: 'domcontentloaded' });
  });

  test('Verify Solutions link is visible', async () => {
    const solutionsLinkVisible = await navbarPage.solutionsLink.isVisible();
    expect(solutionsLinkVisible).toBe(true);
  });

  test('Navigate to About Us page', async () => {
    await navbarPage.clickAboutUs();
    await expect(navbarPage.page).toHaveURL('https://parabank.parasoft.com/parabank/about.htm');
  });

  test('Navigate to Services page', async () => {
    await navbarPage.clickServices();
    await expect(navbarPage.page).toHaveURL('https://parabank.parasoft.com/parabank/services.htm');
  });

  test('Verify Products link navigates to Products page', async () => {
    await navbarPage.clickProducts();
    await expect(navbarPage.page).toHaveURL('https://www.parasoft.com/products/');
  });

  test('Verify Locations link navigates to Locations page', async () => {
    await navbarPage.clickLocations();
    await expect(navbarPage.page).toHaveURL('https://www.parasoft.com/solutions/');
  });

  test('Navigate to Admin page', async () => {
    await navbarPage.clickAdminPage();
    await expect(navbarPage.page).toHaveURL('https://parabank.parasoft.com/parabank/admin.htm');
  });
});
