import { Locator } from "@playwright/test";
import ProductEssentialComponent from "./ProductEssentialComponent";

export default abstract class ComputerEssentialComponent extends ProductEssentialComponent {

    constructor(component: Locator) {
        super(component);
    }

    abstract selectRAM(value: string): any;

    protected async selectValue(value: string): Promise<void> {
        await this.component.getByLabel(value, { exact: false }).first().click();
    }
}