import { Locator } from "@playwright/test";
import ComputerEssentialComponent from "./ComputerEssentialComponent";

export default class StandardComputerComponent extends ComputerEssentialComponent {
    private allDropdownSelectors = "select[id^='product_attribute']"

    async selectProcessor(value: string): Promise<string> {
        const PROCESSOR_LOCATOR_INDEX = 0;
        const allDropdowns: Locator[] = await this.component.locator(this.allDropdownSelectors).all();
        const processorDropdown: Locator = allDropdowns[PROCESSOR_LOCATOR_INDEX];

        return await this.selectDropdownValue(value, processorDropdown);
    }

    async selectRAM(value: string): Promise<string> {
        const RAM_LOCATOR_INDEX = 1;
        const allDropdowns: Locator[] = await this.component.locator(this.allDropdownSelectors).all();
        const ramDropdown: Locator = allDropdowns[RAM_LOCATOR_INDEX];
        
        return await this.selectDropdownValue(value, ramDropdown);
    }


}