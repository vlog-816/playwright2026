import CheapComputerComponent from "../modules/components/computer/CheapComputerComponent";
import { ComputerDataType } from "./ComputerDataType";

export const cheapComputerDataType: ComputerDataType[] = [

    {
        computerClass: CheapComputerComponent,
        processor: "Fast",
        ram: "8 GB",
        hdd: "320 GB",
        software: "Office Suite"
    },

    {
        computerClass: CheapComputerComponent,
        processor: "Medium",
        ram: "4 GB",
        hdd: "400 GB",
        software: "Image Viever",
        quantity: 2
    },
        {
        computerClass: CheapComputerComponent,
        processor: "Slow",
        ram: "2 GB",
        hdd: "400 GB",
        software: "Other Office Suite"
    },

]