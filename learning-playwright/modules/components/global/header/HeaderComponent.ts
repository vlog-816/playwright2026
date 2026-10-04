import { Locator } from "@playwright/test";
import ShoppingCartComponent from "../../shopping-cart/TotalsComponent";

export default class HeaderComponent {

    //locator
    public static readonly HEADER_LOCATOR = ".header";
    private shoppingCartSelector = "#topcartlink a";

    //constructor
    constructor(private component: Locator) {
        this.component = component;
    }

    //components inside, method

    async clickOnShoppingCart(): Promise<void>{
        await this.component.locator(this.shoppingCartSelector).scrollIntoViewIfNeeded();
        await this.component.locator(this.shoppingCartSelector).click();
    }

}