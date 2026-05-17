import urls from '../utils/env.js'
export class LoginPage {
    constructor(page) {
        this.page = page
        this.userNameField = "#userEmail"
        this.passwordField = "#userPassword"
        this.loginButton = "//input[@name='login']"
    }
    /**
     * This methos is used to navigate to the application in given browser
     */
    async navigationToApplication() {
        await this.page.goto(urls)
    }
    /**
     * This method is used to enter username
     */
    async enterUserName() {
        await this.page.locator(this.userNameField).fill("ssongade25@gmail.com")
    }
    /**
     * This method is used to enter password
     */
    async enterUserPassword() {
        await this.page.locator(this.passwordField).fill("P@ssw0rd")
    }
    /**
     * This method is used to enter username
     */
    async clickOnLogin() {
        await this.page.click(this.loginButton)
    }

    async loginIntoApplication() {
        await this.page.locator(this.userNameField).fill("ssongade25@gmail.com")
        await this.page.locator(this.passwordField).fill("P@ssw0rd")
        await this.page.click(this.loginButton)
    }
    /**
     * This method is used when user wants to use his own credentials
     * @param {*} username 
     * @param {*} password 
     */
    async loginWithCredential(username, password) {
        await this.page.locator(this.userNameField).fill(username)
        await this.page.locator(this.passwordField).fill(password)
        await this.page.click(this.loginButton)
    }
}

