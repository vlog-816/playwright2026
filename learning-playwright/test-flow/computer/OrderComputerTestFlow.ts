import { Page } from '@playwright/test';
import { ComputerDataType } from '../../test-data/ComputerDataType';
import { ComputerDetailsPage } from '../../modules/pages/ComputerDetailsPage';
export default class OrderComputerTestFlow {

    private productPrice: number = 0;
    constructor(private page: Page, private computerData: ComputerDataType) {
        this.page = page;
        this.computerData = computerData
    }

    async buildAndAddToCart() {
        const computerDetailsPage = new ComputerDetailsPage(this.page);
        const { computerClass, processor, ram, hdd, os, software, quantity } = this.computerData
        console.log(this.computerData);

        const computerComp = computerDetailsPage.computerComponent(computerClass);
        await computerComp.unSelectAllOptions();

        const processorPrice = this.getAddionalPrice(await computerComp.selectProcessor(processor));
        const ramPrice = this.getAddionalPrice(await computerComp.selectRAM(ram));
        const hddPrice = this.getAddionalPrice(await computerComp.selectHDD(hdd));
        const softwarePrice = this.getAddionalPrice(await computerComp.selectSofware(software));

        let osPrice = 0;
        if (os !== undefined && os !== null) {
            osPrice = this.getAddionalPrice(await computerComp.selectOS(os));
        }

        const basePrice = await computerComp.getBasePrice();
        const additionPrice = processorPrice + ramPrice + hddPrice + softwarePrice + osPrice;

        this.productPrice = (basePrice + additionPrice) * (quantity ? quantity : 1);

        console.log(`processor Price: ${processorPrice} | ramPrice: ${ramPrice} | hddPrice: ${hddPrice}
                    softwarePrice: ${softwarePrice} | osPrice: ${osPrice} | quanlity: ${quantity} | qty: ${quantity}
                    basePrice:${basePrice} | additionPrice: ${additionPrice} | productPrice: ${this.productPrice}`);

    }

    private getAddionalPrice(optionFullText: string): number {

        const regex = /\[\+(\d+(?:\.\d+)?)\]/;

        if (optionFullText === null) optionFullText = ""

        const matches = optionFullText.match(regex);

        if (matches) return Number(matches[1].trim())

        return 0;
    }
}