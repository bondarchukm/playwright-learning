import { Page } from 'playwright'

export class ProductsPage {
    Page: Page

    constructor(page: Page) {
        this.Page = page
    }
    // UI Locators
    pageTitle = async () => this.Page.$('.title')

    // Locators' methods
    async getPageTitleText(): Promise<string> {
        const text = await this.Page.$eval('.title', (el) =>
            el.textContent.trim()
        )
        return text
    }
}
