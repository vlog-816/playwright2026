import { Page } from "@playwright/test";

export class LoginPOMMethod01 {
    //Declare selectors
    private username: string = "#username";
    private password: string = "#password";
    private loginBtn: string = "button[type='submit']"

    //Constructor
    constructor(private page: Page) {
        this.page = page;
    }

    //Main method
    public async inputUsername(username: string) {
        await this.page.locator(this.username).fill(username);
    }

    public async inputPassword(password: string) {
        await this.page.locator(this.password).fill(password);
    }

    public async clickOnLoginButton() {
        await this.page.locator(this.loginBtn).click();
    }

    public async fillTheFormAndLogin(username: string, password: string) {
        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginBtn).click();
    }

}