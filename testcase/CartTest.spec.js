const { test, expect } = require('@playwright/test')
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

let login
let dash

test.beforeEach(async ({ page }) => {
    login = new LoginPage(page)  //object creation to call constructor of that class
    dash = new DashboardPage(page)
})

test("Add indivisual product to the cart", async ({ page }) => {
    await login.navigationToApplication()
    await login.loginIntoApplication()
    await dash.verifyLogoIsVisible()
    await dash.addProduct('ZARA COAT 3')
    await dash.addProduct("ADIDAS ORIGINAL")
    await dash.addProduct("iphone 13 pro")
    await dash.cickOnCartIcon()
    await dash.isProductVisibleonCartPage('ZARA COAT 3')
    await dash.isProductVisibleonCartPage('ADIDAS ORIGINAL')
    await dash.isProductVisibleonCartPage('iphone 13 pro')
})

test("Add all element to the cart", async ({ page }) => {
    await login.navigationToApplication()
    await login.loginIntoApplication()
    await dash.verifyLogoIsVisible()

    const productNames = await dash.getAllProductNames()
    await dash.addAllProductToCart()
    await dash.cickOnCartIcon()
    await dash.verifyAllProductVisibility(productNames)
    
})