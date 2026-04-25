# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CartTest.spec.js >> Add individual product to the cart
- Location: testcase\CartTest.spec.js:14:1

# Error details

```
TypeError: login.loginToApplication is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e7]: Ecom
      - generic [ref=e9]:
        - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
          - /url: emailto:dummywebsite@rahulshettyacademy.com
          - generic [ref=e12]: 
          - text: dummywebsite@rahulshettyacademy.com
        - generic [ref=e13]:
          - link "" [ref=e14] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e15]: 
          - link "" [ref=e16] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e17]: 
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e19]: 
          - link "" [ref=e20] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e21]: 
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading "Practice Website for Rahul Shetty Academy Students" [level=1] [ref=e24]:
        - text: Practice Website for
        - emphasis [ref=e25]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e26] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e28]:
      - paragraph [ref=e29]:
        - generic [ref=e30]: Register to sign in with your personal account
      - generic [ref=e31]:
        - heading "Log in" [level=1] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Email
            - textbox "email@example.com" [ref=e36]
          - generic [ref=e37]:
            - generic [ref=e38]: Password
            - textbox "enter your passsword" [ref=e39]
          - button "Login" [ref=e40] [cursor=pointer]
        - link "Forgot password?" [ref=e41] [cursor=pointer]:
          - /url: "#/auth/password-new"
        - paragraph [ref=e42] [cursor=pointer]: Don't have an account? Register here
  - generic [ref=e43]:
    - heading "Why People Choose Us?" [level=1] [ref=e46]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e50]: 
        - generic [ref=e51]:
          - heading "3546540" [level=1]
          - paragraph [ref=e52]: Successfull Orders
      - generic [ref=e53]:
        - generic [ref=e55]: 
        - generic [ref=e56]:
          - heading "37653" [level=1]
          - paragraph [ref=e57]: Customers
      - generic [ref=e58]:
        - generic [ref=e60]: 
        - generic [ref=e61]:
          - heading "3243" [level=1]
          - paragraph [ref=e62]: Sellers
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e66]: 
        - generic [ref=e67]:
          - heading "4500+" [level=1]
          - paragraph [ref=e68]: Daily Orders
      - generic [ref=e69]:
        - generic [ref=e71]: 
        - generic [ref=e72]:
          - heading "500+" [level=1]
          - paragraph [ref=e73]: Daily New Customer Joining
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
  15 |     await login.navigationToApplication();
> 16 |     await login.loginToApplication();
     |                 ^ TypeError: login.loginToApplication is not a function
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
  28 |     await login.navigationToApplication();
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