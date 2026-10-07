import { Locator } from "@playwright/test";

export default class PaymentMethodComponent {

    public static readonly LOCATOR = "#opc-payment_method";
    private allMethodsSel = ".method-name";
    private continueBtnSel = "input[onclick='PaymentMethod.save()']";


    constructor(private component: Locator) {
        this.component = component;
    }

    async selectPaymentMethod(method: string): Promise<void> {
        const methodLocation = this.component.locator(this.allMethodsSel).filter({ hasText: method }).locator("input");
        await methodLocation.waitFor({ state: "visible", timeout: 15 * 1000 });
        await methodLocation.click();
    }

    async clickOnContinueBtn(): Promise<string> {
        await this.component.locator(this.continueBtnSel).click();

        return `**/OpcSavePaymentMethod/**`
    }

}