import test from "@playwright/test";
import HomePage from "../modules/pages/HomePage";

test.describe('Test Footer', () => {

    test('Home Page', async ({ page }) => {

        await page.goto("https://demowebshop.tricentis.com/");
        const homePage = new HomePage(page);
        const footerComp = homePage.footerComponent();

        const powerText = await footerComp.getPoweredText();
        console.log('Power Text:', powerText);


    })
})