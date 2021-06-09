import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login.page'
import { userData } from '../lib/userData'
import { ProductsPage } from '../pages/products.page'
import { productsPageTitle } from '../lib/pageTitles'
import { HeaderPage } from '../pages/header.page'
import { MenuPage } from '../pages/menu.page'

test.describe('Login tests', async () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.navigateTo()
    })

    test('Should login successfully with valid credentials', async ({
        page,
    }) => {
        const loginPage = new LoginPage(page)
        const productsPage = new ProductsPage(page)

        // await loginPage.navigateTo()
        await loginPage.setUserName(userData.standardUser)
        await loginPage.setPassword(userData.password)
        await loginPage.clickLoginButton()

        expect(await productsPage.getPageTitleText()).toEqual(productsPageTitle)
    })

    test('Should logout successfully', async ({ page }) => {
        const loginPage = new LoginPage(page)
        const header = new HeaderPage(page)
        const menu = new MenuPage(page)

        // await loginPage.navigateTo()
        await loginPage.loginToApp(userData.standardUser, userData.password)
        await header.clickMenuButton()
        await menu.clickLogoutButton()

        expect(loginPage.userNameInput).toBeTruthy()
    })
})
