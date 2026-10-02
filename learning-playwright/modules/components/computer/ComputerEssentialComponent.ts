import { Locator } from "@playwright/test";
import ProductEssentialComponent from "./ProductEssentialComponent";

export default abstract class ComputerEssentialComponent extends ProductEssentialComponent {

    private allCheckboxesSelector: string = "ul li input";

    constructor(component: Locator) {
        super(component)
    }

    abstract selectRAM(value: string): Promise<void>;
    abstract selectProcessor(value: string): Promise<void>;

    protected async selectRadioBtn(value: string): Promise<void> {
        await this.component.locator(`//label[contains(text(),"${value}")]`).first().click();
    }

    protected async selectDropdownValue(value: string, dropdownLocator: Locator): Promise<void> { 
        const optionValues: string[] = await dropdownLocator.locator('option').allInnerTexts();

        const optionIndex: number = optionValues.findIndex(option => option.startsWith(value));

        if (optionIndex === -1) {
            throw new Error(`There is no matching option for ${value}`);
        }

        await dropdownLocator.selectOption({ index: optionIndex })
    }

    async selectHDD(value: string): Promise<void> {
        await this.component.locator(`//label[contains(text(),"${value}")]`).first().click();
    }

    async selectOS(value: string): Promise<void> {
        await this.component.locator(`//label[contains(text(),"${value}")]`).first().click();
    }

    async selectSofware(value: string): Promise<void> {
        await this.component.locator(`//label[contains(text(),"${value}")]`).first().click();
    }

    async unCheckCheckboxes(): Promise<void> {

        const allCheckboxes = await this.component.locator(this.allCheckboxesSelector).all();
        for (const checkbox of allCheckboxes) {
            const isChecked = await checkbox.isChecked();
            if (isChecked) await checkbox.click();
        }
    }
}