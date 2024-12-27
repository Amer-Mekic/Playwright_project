import { Locator, Page } from '@playwright/test';
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
    this.solutionsLink = page.locator('a[href="solutions.htm"]');
    this.aboutUsLink = page.locator('a[href="about.htm"]');
    this.servicesLink = page.locator('a[href="services.htm"]');
    this.productsLink = page.locator('a[href="products.htm"]');
    this.locationsLink = page.locator('a[href="locations.htm"]');
    this.adminPageLink = page.locator('a[href="admin.htm"]');
  }

  async visit(): Promise<void> {
    await this.navigateTo('https://parabank.parasoft.com/parabank/index.htm');
  }

  async visitSolutions(): Promise<void> {
    await this.solutionsLink.click();
  }

  async visitAboutUs(): Promise<void> {
    await this.aboutUsLink.click();
  }

  async visitServices(): Promise<void> {
    await this.servicesLink.click();
  }

  async visitProducts(): Promise<void> {
    await this.productsLink.click();
  }

  async visitLocations(): Promise<void> {
    await this.locationsLink.click();
  }

  async visitAdminPage(): Promise<void> {
    await this.adminPageLink.click();
  }
}
