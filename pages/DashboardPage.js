const { test, expect } = require("@playwright/test")

export class DashboardPage {
  constructor(page) {
    this.page = page
    this.logo = "//p[normalize-space()='Automation Practice']"
    this.productDetails = "div.card-body"
    this.cartIcon = "//button[@routerlink='/dashboard/cart']"
  }

  /**
   * This is used to verify user successfully logged in to application
   */
  async verifyLogoShouldVisible() {
    await expect(this.page.locator(this.logo)).toBeVisible()
  }

  async addProductToCart(productName) {
    await this.page
      .locator(this.productDetails)
      .filter({ hasText: productName })
      .getByRole("button", { name: "Add To Cart" })
      .click()
  }

  async clickOnCartIcon() {
    await this.page.locator(this.cartIcon).click()
  }

  async isProductVisbileOnCartPage(productName) {
    await expect(this.page.getByRole('heading', { name: productName })).toBeVisible()
  }

  async addAllProductsToCart() {
    const addToCartButton = this.page.locator("//button[text()=' Add To Cart']")
    const count = await addToCartButton.count()
    for(let i = 0; i < count; i++){
      await addToCartButton.nth(i).click()
    }
  }

  async getAllProductName(){
    const products = this.page.locator("//div[@class='card-body']/child::h5//child::b")

    const count = await products.count()
    const productNames = []
    for(let i = 0; i < count; i++ ){
      const text = await products.nth(i).textContent()
      productNames.push(text.trim())
    }
    return productNames
  }

  async verifyAllProuctVisibility(productNames) {
    for(const product of productNames) {
      await expect(this.page.locator(`text=${product}`)).toBeVisible()
    }
  }


}
