import { Locator } from "@playwright/test";

export default class TotalsComponent {

    public static readonly LOCATOR = ".cart-footer .totals"
    private cartTotalRowsSelector = ".cart-total tr";
    private priceTypeSelector = ".cart-total-left";
    private priceValueSelector = ".cart-total-right";
    private tosSelector = "#termsofservice";
    private checkoutBtnSelector = "#checkout";


    constructor(private component: Locator) {
        this.component = component;
    }

    async priceCategory(): Promise<any> {
        const priceCat: { [key: string]: number } = {}

        const totalRows = await this.component.locator(this.cartTotalRowsSelector).all();
        for (const row of totalRows) {
            const rawTypeText = await row.locator(this.priceTypeSelector).innerText();
            const priceText = await row.locator(this.priceValueSelector).innerText();

            const typeText = rawTypeText.replaceAll(":", "").trim();

            priceCat[typeText] = Number(priceText.trim())
        }
        return priceCat
    }

    async clickTosCheckbox(): Promise<void> {
        await this.component.locator(this.tosSelector).click();
    }

    async clickCheckoutBtn(): Promise<void> {
        await this.component.locator(this.checkoutBtnSelector).click();
    }
}