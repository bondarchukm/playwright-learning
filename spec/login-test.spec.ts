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
import { Browser, BrowserContext, chromium, Cookie, Page } from 'playwright'
import { ProductsPage } from '../pages/products.page'
import { productsPageTitle } from '../lib/pageTitles'
import fs from 'fs'

let browser: Browser
let page: Page
let context: BrowserContext

describe('Login tests', async () => {
    beforeAll(async () => {
        browser = await chromium.launch()
    })
    beforeEach(async () => {
        context = await browser.newContext()
        page = await context.newPage()
    })
    // afterAll(async () => {
    //     await browser.close()
    // })
    afterEach(async () => {
        // await page.close()
    })

    it('Should login successfully with valid credentials', async ({
        page,
        context,
    }) => {
        // const page = await context.newPage()

        const loginPage = new LoginPage(page)
        const productsPage = new ProductsPage(page)

        await loginPage.navigateTo()
        await loginPage.setUserName(userData.standardUser)
        await loginPage.setPassword(userData.password)
        await loginPage.clickLoginButton()

        expect(await productsPage.getPageTitleText()).toEqual(productsPageTitle)
     
        let cookie = await context.cookies()
        let cookieJSON = JSON.stringify(cookie)

        fs.writeFileSync('./sauce_labs.json', cookieJSON)
    })

    it('test with cookies', async ({ page, context }) => {
        const loginPage = new LoginPage(page)

        const cookie = await JSON.parse(fs.readFileSync('./sauce_labs.json', 'utf8'))
        await context.addCookies(cookie)

        await loginPage.navigateTo()
    })
})
