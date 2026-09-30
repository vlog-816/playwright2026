import { Locator } from "@playwright/test";

export default class ProductComponent {

    public static readonly PRODUCT_LOCATOR = ".product-item";
    private productTittleSelector = ".product-title";
    private productPriceSelector = ".price.actual-price";

    constructor(private component: Locator) {
        this.component = component;
    }

    async getProductTitle(): Promise<string> {
        return await this.component.locator(this.productTittleSelector).innerText();
    }

    async getProductPrice(): Promise<string> {
        return await this.component.locator(this.productPriceSelector).innerText();
    }
}