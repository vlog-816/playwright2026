import ComputerEssentialComponent from "./ComputerEssentialComponent";

export default class CheapComputerComponent extends ComputerEssentialComponent {
    
    async selectRAM(value: string) {
        await this.selectValue(value);
    }

    
}