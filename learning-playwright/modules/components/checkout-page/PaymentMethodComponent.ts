import { Locator } from "@playwright/test";

export default class PaymentMethodComponent {

    public static readonly LOCATOR = "#opc-payment_method";
    private creditCartSel = "#paymentmethod_2";
    private continueBtnSel = "input[onclick='PaymentMethod.save()']";


    constructor(private component: Locator) {
        this.component = component;
    }

    async selectPaymentMethod(): Promise<void> {
        await this.component.locator(this.creditCartSel).waitFor({ state: "visible", timeout: 15 * 1000 });
        await this.component.locator(this.creditCartSel).click();
    }

    async clickOnContinueBtn(): Promise<string> {
        await this.component.locator(this.continueBtnSel).click();

        return `**/OpcSavePaymentMethod/**`
    }

}