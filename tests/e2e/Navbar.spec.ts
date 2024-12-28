import { test, expect } from '@playwright/test';
import { NavbarPage } from '../../page-objects/NavbarPage';

let navbarPage: NavbarPage;

test('Verify links in the navigation bar before login', async ({ page }) => {
  const navbar = new NavbarPage(page);

  await navbar.goHome();
  
  await navbar.verifySolutionsLinkIsVisible();
  await navbar.clickAboutUsLink();
  await navbar.clickServicesLink();
  await navbar.clickProductsLink();
  await navbar.goHome();
  await navbar.clickLocationsLink();
  await navbar.goHome();
  await navbar.clickAdminPageLink();
});
