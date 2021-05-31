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
        const text = await (await this.pageTitle()).innerText()
        return text
    }
}
