import { Locator } from "@playwright/test";

export default class ShippingAddressComponent {

    public static readonly LOCATOR = "#opc-shipping";
    private continueBtnSel = "input[onclick='Shipping.save()']";

    constructor(private component: Locator) {
        this.component = component;
    }

    async clickOnContinueBtn(): Promise<string> {
        await this.component.locator(this.continueBtnSel).waitFor({ state: "visible", timeout: 15 * 1000 });
        await this.component.locator(this.continueBtnSel).click();

        return `**/OpcSaveShipping/**`
    }
}