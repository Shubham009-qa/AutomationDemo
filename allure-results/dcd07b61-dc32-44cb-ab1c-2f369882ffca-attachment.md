# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CartTest.spec.js >> Add all element to the cart @Regression @Smoke
- Location: testcase\CartTest.spec.js:27:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=ADIDAS ORIGINAL')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('text=ADIDAS ORIGINAL')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - generic [ref=e26]:
      - heading "My Cart" [level=1] [ref=e27]
      - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
    - heading "No Products in Your Cart !" [level=1] [ref=e30]
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test")
  2  | 
  3  | export class DashboardPage {
  4  |   constructor(page) {
  5  |     this.page = page
  6  |     this.logo = "//p[normalize-space()='Automation Practice']"
  7  |     this.productDetails = "div.card-body"
  8  |     this.cartIcon = "//button[@routerlink='/dashboard/cart']"
  9  |   }
  10 | 
  11 |   /**
  12 |    * This is used to verify user successfully logged in to application
  13 |    */
  14 |   async verifyLogoShouldVisible() {
  15 |     await expect(this.page.locator(this.logo)).toBeVisible()
  16 |   }
  17 | 
  18 |   async addProductToCart(productName) {
  19 |     await this.page
  20 |       .locator(this.productDetails)
  21 |       .filter({ hasText: productName })
  22 |       .getByRole("button", { name: "Add To Cart" })
  23 |       .click()
  24 |   }
  25 | 
  26 |   async clickOnCartIcon() {
  27 |     await this.page.locator(this.cartIcon).click()
  28 |   }
  29 | 
  30 |   async isProductVisbileOnCartPage(productName) {
  31 |     await expect(this.page.getByRole('heading', { name: productName })).toBeVisible()
  32 |   }
  33 | 
  34 |   async addAllProductsToCart() {
  35 |     const addToCartButton = this.page.locator("//button[text()=' Add To Cart']")
  36 |     const count = await addToCartButton.count()
  37 |     for(let i = 0; i < count; i++){
  38 |       await addToCartButton.nth(i).click()
  39 |     }
  40 |   }
  41 | 
  42 |   async getAllProductName(){
  43 |     const products = this.page.locator("//div[@class='card-body']/child::h5//child::b")
  44 | 
  45 |     const count = await products.count()
  46 |     const productNames = []
  47 |     for(let i = 0; i < count; i++ ){
  48 |       const text = await products.nth(i).textContent()
  49 |       productNames.push(text.trim())
  50 |     }
  51 |     return productNames
  52 |   }
  53 | 
  54 |   async verifyAllProuctVisibility(productNames) {
  55 |     for(const product of productNames) {
> 56 |       await expect(this.page.locator(`text=${product}`)).toBeVisible()
     |                                                          ^ Error: expect(locator).toBeVisible() failed
  57 |     }
  58 |   }
  59 | 
  60 | 
  61 | }
  62 | 
```