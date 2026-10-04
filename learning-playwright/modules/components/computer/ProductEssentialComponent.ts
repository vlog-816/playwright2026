import { Locator } from "@playwright/test";

export default class ProductEssentialComponent {

    private productNameSelector = ".product-name h1";
    private basePriceSelector = ".product-price";
    private inputQuantitySelector = "input[class='qty-input']"
    private addToCartBtnSelector = "input[id*=add-to-cart-button]";
    private allOptionsSelector: string = ".option-list input";

    //other base of product essential....

    protected constructor(protected component: Locator) {
        this.component = component;
    }

    async getProductName(): Promise<string> {
        return await this.component.locator(this.productNameSelector).innerText();
    }
    async getBasePrice(): Promise<number> {
        const priceText = await this.component.locator(this.basePriceSelector).innerText();
        return Number(priceText)
    }

    async inputQuantity(value: number): Promise<void> {
        await this.component.locator(this.inputQuantitySelector).fill(value.toString());
    }

    async clickOnAddToCart(): Promise<string> {
        await this.component.locator(this.addToCartBtnSelector).click();

        return "**/addproducttocart/details**"
    }

    async unSelectAllOptions(): Promise<void> {

        const allCheckboxes = await this.component.locator(this.allOptionsSelector).all();
        for (const checkbox of allCheckboxes) {
            const isChecked = await checkbox.isChecked();

            if (isChecked) await checkbox.click();
        }
    }
}