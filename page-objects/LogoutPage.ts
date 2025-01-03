import { Locator, Page, expect } from '@playwright/test';
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

  async isLogoutSuccessful() {
    // Check if login page is visible after logging out -> means user successfully logged out
    await expect(this.page).toHaveURL(
          /.*index\.htm.*/
        )
  }
}
