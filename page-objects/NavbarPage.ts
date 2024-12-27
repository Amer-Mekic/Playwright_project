import { Page, Locator, expect } from '@playwright/test';

export class NavbarPage {
  readonly page: Page;
  readonly solutionsLink: Locator;
  readonly aboutUsLink: Locator;
  readonly servicesLink: Locator;
  readonly productsLink: Locator;
  readonly locationsLink: Locator;
  readonly adminPageLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.solutionsLink = page.locator('ul.leftmenu li.Solutions');
    this.aboutUsLink = page.locator('ul.leftmenu li a[href="https://parabank.parasoft.com/parabank/about.htm"]');
    this.servicesLink = page.locator('ul.leftmenu li a[href="https://parabank.parasoft.com/parabank/services.htm"]');
    this.productsLink = page.locator('ul.leftmenu li a[href="http://www.parasoft.com/jsp/products.jsp"]');
    this.locationsLink = page.locator('ul.leftmenu li a[href="http://www.parasoft.com/jsp/pr/contacts.jsp"]');
    this.adminPageLink = page.locator('ul.leftmenu li a[href="https://parabank.parasoft.com/parabank/admin.htm"]');
  }

  async clickAndVerifyLink(link: Locator, expectedUrl: string): Promise<void> {
    await link.click();
    await this.page.waitForURL(expectedUrl, { timeout: 60000 }); 
    await expect(this.page).toHaveURL(expectedUrl); 
  }

  async clickAboutUs(): Promise<void> {
    await this.clickAndVerifyLink(this.aboutUsLink, 'https://parabank.parasoft.com/parabank/about.htm');
  }

  async clickServices(): Promise<void> {
    await this.clickAndVerifyLink(this.servicesLink, 'https://parabank.parasoft.com/parabank/services.htm');
  }

  async clickAdminPage(): Promise<void> {
    await this.clickAndVerifyLink(this.adminPageLink, 'https://parabank.parasoft.com/parabank/admin.htm');
  }

  async clickProducts(): Promise<void> {
    await this.productsLink.click();
    await this.page.waitForURL('https://www.parasoft.com/products/', { timeout: 60000 });
  }

  async clickLocations(): Promise<void> {
    await this.locationsLink.click();
    await this.page.waitForURL('https://www.parasoft.com/solutions/', { timeout: 60000 });
  }
}
