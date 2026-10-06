import { standardComputerDataType } from './../../test-data/StandardComputerDataType';
import { cheapComputerDataType } from './../../test-data/CheapComputerDataType';
import test from "@playwright/test";
import OrderComputerTestFlow from "../../test-flow/computer/OrderComputerTestFlow";

test.describe('Test Order Computer Flow', () => {
    test.describe('Order Cheap Computer', () => {
        cheapComputerDataType.forEach(cheapData => {
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
                await orderCompFlow.confirmOrder();

            })
        })
    })
})

test.describe('Order Standard Computer', () => {
    standardComputerDataType.forEach((stardardData) => {
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
