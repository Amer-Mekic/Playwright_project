import { Locator, Page } from '@playwright/test';
import { AbstractPage } from './AbstractPage';

export class NavbarPage {
  page: Page;
  
  private solutionsLink: Locator;
  private aboutUsLink: Locator;
  private servicesLink: Locator;
  private productsLink: Locator;
  private locationsLink: Locator;
  private adminPageLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.solutionsLink = page.locator('ul.leftmenu li.Solutions');
    this.aboutUsLink = page.locator('ul.leftmenu li a[href="https://parabank.parasoft.com/parabank/about.htm"]');
    this.servicesLink = page.locator('ul.leftmenu li a[href="https://parabank.parasoft.com/parabank/services.htm"]');
    this.productsLink = page.locator('ul.leftmenu li a[href="https://www.parasoft.com/products/"]');
    this.locationsLink = page.locator('ul.leftmenu li a[href="https://www.parasoft.com/solutions/"]');
    this.adminPageLink = page.locator('ul.leftmenu li a[href="https://parabank.parasoft.com/parabank/admin.htm"]');
  }

  async clickAboutUs(): Promise<void> {
    await this.aboutUsLink.waitFor({ state: 'visible', timeout: 10000 }); 
    await this.aboutUsLink.click();
  }

  async clickServices(): Promise<void> {
    await this.servicesLink.waitFor({ state: 'visible', timeout: 10000 }); 
    await this.servicesLink.click();
  }

  async clickProducts(): Promise<void> {
    await this.productsLink.waitFor({ state: 'visible', timeout: 10000 }); 
    await this.productsLink.click();
  }

  async clickLocations(): Promise<void> {
    await this.locationsLink.waitFor({ state: 'visible', timeout: 10000 }); 
    await this.locationsLink.click();
  }

  async clickAdminPage(): Promise<void> {
    await this.adminPageLink.waitFor({ state: 'visible', timeout: 10000 }); 
    await this.adminPageLink.click();
  }

  async clickSolutions(): Promise<void> {
    await this.solutionsLink.waitFor({ state: 'visible', timeout: 10000 }); 
    await this.solutionsLink.click();
  }
}
