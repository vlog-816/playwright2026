import { Locator } from "@playwright/test";

export default class ConfirmOrderComponent {

    public static readonly LOCATOR = "#opc-confirm_order";
    private continueBtnSel = "input[onclick='ConfirmOrder.save()']";


    constructor(private component: Locator) {
        this.component = component;
    }

    async clickOnContinueBtn(): Promise<string> {
        await this.component.locator(this.continueBtnSel).click();
        return `**/OpcConfirmOrder/**`
    }

}