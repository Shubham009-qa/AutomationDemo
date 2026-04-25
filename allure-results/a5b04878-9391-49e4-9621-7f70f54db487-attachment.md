# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CartTest.spec.js >> Add all element to the cart
- Location: testcase\CartTest.spec.js:27:1

# Error details

```
TypeError: login.navigateToApplication is not a function
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | import { DashboardPage } from '../pages/DashboardPage';
  3  | import {LoginPage} from '../pages/LoginPage';
  4  | import data from '../data/testData.json';
  5  | 
  6  | let login;
  7  | let dash;
  8  | 
  9  | test.beforeEach(async ( {page})=>{
  10 |      login = new LoginPage(page); 
  11 |      dash = new DashboardPage(page); 
  12 | })
  13 | 
  14 | test('Add individual product to the cart', async( {page} )=>{
  15 |     await login.navigateToApplication();
  16 |     await login.loginToApplication();
  17 |     await dash.verifyLogoShouldVisible();
  18 |     await dash.addProductToCart('ZARA COAT 3');
  19 |     await dash.addProductToCart('ADIDAS ORIGINAL');
  20 |     await dash.addProductToCart('iphone 13 pro');
  21 |     await dash.clickOnCartIcon();
  22 |     await dash.isProductVisbileOnCartPage('ZARA COAT 3');
  23 |     await dash.isProductVisbileOnCartPage('ADIDAS ORIGINAL');
  24 |     await dash.isProductVisbileOnCartPage('iphone 13 pro'); 
  25 | });
  26 | 
  27 | test('Add all element to the cart', async( {page} )=>{
> 28 |     await login.navigateToApplication();
     |                 ^ TypeError: login.navigateToApplication is not a function
  29 |     await login.loginToApplication();
  30 |     await dash.verifyLogoShouldVisible();
  31 |     
  32 |     const productNames = await dash.getAllProductName();
  33 |     await dash.addAllProductsToCart();
  34 | 
  35 |     await dash.clickOnCartIcon();
  36 |     await dash.verifyAllProuctVisibility(productNames);  
  37 | });
```