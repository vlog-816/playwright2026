import path from 'path';
import { defineConfig, devices } from '@playwright/test';

const isCI = Boolean(process.env.CI);

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 4 : undefined,
  reporter: [
    ['html'],
    ['allure-playwright', { resultsDir: path.resolve(__dirname, 'allure-results') }],
  ],
  use: {
    baseURL: 'https://demowebshop.tricentis.com/',
    trace: 'on-first-retry',
    headless: isCI,
    actionTimeout: 15000,
    navigationTimeout: 30000,
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },
  expect: {
    timeout: 15000,
  },
  timeout: 60000,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
