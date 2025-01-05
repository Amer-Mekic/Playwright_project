import { Locator, Page, expect } from '@playwright/test';

export class AdminPage {
  readonly initializeButton: Locator;
  readonly cleanButton: Locator;
  readonly startJmsButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.initializeButton = page.locator('button[name="action"][value="INIT"]');
    this.cleanButton = page.locator('button[name="action"][value="CLEAN"]');
    this.startJmsButton = page.locator('input[type="submit"][value="Startup"]');
    this.successMessage = page.locator('.success'); // Adjust this if success messages differ
  }

  async clickInitializeButton(): Promise<void> {
    await this.initializeButton.click();
  }

  async clickCleanButton(): Promise<void> {
    await this.cleanButton.click();
  }

  async clickStartJmsButton(): Promise<void> {
    await this.startJmsButton.click();
  }

  async assertSuccessMessage(): Promise<void> {
    await expect(this.successMessage).toBeVisible({ timeout: 60000 });
  }
}
