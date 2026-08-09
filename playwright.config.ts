import { defineConfig, devices } from '@playwright/test';

use: {
  baseURL: 'https://parabank.parasoft.com',
  trace: 'on-first-retry',
  screenshot: 'only-on-failure',
}
