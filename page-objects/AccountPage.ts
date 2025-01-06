import { Locator, Page , expect} from '@playwright/test';
import { AbstractPage } from './AbstractPage';

export class AccountPage extends AbstractPage {
  readonly accountsTable: Locator;
  readonly accountDetailsLink: Locator;

  constructor(page: Page) {
    super(page);
    this.accountsTable = page.locator('#accountTable');
    this.accountDetailsLink = page.locator('#accountTable tbody>tr>td>a'); 
  }

  async visit(): Promise<void> {
    await this.navigateTo('https://parabank.parasoft.com/parabank/overview.htm');
  }

  async isAccountOverviewVisible(): Promise<boolean> {
    return this.accountsTable.isVisible();
  }

  async viewAccountDetails(): Promise<void> {
    await this.accountDetailsLink.nth(0).click();
  }

  async assertSuccessfulRedirect(){
    await expect(this.page).toHaveURL(/activity\.htm/);
  }
}
