import { standardComputerData } from '../../test-data/StandardComputerData';
import { cheapComputerData } from '../../test-data/CheapComputerData';
import test, { expect } from "@playwright/test";
import OrderComputerTestFlow from "../../test-flow/computer/OrderComputerTestFlow";
import BasePage from '../../modules/pages/BasePage';
import { ComputerDataType } from '../../test-data/ComputerDataType';


test.describe('Test Order Cheap Computer', () => {
    cheapComputerData.forEach(cheapData => {
        const { processor, ram } = cheapData;
        test(`${processor} ${ram}`, async ({ page }) => {

            await page.goto('/build-your-cheap-own-computer');
            const orderCompFlow = new OrderComputerTestFlow(page, cheapData);
            await orderCompFlow.buildAndAddToCart();
            await orderCompFlow.verifyShoppingCart();
            await orderCompFlow.agreeTosAndCheckout();
            await orderCompFlow.inputBillingAddress();
            await orderCompFlow.inputShippingAddress();
            await orderCompFlow.selectShippingMethod();
            await orderCompFlow.selectPaymentMethod();
            await orderCompFlow.inputPaymentInformation();
            //await orderCompFlow.confirmOrder();

        })
    })
})

test.describe('Test Order Standard Computer', () => {
    standardComputerData.forEach((stardardData) => {
        const { processor, ram } = stardardData;
        test(`${processor} ${ram}`, async ({ page }) => {

            await page.goto('/build-your-own-computer');
            const orderCompFlow = new OrderComputerTestFlow(page, stardardData);
            await orderCompFlow.buildAndAddToCart();
            await orderCompFlow.verifyShoppingCart();
            await orderCompFlow.agreeTosAndCheckout();
            await orderCompFlow.inputBillingAddress();
            await orderCompFlow.inputShippingAddress();
            await orderCompFlow.selectShippingMethod();
            await orderCompFlow.selectPaymentMethod();
            await orderCompFlow.inputPaymentInformation();
            await orderCompFlow.confirmOrder();

        })
    })
})

test.describe('Test Validation', () => {

    test('Missing hdd field', async ({ page }) => {
        await page.goto('/build-your-own-computer');

        const missingHddData: ComputerDataType = { ...standardComputerData[0], hdd: "" };
        const orderComputerFlow = new OrderComputerTestFlow(page, missingHddData);
        await orderComputerFlow.buildComputerSelectionAndAddToCart();

        const basePage = new BasePage(page);
        const notiText = await basePage.getNotificationText();

        expect(notiText).toContain("Please select HDD");
    })
})
