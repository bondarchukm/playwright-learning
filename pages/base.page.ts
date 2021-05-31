import { Page } from 'playwright'

export class Base {
    Page: Page
    private url: string

    constructor(URL: string) {
        this.url = URL
    }

    async navigateTo(): Promise<void>{
        await this.Page.goto(this.url)
    }
}
