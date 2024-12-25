import { Locator, Page } from '@playwright/test';
import { AbstractPage } from './AbstractPage';

export class LogoutPage extends AbstractPage {
  readonly logoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.logoutButton = page.locator('a[href="logout.htm"]');
  }
  // No direct navigation needed for logout as we assume user is already logged in

  async logout(): Promise<void> {
    await this.logoutButton.click();
  }

  async isLogoutSuccessful(): Promise<boolean> {
    // Check if login page is visible after logging out -> means user successfully logged out
    return this.page.locator('#loginPanel').isVisible({timeout:1000});
  }
}
