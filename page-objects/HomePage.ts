import { Locator, Page } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly logInButton: Locator
  readonly linkContact: Locator
  readonly linkAbout: Locator
  readonly linkRegister: Locator
  readonly linkForgotInfo: Locator

  constructor(page: Page) {
    this.page = page
    this.logInButton = page.locator('input[value="Log In"]')
    this.linkContact = page.locator('a[href="contact.htm"]')
    this.linkAbout = page.locator('a[href="about.htm"]')
    this.linkRegister = page.locator('a[href="register.htm"]')
    this.linkForgotInfo = page.locator('a[href="lookup.htm"]')
  }

  async visit() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm')
  }

  async clickOnLogIn() {
    await this.logInButton.click()
  }

  async clickOnContact() {
    await this.linkContact.click()
  }

  async clickOnAbout() {
    await this.linkAbout.click()
  }
  async clickOnForgotInfo() {
    await this.linkForgotInfo.click()
  }
  async clickOnRegister() {
    await this.linkRegister.click()
  }
}