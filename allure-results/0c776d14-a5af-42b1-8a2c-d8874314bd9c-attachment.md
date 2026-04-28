# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> Verify login with separate credentials @Smoke
- Location: testcase\Login.spec.js:17:1

# Error details

```
TypeError: dash.verifyLogoIsVisible is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
    - text:    
    - generic [ref=e25]:
      - paragraph [ref=e26]: Home | Search
      - heading "Filters" [level=4] [ref=e28]
      - generic [ref=e29]:
        - textbox "search" [ref=e31]
        - generic [ref=e32]:
          - heading "Price Range" [level=6] [ref=e33]
          - generic [ref=e34]:
            - textbox "Min Price" [ref=e36]
            - textbox "Max Price" [ref=e38]
        - generic [ref=e39]:
          - heading "Categories" [level=6] [ref=e40]
          - generic [ref=e42]: 
          - generic [ref=e43]:
            - checkbox [ref=e44]
            - generic [ref=e45]: fashion
          - generic [ref=e46]:
            - checkbox [ref=e47]
            - generic [ref=e48]: electronics
          - generic [ref=e49]:
            - checkbox [ref=e50]
            - generic [ref=e51]: household
        - generic [ref=e52]:
          - heading "Sub Categories" [level=6] [ref=e53]
          - generic [ref=e55]: 
          - generic [ref=e56]:
            - checkbox [ref=e57]
            - generic [ref=e58]: t-shirts
          - generic [ref=e59]:
            - checkbox [ref=e60]
            - generic [ref=e61]: shirts
          - generic [ref=e62]:
            - checkbox [ref=e63]
            - generic [ref=e64]: shoes
          - generic [ref=e65]:
            - checkbox [ref=e66]
            - generic [ref=e67]: mobiles
          - generic [ref=e68]:
            - checkbox [ref=e69]
            - generic [ref=e70]: laptops
        - generic [ref=e71]:
          - heading "Search For" [level=6] [ref=e72]
          - generic [ref=e74]: 
          - generic [ref=e75]:
            - checkbox [ref=e76]
            - generic [ref=e77]: men
          - generic [ref=e78]:
            - checkbox [ref=e79]
            - generic [ref=e80]: women
    - generic [ref=e83]:
      - generic [ref=e84]: Showing results |
      - generic [ref=e85]: User can only see maximum 9 products on a page
    - generic [ref=e86]: Design and Developed By - Kunal Sharma
  - generic "Login Successfully" [ref=e88]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test')
  2  | 
  3  | import { LoginPage } from '../pages/LoginPage'
  4  | 
  5  | import { DashboardPage } from '../pages/DashboardPage' //export class pagename so on importing page we need {} bracket i.e.ES Module
  6  | 
  7  | import data from '../data/testData.json'  //data is folder and we dont used export class data so no {} bracket required
  8  | 
  9  | let login
  10 | let dash
  11 | 
  12 | test.beforeEach(async ({ page }) => {
  13 |     login = new LoginPage(page)  //object creation to call constructor of that class
  14 |     dash = new DashboardPage(page)
  15 | })
  16 | 
  17 | test("Verify login with separate credentials @Smoke", async ({ page }) => {
  18 | 
  19 |     await login.navigationToApplication()
  20 | 
  21 |     await login.loginWithCredential(data.username, data.password)
> 22 |     await dash.verifyLogoIsVisible()
     |                ^ TypeError: dash.verifyLogoIsVisible is not a function
  23 | })
  24 | 
  25 | test("Verify login with valid credentials in compact version @Sanity", async ({ page }) => {
  26 |     await login.navigationToApplication()
  27 |     await login.loginIntoApplication()
  28 | 
  29 | })
  30 | 
  31 | // test("Verify login with valid given credentials", async({page})=>
  32 | // {
  33 | //     const login = new LoginPage(page)  //object creation to call constructor of that class
  34 | //     const dash = new DashboardPage(page)
  35 | //     await login.navigationToApplication()
  36 | 
  37 | //     await login.loginWithCredential("ssongade25@gmail.com","P@ssw0rd")
  38 | //     await dash.verifyLogoIsVisible
  39 | // })
  40 | 
  41 | 
```