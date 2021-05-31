import { expect } from '@playwright/test'
import { LoginPage } from '../pages/login.page'
import { userData } from '../lib/userData'
import { Browser, BrowserContext, chromium, Page } from 'playwright'
import { ProductsPage } from '../pages/products.page'
import { productsPageTitle } from '../lib/pageTitles'

let browser: Browser
let context: BrowserContext
let page: Page

beforeAll(async () => {
    browser = await chromium.launch({
        headless: false,
    })
})
beforeEach(async () => {
    context = await browser.newContext()
    page = await context.newPage()
})
afterAll(async () => {
    await browser.close()
})
afterEach(async () => {
    await page.close()
    await context.close()
})

test('Should login successfully with valid credentials', async () => {
    const loginPage = new LoginPage(page)
    const productsPage = new ProductsPage(page)

    await loginPage.navigateTo()
    await loginPage.setUserName(userData.standardUser)
    await loginPage.setPassword(userData.password)
    await loginPage.clickLoginButton()

    expect(await productsPage.getPageTitleText()).toEqual(productsPageTitle)
})
