import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
    // workers: 1,
    testDir: 'spec',
    retries: 2,
    reporter: 'dot',

    use: {
        launchOptions: {
            // slowMo: 500
        },

        // Browser options
        headless: true,

        // Context options
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,

        // Artifacts
        screenshot: 'only-on-failure',
        video: 'retry-with-video',
    },
    projects: [
        {
            name: 'Chrome Stable',
            use: {
                browserName: 'chromium',
                // Test against Chrome Stable channel.
                channel: 'chrome',
            },
        },
        {
            name: 'Desktop Firefox',
            use: {
                browserName: 'firefox',
                viewport: { width: 1920, height: 1080 },
                locale: 'de-DE',
                colorScheme: 'dark',
            },
        },
        {
            name: 'Desktop Safari',
            use: {
                browserName: 'webkit',
                viewport: { width: 1200, height: 750 },
            },
        },
        // Test against mobile viewports.
        {
            name: 'Mobile Chrome',
            use: {
                browserName: 'chromium',
                ...devices['Pixel 5'],
                colorScheme: 'dark',
            },
        },
        {
            name: 'Mobile Safari',
            use: devices['iPhone 12'],
        },
        {
            name: 'Desktop Firefox',
            use: {
                browserName: 'firefox',
                viewport: { width: 1920, height: 1080 },
            },
        },
    ],
}
export default config
