import { defineConfig, devices } from '@playwright/test';



export default defineConfig({

  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  use: {
    baseURL: process.env.URL,
    ignoreHTTPSErrors: true,
    trace: "retain-on-failure",
    
  },
  retries: 0,
  reporter: [["list"], ["html"]],

    projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'Mobile Chrome',
      use: {...devices['Pixel 5']}
    }
  ]
});



