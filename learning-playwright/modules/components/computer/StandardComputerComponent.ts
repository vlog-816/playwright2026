import { Locator } from "@playwright/test";
import ComputerEssentialComponent from "./ComputerEssentialComponent";

export default class StandardComputerComponent extends ComputerEssentialComponent {

    private allDropdownSelectors = "select[id^='product_attribute']"

    async selectRAM(value: string) {
        const RAM_LOCATOR_INDEX = 1;
        const ramDropdown: Locator = (await this.component.locator(this.allDropdownSelectors).all())[RAM_LOCATOR_INDEX];
        const optionValues: string[] = await ramDropdown.allInnerTexts();

        const optionIndex: number = optionValues.findIndex(option => option.startsWith(value));

        if (optionIndex === -1) {
            throw new Error(`There is no matching option for ${value}`);
        }

        await this.component.locator(ramDropdown).selectOption({ index: optionIndex })
    }


}