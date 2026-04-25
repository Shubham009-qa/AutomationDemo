const { test, expect } = require('@playwright/test');
export class DashboardPage {
    constructor(page) {
        this.page = page
        this.logo = "//p[normalize-space()='Automation Practice']"
        this.cartItem = "div.card-body"
        this.cartIcon = "//button[@routerlink='/dashboard/myorders']"
    }
    /**
     * This is used to confirm user is successfully logged in
     */
    async verifyLogoIsVisible() {
        await expect(this.page.locator(this.logo)).toBeVisible()
    }

    async addProduct(productName) {
        await this.page
            .locator(this.cartItem)
            .filter({ hasText: productName })
            .getByRole('button', { name: 'Add To Cart' })
            .click();
    }

    async cickOnCartIcon() {
        await this.page.locator(this.cartIcon).click()
    }

    async isProductVisibleonCartPage(productName) {
        await expect(this.page.getByRole('heading', { name: productName })).toBeVisible()

    }
    /**
     * This method used to add all available product to cart
     */
    async addAllProductToCart() {
        const addToCartButton = await this.page.locator("//button[text()=' Add To Cart']")
        const count = addToCartButton.count()

        for(let i=0; i<count; i++){
            await addToCartButton.nth(i).click()
        }
    }

    async getAllProductNames(){
        const products = await this.page.locator("//div[@class='card-body']//child::h5//child::b")
        const count = products.count()
        const productNames = []
        for(let i=0; i<count; i++){
            const text = await products.nth(i).textContent()
            productNames.push(text.trim())
        }
        return productNames
    }

    async verifyAllProductVisibility(productNames){
        for ( const product of productNames){
            await expect(this.page.locator(`text=${product}`)).toBeVisible()
        }

    }
}