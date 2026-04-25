// @ts-check
import { defineConfig, devices } from '@playwright/test';
require('dotenv').config()   //to use .env file we have to import
//it loads your .env file into process.env before Playwright starts using it

export default defineConfig({
  testDir: './testcase',
  reporter: [["line"], ["allure-playwright"]],
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
      //headless:false,
      screenshot:'only-on-failure',
      video:'retain-on-failure',
      trace:'retain-on-failure'
    },

});

