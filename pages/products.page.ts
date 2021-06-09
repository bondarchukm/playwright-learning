import { Page } from 'playwright'
import { productsPageURL } from '../lib/urls'
import { Base } from './base.page'

export class ProductsPage extends Base{
    Page: Page

    constructor(page: Page) {
        super(productsPageURL)
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
