import { Locator } from "@playwright/test";
import CartItemRowComponent from "../components/shopping-cart/CartItemRowComponent";
import TotalsComponent from "../components/shopping-cart/TotalsComponent";
import BasePage from "./BasePage";

export default class ShoppingCartPage extends BasePage {

    totalsComponent(): TotalsComponent {
        return new TotalsComponent(this.page.locator(TotalsComponent.LOCATOR))
    }

    async cartItemRowComponentList(): Promise<CartItemRowComponent[]> {
        const cartItemRows: Locator[] = await this.page.locator(CartItemRowComponent.LOCATOR).all();

        return cartItemRows.map(row => new CartItemRowComponent(row))
    }
}