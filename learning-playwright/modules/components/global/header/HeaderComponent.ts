import { Locator } from "@playwright/test";
import ShoppingCartComponent from "./ShoppingCartComponent";

export default class HeaderComponent {

    //locator
    public static readonly HEADER_LOCATOR = ".header";
    private shoppingCartSelector = "#topcartlink a";

    //constructor
    constructor(private component: Locator) {
        this.component = component;
    }

    //components inside
    shoppingCartComp(): ShoppingCartComponent {
        return new ShoppingCartComponent(this.component.locator(ShoppingCartComponent.LOCATOR));
    }

    async clickOnShoppingCart(): Promise<void>{
        await this.component.locator(this.shoppingCartSelector).first().click();
    }

}