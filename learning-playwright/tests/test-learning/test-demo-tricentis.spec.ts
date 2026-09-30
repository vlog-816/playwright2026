import test from "@playwright/test";
import HomePage from "../../modules/pages/HomePage";

test.describe('Test Component in a page', () => {

    test('Home Page', async ({ page }) => {

        await page.goto("https://demowebshop.tricentis.com/");
        const homePage = new HomePage(page);
        const footerComp = homePage.footerComponent();

        const powerText = await footerComp.getPoweredText();
        console.log('Power Text:', powerText);
    })
})

test.describe('Test list components in a page', () => {

    test('List Featured product in Homepage', async ({ page }) => {
        await page.goto("https://demowebshop.tricentis.com/");
        const homePage = new HomePage(page);
        const listComponents = await homePage.productListComponents();

        for (const comp of listComponents) {
            const productTittle = await comp.getProductTitle();
            const productPrice = await comp.getProductPrice();
            console.log(`${productTittle}: ${productPrice}`)
        }
    })
})

test.describe('Test reuse Base Component', () => {

    test('Test Footer Column in Homepage', async ({ page }) => {
        await page.goto("https://demowebshop.tricentis.com/");
        const homepage = new HomePage(page);
        const informationColumn = homepage.footerComponent().informationComp();
        const customerServiceColumn = homepage.footerComponent().customerServiceComp();

        const infoTitle = await informationColumn.getTitleText();
        const serviceTitle = await customerServiceColumn.getTitleText();

        console.log(infoTitle);
        console.log(serviceTitle);


    })
})