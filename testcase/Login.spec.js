const { test, expect } = require('@playwright/test')

import { LoginPage } from '../pages/LoginPage'

import { DashboardPage } from '../pages/DashboardPage' //export class pagename so on importing page we need {} bracket i.e.ES Module

import data from '../data/testData.json'  //data is folder and we dont used export class data so no {} bracket required

let login
let dash

test.beforeEach(async ({ page }) => {
    login = new LoginPage(page)  //object creation to call constructor of that class
    dash = new DashboardPage(page)
})

test("Verify login with separate credentials", async ({ page }) => {

    await login.navigationToApplication()

    await login.loginWithCredential(data.username, data.password)
    await dash.verifyLogoIsVisible()
})

test("Verify login with valid credentials in compact version", async ({ page }) => {
    await login.navigationToApplication()
    await login.loginIntoApplication()

})

// test("Verify login with valid given credentials", async({page})=>
// {
//     const login = new LoginPage(page)  //object creation to call constructor of that class
//     const dash = new DashboardPage(page)
//     await login.navigationToApplication()

//     await login.loginWithCredential("ssongade25@gmail.com","P@ssw0rd")
//     await dash.verifyLogoIsVisible
// })

