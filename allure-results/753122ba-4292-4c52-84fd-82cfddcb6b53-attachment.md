# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CartTest.spec.js >> Add indivisual product to the cart
- Location: testcase\CartTest.spec.js:13:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'ZARA COAT 3' })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('heading', { name: 'ZARA COAT 3' })

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
        - button " Cart 1" [active] [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e26]:
    - generic [ref=e27]:
      - heading "My Cart" [level=1] [ref=e28]
      - button "Continue Shopping❯" [ref=e29] [cursor=pointer]
    - list [ref=e31]:
      - listitem [ref=e32] [cursor=pointer]:
        - generic [ref=e33]:
          - generic [ref=e34]:
            - paragraph [ref=e35]: "#6960ea76c941646b7a8b3dd5"
            - heading "iphone 13 pro" [level=3] [ref=e36]
            - paragraph [ref=e37]: MRP $ 55000
            - paragraph [ref=e38]: In Stock
          - paragraph [ref=e40]: $ 55000
          - generic [ref=e41]:
            - button "Buy Now❯" [ref=e42]
            - button "❯" [ref=e43]:
              - generic [ref=e44]: 
              - text: ❯
    - list [ref=e46]:
      - listitem [ref=e47]:
        - generic [ref=e48]: Subtotal
        - generic [ref=e49]: $55000
      - listitem [ref=e50]:
        - generic [ref=e51]: Total
        - generic [ref=e52]: $55000
      - listitem [ref=e53]:
        - button "Checkout❯" [ref=e54] [cursor=pointer]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | export class DashboardPage {
  3  |     constructor(page) {
  4  |         this.page = page
  5  |         this.logo = "//p[normalize-space()='Automation Practice']"
  6  |         this.cartItem = "div.card-body"
  7  |         this.cartIcon = "//button[@routerlink='/dashboard/myorders']"
  8  |     }
  9  |     /**
  10 |      * This is used to confirm user is successfully logged in
  11 |      */
  12 |     async verifyLogoIsVisible() {
  13 |         await expect(this.page.locator(this.logo)).toBeVisible()
  14 |     }
  15 | 
  16 |     async addProduct(productName) {
  17 |         await this.page
  18 |             .locator(this.cartItem)
  19 |             .filter({ hasText: productName })
  20 |             .getByRole('button', { name: 'Add To Cart' })
  21 |             .click();
  22 |     }
  23 | 
  24 |     async cickOnCartIcon() {
  25 |         await this.page.locator(this.cartIcon).click()
  26 |     }
  27 | 
  28 |     async isProductVisibleonCartPage(productName) {
> 29 |         await expect(this.page.getByRole('heading', { name: productName })).toBeVisible()
     |                                                                             ^ Error: expect(locator).toBeVisible() failed
  30 | 
  31 |     }
  32 |     /**
  33 |      * This method used to add all available product to cart
  34 |      */
  35 |     async addAllProductToCart() {
  36 |         const addToCartButton = await this.page.locator("//button[text()=' Add To Cart']")
  37 |         const count = addToCartButton.count()
  38 | 
  39 |         for(let i=0; i<count; i++){
  40 |             await addToCartButton.nth(i).click()
  41 |         }
  42 |     }
  43 | 
  44 |     async getAllProductNames(){
  45 |         const products = await this.page.locator("//div[@class='card-body']//child::h5//child::b")
  46 |         const count = products.count()
  47 |         const productNames = []
  48 |         for(let i=0; i<count; i++){
  49 |             const text = await products.nth(i).textContent()
  50 |             productNames.push(text.trim())
  51 |         }
  52 |         return productNames
  53 |     }
  54 | 
  55 |     async verifyAllProductVisibility(productNames){
  56 |         for ( const product of productNames){
  57 |             await expect(this.page.locator(`text=${product}`)).toBeVisible()
  58 |         }
  59 | 
  60 |     }
  61 | }
```