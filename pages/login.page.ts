import { Page } from 'playwright'
import { Base } from '../pages/base.page'
import { loginPageURL } from '../lib/urls'

export class LoginPage extends Base {
    page: Page

    constructor(page: Page) {
        super(loginPageURL)
        this.page = page
    }
    // UI Locators
    userNameInput = async () => this.page.$('#user-name')
    passwordInput = async () => this.page.$('#password')
    loginButton = async () => this.page.$('#login-button')

    // Locators' methods
    async setUserName(name: string): Promise<void> {
        await (await this.userNameInput()).fill(name)
    }
    async setPassword(password: string): Promise<void> {
        await (await this.passwordInput()).fill(password)
    }
    async clickLoginButton(): Promise<void> {
        await (await this.loginButton()).click()
    }
    async loginToApp(name: string, password: string): Promise<void> {
        await this.setUserName(name)
        await this.setPassword(password)
        await this.clickLoginButton()
    }
}
