import { Locator } from "@playwright/test";

export default class ShippingMethodComponent {

    public static readonly LOCATOR = "#opc-shipping_method";
    private shippingMethodListSel = ".method-list label";
    private continueBtnSel = "input[onclick='ShippingMethod.save()']";

    constructor(private component: Locator) {
        this.component = component;
    }

    async shippingMethodLocatorsList(): Promise<Locator[]> {
        await this.component.locator(this.shippingMethodListSel).first().waitFor({ state: "visible", timeout: 15 * 1000 });
        return await this.component.locator(this.shippingMethodListSel).all();
    }

    async clickOnContinueBtn(): Promise<void> {
        await this.component.locator(this.continueBtnSel).click();
    }

}