import { LoginCreds } from '../../../types/DataType';
import { Locator, Page } from "@playwright/test";
import { LoginPageSelectors } from "./LoginPageSelectors";

export class LoginPOMMethod02 {

    //Declare selector

    //Constructor
    constructor(private page: Page) {
        this.page = page;
    }

    //Introduce Locator
    public username(): Locator {
        return this.page.locator(LoginPageSelectors.username);
    }

    public password(): Locator {
        return this.page.locator(LoginPageSelectors.password);
    }

    public async clickOnLoginButton(): Promise<void> {
        await this.page.locator(LoginPageSelectors.loginBtn).click();
    }

    public async loginWithCreds({ username, password }: LoginCreds): Promise<void> {
        await this.page.locator(LoginPageSelectors.username).fill(username);
        await this.page.locator(LoginPageSelectors.password).fill(password);
        await this.page.locator(LoginPageSelectors.loginBtn).click();
    }
}