import { Page } from 'playwright'

export class MenuPage {
    page: Page

    constructor(page: Page) {
        this.page = page
    }
    // UI Locators
    logoutButton = async () => this.page.$('#logout_sidebar_link')

    // Locators' methods
    async clickLogoutButton(): Promise<void> {
        await (await this.logoutButton()).click()
    }
}