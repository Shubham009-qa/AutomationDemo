import { test, chromium } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage' //export class pagename so on importing page we need {} bracket i.e.ES Module
import data from '../data/testData.json' assert { type: 'json' }; //data is folder and we dont used export class data so no {} bracket required
import path from 'node:path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage_StatePath = path.join(
    __dirname,
    '../data/storageState.json'
);

let login, dash, browser, context, page

test.beforeAll(async () => {
    // Launch browser once before all tests
    browser = await chromium.launch({ headless: false })

    // Create a temporary isolated browser context (like a fresh session)
    const tempContext = await browser.newContext()

    // Open a new page inside that context
    const tempPage = await tempContext.newPage()

    // Create page object instances using temp page
    const tempLogin =  new LoginPage(tempPage)
    const tempDash =  new DashboardPage(tempPage)

    // Perform login steps
    await tempLogin.navigationToApplication()
    await tempLogin.loginWithCredential(data.username, data.password) // Use credentials from testData.json

    // Verify login success (basic validation)
    await tempDash.verifyLogoShouldVisible()

    // Save logged-in session (cookies, localStorage, etc.) to file
    await tempPage.context().storageState({ path: storage_StatePath })

    // This file will be reused in tests to skip login
})

test.beforeEach(async () => {
    // Create new context for each test using saved session
    // This avoids logging in again for every test
    context = await browser.newContext({ storageState: storage_StatePath })

    // Create a new page from THIS context
    // This page will now be logged in automatically
    page = await context.newPage()

    // Initialize page object models with current test page
    login = new LoginPage(page)
    dash = new DashboardPage(page)
})

test("Verify login with separate credentials @Smoke", async () => {

    await login.navigationToApplication()
    await dash.addProductToCart('ZARA COAT 3')
})

test("Verify login with valid credentials @Sanity", async () => {
    await login.navigationToApplication()
    await dash.addProductToCart('ZARA COAT 3')
    await dash.addProductToCart('ADIDAS ORIGINAL')

})


