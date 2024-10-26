import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput = '#user-name';
  readonly passwordInput = '#password';
  readonly loginButton = '#login-button';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo (websiteUrl: string) {
    await this.page.goto(websiteUrl);
  }

  async enterUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickLogin() {
    await this.page.click(this.loginButton);
  }
}
