import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  use: { baseURL: 'http://127.0.0.1:5182' },
  projects: [
    { name: 'chromium', use: { channel: process.env.CI ? undefined : 'chrome' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
  webServer: {
    command: 'npm run dev -- --port 5182 --strictPort',
    url: 'http://127.0.0.1:5182',
    reuseExistingServer: false,
  },
});
