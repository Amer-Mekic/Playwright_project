import { Page, Locator } from '@playwright/test';

export class NavbarPage {
  page: Page;
  solutionsLink: Locator;
  aboutUsLink: Locator;
  servicesLink: Locator;
  productsLink: Locator;
  locationsLink: Locator;
  adminPageLink: Locator;

  constructor(page: Page) {
    this.page = page;
    // Initialize the locators
    this.solutionsLink = page.locator('ul.leftmenu li.Solutions');
    this.aboutUsLink = page.locator('ul.leftmenu li a[href="about.htm"]');
    this.servicesLink = page.locator('ul.leftmenu li a[href="https://parabank.parasoft.com/parabank/services.htm"]');
    this.productsLink = page.locator('ul.leftmenu li a[href="http://www.parasoft.com/jsp/products.jsp"]');
    this.locationsLink = page.locator('ul.leftmenu li a[href="http://www.parasoft.com/jsp/pr/contacts.jsp"]');
    this.adminPageLink = page.locator('ul.leftmenu li a[href="https://parabank.parasoft.com/parabank/admin.htm"]');
  }

  // Method to assert that Solutions link is not clickable
  async assertSolutionsLinkVisible(): Promise<void> {
    const isVisible = await this.solutionsLink.isVisible();
  
    if (!isVisible) {
      throw new Error('Solutions link should be visible, but it is not.');
    }
  }
  

  // Methods for interacting with the navbar
  async clickAboutUs(): Promise<void> {
    await this.aboutUsLink.click();
  }

  async clickServices(): Promise<void> {
    await this.servicesLink.click();
  }

  async clickProducts(): Promise<void> {
    await this.productsLink.click();
  }

  async clickLocations(): Promise<void> {
    await this.locationsLink.click();
  }

  async clickAdminPage(): Promise<void> {
    await this.adminPageLink.click();
  }
}
