// @ts-check
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './testcase',
  reporter: [['line'],
            ['html', { open: 'never' }],
            ['allure-playwright']],
  timeout:40000,
  expect:{
    timeout:10000
  },
  retries:2,
  workers:5,

  /* Configure projects for major browsers */
use:
    {
      browserName: 'chromium',
      viewport:{width:1500, height:1080},
      headless:false,
      screenshot:'only-on-failure',
      video:'retain-on-failure',
      trace:'retain-on-failure'
    },

});

