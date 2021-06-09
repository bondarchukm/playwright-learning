import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login.page'

test.describe('Compare screenshot tests', async () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.navigateTo()
    })

    test('Should compare Login Page screens successful with a baseline', async ({
        page,
    }) => {
        expect(await page.screenshot()).toMatchSnapshot('login-page.png')
    })
})
