import { Page } from 'playwright'

export class Base {
    page: Page
    private url: string

    constructor(URL: string) {
        this.url = URL
    }

    async navigateTo(): Promise<void>{
        await this.page.goto(this.url)
    }
}
