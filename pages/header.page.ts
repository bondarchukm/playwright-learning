import { Page } from 'playwright'

export class HeaderPage {
    Page: Page

    constructor(page: Page) {
        this.Page = page
    }
    // UI Locators
    menuButton = async () => this.Page.$('#react-burger-menu-btn')

    // Locators' methods
    async clickMenuButton(): Promise<void> {
        await (await this.menuButton()).click()
    }
}