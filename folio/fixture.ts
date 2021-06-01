import { folio as base } from '@playwright/test'

type Browsers = {
    chrome: string,
    firefox: string,
}

const fixtures = base.extend<Browsers>()

fixtures.chrome.init(async ({}, run) =>{
    await run('/usr/share/man/man1/google-chrome.1.gz')
})
fixtures.firefox.init(async ({}, run) =>{
    await run('/usr/share/man/man1/firefox.1.gz')
})

const folio = fixtures.build()
export const it = folio.it
export const describe = folio.describe
export const expect = folio.expect