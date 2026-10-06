import StandardComputerComponent from "../modules/components/computer/StandardComputerComponent";
import { ComputerDataType } from "./ComputerDataType";

export const standardComputerDataType: ComputerDataType[] = [
    {
        computerClass: StandardComputerComponent,
        processor: "2.2 GHz",
        ram: "4GB",
        hdd: "320 GB",
        os: "Windows 10",
        software: "Acrobat Reader",
        quantity: 1
    },

    {
        computerClass: StandardComputerComponent,
        processor: "2.5 GHz",
        ram: "8GB",
        hdd: "400 GB",
        os: "Ubuntu",
        software: "Microsoft Office",
        quantity: 2
    },

    {
        computerClass: StandardComputerComponent,
        processor: "2.2 GHz",
        ram: "2 GB",
        hdd: "320 GB",
        os: "Windows 7",
        software: "Total Commander",
        quantity: 3
    },
]