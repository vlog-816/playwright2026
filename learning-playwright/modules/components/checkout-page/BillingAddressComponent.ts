import { Locator } from "@playwright/test";

export default class BillingAddressComponent {

    public static readonly LOCATOR = "#opc-billing";

    constructor(private component: Locator) {
        this.component = component;
    }
}