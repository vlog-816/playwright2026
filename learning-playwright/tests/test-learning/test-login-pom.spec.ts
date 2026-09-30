import { test, expect } from "@playwright/test";
import { LoginPOMMethod01 } from "../modules/pages/LoginPOMMethod01";
import { LoginCreds } from "../../types/DataType";
import { LoginPOMMethod02 } from "../modules/pages/LoginPOMMethod02";

const loginCreds01 = {
    username: "tomsmith",
    password: "SuperSecretPassword!"
}

const loginCreds02: LoginCreds = {
    username: "tomsmith",
    password: "SuperSecretPassword!"
}

test.describe('Login Method 01', () => {

    test('Login test 01', async ({ page }) => {
        const loginPage = new LoginPOMMethod01(page);
        await page.goto("https://the-internet.herokuapp.com/login")
        await loginPage.fillTheFormAndLogin(loginCreds01.username, loginCreds01.password);
    })
})

test.describe('Login Method 02', () => {

    test('Login test 02 by using method', async ({ page }) => {
        const loginPage = new LoginPOMMethod02(page);
        await page.goto("https://the-internet.herokuapp.com/login");
        await loginPage.loginWithCreds(loginCreds02);
    })

    test('Login test 02 by using locator', async ({ page }) => {
        const loginPage = new LoginPOMMethod02(page);
        await page.goto("https://the-internet.herokuapp.com/login");
        await loginPage.username().fill(loginCreds01.username);
        await loginPage.password().fill(loginCreds01.password);
        await loginPage.clickOnLoginButton();
    })
})

test.describe('Login Method 03', () => {

})