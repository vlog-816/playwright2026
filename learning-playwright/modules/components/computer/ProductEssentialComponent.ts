import { Locator } from "@playwright/test";

export default class ProductEssentialComponent {

    private productName = ".product-name h1";
    private allOptionsSelector: string = ".option-list input";

    //other base of product essential....

    protected constructor(protected component: Locator) {
        this.component = component;
    }

    async getProductName() {
        await this.component.locator(this.productName).innerText();
    }

    async unSelectAllOptions(): Promise<void> {

        const allCheckboxes = await this.component.locator(this.allOptionsSelector).all();
        for (const checkbox of allCheckboxes) {
            const isChecked = await checkbox.isChecked();

            if (isChecked) await checkbox.click();
        }
    }
}