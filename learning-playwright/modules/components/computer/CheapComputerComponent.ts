import { Locator } from "@playwright/test";
import ComputerEssentialComponent from "./ComputerEssentialComponent";

export default class CheapComputerComponent extends ComputerEssentialComponent {

    async selectProcessor(value: string): Promise<void> {
        await this.selectRadioBtn(value)
    }

    async selectRAM(value: string) {
        await this.selectRadioBtn(value);
    }

    async selectOS(value: string): Promise<void> {
        console.log("There is no OS selection. Someone is trying to input");
    }


}