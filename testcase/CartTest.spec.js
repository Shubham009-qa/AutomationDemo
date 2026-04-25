const { test, expect } = require('@playwright/test')
import { DashboardPage } from '../pages/DashboardPage'
import {LoginPage} from '../pages/LoginPage'
import data from '../data/testData.json'

let login
let dash

test.beforeEach(async ( {page})=>{
     login = new LoginPage(page) 
     dash = new DashboardPage(page) 
})

test('Add individual product to the cart', async( {page} )=>{
    await login.navigationToApplication()
    await login.loginIntoApplication()
    await dash.verifyLogoShouldVisible()
    await dash.addProductToCart('ZARA COAT 3')
    await dash.addProductToCart('ADIDAS ORIGINAL')
    await dash.addProductToCart('iphone 13 pro')
    await dash.clickOnCartIcon()
    await dash.isProductVisbileOnCartPage('ZARA COAT 3')
    await dash.isProductVisbileOnCartPage('ADIDAS ORIGINAL')
    await dash.isProductVisbileOnCartPage('iphone 13 pro') 
})

test('Add all element to the cart', async( {page} )=>{
    await login.navigationToApplication()
    await login.loginIntoApplication()
    await dash.verifyLogoShouldVisible()
    
    const productNames = await dash.getAllProductName()
    await dash.addAllProductsToCart()

    await dash.clickOnCartIcon()
    await dash.verifyAllProuctVisibility(productNames)  
})