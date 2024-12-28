import { Page, Locator, expect } from '@playwright/test';
import { AbstractPage } from './AbstractPage';

export class NavbarPage extends AbstractPage {
  readonly solutionsLink: Locator;
  readonly aboutUsLink: Locator;
  readonly servicesLink: Locator;
  readonly productsLink: Locator;
  readonly locationsLink: Locator;
  readonly adminPageLink: Locator;

  constructor(page: Page) {
    super(page);
    this.solutionsLink = page.getByText('Solutions');
    this.aboutUsLink = page.locator('#headerPanel').getByRole('link', { name: 'About Us' });
    this.servicesLink = page.locator('#headerPanel').getByRole('link', { name: 'Services' });
    this.productsLink = page.locator('#headerPanel').getByRole('link', { name: 'Products' });
    this.locationsLink = page.locator('#headerPanel').getByRole('link', { name: 'Locations' });
    this.adminPageLink = page.getByRole('link', { name: 'Admin Page' });
  }

  async goHome() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  }

  async verifySolutionsLinkIsVisible() {
    await expect(this.solutionsLink).toBeVisible();
  }

  async clickAboutUsLink() {
    await this.aboutUsLink.click();
    await expect(this.page).toHaveURL(/.*about/);
  }

  async clickServicesLink() {
    await this.servicesLink.click();
    await expect(this.page).toHaveURL(/.*services/);
  }

  async clickProductsLink() {
    await this.productsLink.click();
    await expect(this.page).toHaveURL(/.*products/);
  }

  async clickLocationsLink() {
    await this.locationsLink.click();
    await expect(this.page).toHaveURL(/.*solutions/);
  }

  async clickAdminPageLink() {
    await this.adminPageLink.click();
    await expect(this.page).toHaveURL(/.*admin/);
  }
}
