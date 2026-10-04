import { Locator } from "@playwright/test";

export default class TotalsComponent {

    public static readonly LOCATOR = ".cart-footer .totals"

    constructor(private component: Locator) {
        this.component = component;
    }

    
}