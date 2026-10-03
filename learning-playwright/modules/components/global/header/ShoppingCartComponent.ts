import { Locator } from "@playwright/test";

export default class ShoppingCartComponent {

    public static readonly LOCATOR = "'.page.shopping-cart-page'"

    constructor(private component: Locator) {
        this.component = component;
    }

    
}