import { Page } from 'playwright'

export class MenuPage {
    Page: Page

    constructor(page: Page) {
        this.Page = page
    }
    // UI Locators
    logoutButton = async () => this.Page.$('#logout_sidebar_link')

    // Locators' methods
    async clickLogoutButton(): Promise<void> {
        await (await this.logoutButton()).click()
    }
}