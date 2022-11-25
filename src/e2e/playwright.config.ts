import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  globalSetup: require.resolve('./global-setup.ts'),
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    headless: true,
    ignoreHTTPSErrors: true,
    actionTimeout: 10_000,
  },
  // projects: [
  //     {
  //         name: 'chromium',
  //         use: {...devices['Desktop Chrome']},
  //     }
  // ]
}

console.log('in playwright.config.ts, __dirname is', __dirname)

export default config
