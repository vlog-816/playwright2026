import { Locator } from "@playwright/test";
import ProductEssentialComponent from "./ProductEssentialComponent";

export default abstract class ComputerEssentialComponent extends ProductEssentialComponent {

    constructor(component: Locator) {
        super(component)
    }

    abstract selectRAM(value: string): Promise<string>;

    abstract selectProcessor(value: string): Promise<string>;

    async selectHDD(value: string): Promise<string> {
        return await this.selectRadioBtn(value);
    }

    async selectOS(value: string): Promise<string> {
        return await this.selectRadioBtn(value);
    }

    async selectSofware(value: string): Promise<string> {
        return await this.selectRadioBtn(value);
    }

    protected async selectRadioBtn(value: string): Promise<string> {
        const radioBtnLocator = this.component.locator(`//label[contains(text(),"${value}")]`).first();
        await radioBtnLocator.click();

        return await radioBtnLocator.innerText();
    }

    protected async selectDropdownValue(value: string, dropdownLocator: Locator): Promise<string> {
        const optionValues: string[] = await dropdownLocator.locator('option').allInnerTexts();

        const optionIndex: number = optionValues.findIndex(option => option.startsWith(value));

        if (optionIndex === -1) {
            throw new Error(`There is no matching option for ${value}`);
        }

        await dropdownLocator.selectOption({ index: optionIndex })

        return optionValues[optionIndex]
    }
}