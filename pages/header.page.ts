import { Page } from 'playwright'

export class HeaderPage {
    page: Page

    constructor(page: Page) {
        this.page = page
    }
    // UI Locators
    menuButton = async () => this.page.$('#react-burger-menu-btn')

    // Locators' methods
    async clickMenuButton(): Promise<void> {
        await (await this.menuButton()).click()
    }
}