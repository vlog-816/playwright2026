import { Locator } from "@playwright/test";

export default class ProductEssentialComponent {

    private productName = ".product-name h1";
    //other base of product essential....

    protected constructor(protected component: Locator) {
        this.component = component;
    }

    async getProductName(){
        await this.component.locator(this.productName).innerText();
    }
}