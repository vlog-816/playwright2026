import { Locator } from "@playwright/test";

export default class CartItemRowComponent {

    public static readonly LOCATOR = ".cart-item-row";
    private priceSelector = ".product-unit-price";
    private quantitySelector = ".qty-input";
    private subtotalSelector = ".product-subtotal";

    constructor(private component: Locator) {
        this.component = component;
    }

    async getPrice(): Promise<number> {
        const priceText: string = await this.component.locator(this.priceSelector).innerText();
        return Number(priceText)
    }

    async getQuantity(): Promise<number> {
        const quantityText = await this.component.locator(this.quantitySelector).getAttribute("value");
        return Number(quantityText)
    }

    async getSubtotal(): Promise<number> {
        const subtotalText = await this.component.locator(this.subtotalSelector).innerText();
        return Number(subtotalText)
    }
}