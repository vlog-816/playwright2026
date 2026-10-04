import { standardComputerDataType } from './../../test-data/StandardComputerDataType';
import { cheapComputerDataType } from './../../test-data/CheapComputerDataType';
import test from "@playwright/test";
import OrderComputerTestFlow from "../../test-flow/computer/OrderComputerTestFlow";

test.describe('Test Order Computer Flow', () => {

    test('Order Cheap Computer', async ({ page }) => {

        await page.goto('/build-your-cheap-own-computer');
        const orderCompFlow = new OrderComputerTestFlow(page, cheapComputerDataType);
        await orderCompFlow.buildAndAddToCart();
        await orderCompFlow.verifyShoppingCart();
        await orderCompFlow.agreeTosAndCheckout();

    })

    test('Order Standard Computer', async ({ page }) => {

        await page.goto('/build-your-own-computer');
        const orderCompFlow = new OrderComputerTestFlow(page, standardComputerDataType);
        await orderCompFlow.buildAndAddToCart();
        await orderCompFlow.verifyShoppingCart();
        await orderCompFlow.agreeTosAndCheckout();

    })

})