import test from "@playwright/test";
import HomePage from "../../modules/pages/HomePage";
import CheapComputerComponent from "../../modules/components/computer/CheapComputerComponent";
import StandardComputerComponent from "../../modules/components/computer/StandardComputerComponent";
import { ComputerDetailsPage } from "../../modules/pages/ComputerDetailsPage";

test.describe('Test Component in a page', () => {

    test('Home Page', async ({ page }) => {

        await page.goto("/");
        const homePage = new HomePage(page);
        const footerComp = homePage.footerComponent();

        const powerText = await footerComp.getPoweredText();
        console.log('Power Text:', powerText);
    })
})

test.describe('Test list components in a page', () => {

    test('List Featured product in Homepage', async ({ page }) => {
        await page.goto("/");
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
        await page.goto("/");
        const homepage = new HomePage(page);
        const informationColumn = homepage.footerComponent().informationComp();
        const customerServiceColumn = homepage.footerComponent().customerServiceComp();

        const infoTitle = await informationColumn.getTitleText();
        const serviceTitle = await customerServiceColumn.getTitleText();

        console.log(infoTitle);
        console.log(serviceTitle);


    })
})

test.describe('Computer Essential Component', () => {

    test('Cheap Computer', async ({ page }) => {
        await page.goto('/build-your-cheap-own-computer');

        const cheapComputerComp = new CheapComputerComponent(page.locator(".product-essential"));
        await cheapComputerComp.selectRAM("4 GB")
    })

    test('Standard Computer', async ({ page }) => {
        await page.goto('/build-your-own-computer')
        const standardComputerComp = new StandardComputerComponent(page.locator(".product-essential"));
        await standardComputerComp.selectRAM("8GB")
    })

    test('Cheap Computer by generic type', async ({ page }) => {
        await page.goto('/build-your-cheap-own-computer');

        const computerDetailPage = new ComputerDetailsPage(page);
        const cheapComputerComp = computerDetailPage.computerComponent(CheapComputerComponent);
        await cheapComputerComp.selectRAM("4 GB")
    })

    test('Standard Computer by generic type', async ({ page }) => {
        await page.goto('/build-your-own-computer')

        const standardComputerComp = new ComputerDetailsPage(page).computerComponent(StandardComputerComponent);
        await standardComputerComp.selectRAM("8GB")
    })
})