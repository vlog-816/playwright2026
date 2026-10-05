import { Locator } from "@playwright/test";

export default class PaymentInformationComponent {

    public static readonly LOCATOR = "#opc-payment_info";
    private continueBtnSel = "input[onclick='PaymentInfo.save()']";
    private creditCardSel = "#CreditCardType";
    private cardholderNameSel = "#CardholderName";
    private cardNumberSel = "#CardNumber";
    private expireMonthSel = "#ExpireMonth";
    private expireYearSel = "#ExpireYear";
    private cardCodeDel = "#CardCode";


    constructor(private component: Locator) {
        this.component = component;
    }

    async selectCreditCard(value: string): Promise<void> {
        await this.component.locator(this.creditCardSel).selectOption({ value: value })
    }

    async inputCardholderName(value: string): Promise<void> {
        await this.component.locator(this.cardholderNameSel).fill(value);
    }

    async inputCardNumber(value: string): Promise<void> {
        await this.component.locator(this.cardNumberSel).fill(value);
    }

    async inputExpirationDate(month: string, year: string): Promise<void> {
        await this.component.locator(this.expireMonthSel).selectOption({ label: month });
        await this.component.locator(this.expireYearSel).selectOption({ label: year });
    }

    async inputCardCode(value: string): Promise<void> {
        await this.component.locator(this.cardCodeDel).fill(value);
    }

    async clickOnContinueBtn(): Promise<string> {
        await this.component.locator(this.continueBtnSel).click();
        return `**/OpcSavePaymentInfo/**`
    }
}