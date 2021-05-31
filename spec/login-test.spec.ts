import {
    it,
    describe,
    expect,
    beforeAll,
    afterAll,
    beforeEach,
    afterEach,
} from '@playwright/test'
import { LoginPage } from '../pages/login.page'
import { userData } from '../lib/userData'
import { Browser, BrowserContext, chromium, Page } from 'playwright'
import { ProductsPage } from '../pages/products.page'
import { productsPageTitle } from '../lib/pageTitles'
import { loginPageURL } from '../lib/urls'

let browser: Browser
let page: Page
let context: BrowserContext

describe('Login tests', async () => {
    // beforeAll(async () => {
    //     browser = await chromium.launch()
    // })
    // beforeEach(async () => {
    //     context = await browser.newContext()
    //     page = await context.newPage()
    // })
    // afterAll(async () => {
    //     await browser.close()
    // })
    // afterEach(async () => {
    //     await page.close()
    // })

    it('Should login successfully with valid credentials', async ({
        context,
    }) => {
        const page = await context.newPage()

        const loginPage = new LoginPage(page)
        const productsPage = new ProductsPage(page)

        await page.goto(loginPageURL)
        await loginPage.setUserName(userData.standardUser)
        await loginPage.setPassword(userData.password)
        await loginPage.clickLoginButton()

        expect(await productsPage.getPageTitleText()).toEqual(productsPageTitle)
    })
})
