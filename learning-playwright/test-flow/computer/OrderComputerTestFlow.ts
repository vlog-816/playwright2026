import { Page } from '@playwright/test';
import { ComputerDataType } from '../../test-data/ComputerDataType';
import { ComputerDetailsPage } from '../../modules/pages/ComputerDetailsPage';
export default class OrderComputerTestFlow {

    constructor(private page: Page, private computerData: ComputerDataType) {
        this.page = page;
        this.computerData = computerData
    }

    async buildAndAddToCart() {
        const computerDetailsPage = new ComputerDetailsPage(this.page);
        const { computerClass, processor, ram, hdd, os, software } = this.computerData
        console.log(this.computerData);

        const computerComp = computerDetailsPage.computerComponent(computerClass);
        await computerComp.unCheckCheckboxes();
        await computerComp.selectProcessor(processor);
        await computerComp.selectRAM(ram);
        await computerComp.selectHDD(hdd);
        await computerComp.selectSofware(software);

        if (os !== undefined && os !== null) {
            await computerComp.selectOS(os);
        }
    }
}