import StandardComputerComponent from "../modules/components/computer/StandardComputerComponent";
import { ComputerDataType } from "./ComputerDataType";
import { CREDIT_CARD, PAYMENT_METHOD } from "./PaymentConstants";

export const standardComputerData: ComputerDataType[] = [
    {
        computerClass: StandardComputerComponent,
        processor: "2.2 GHz",
        ram: "4GB",
        hdd: "320 GB",
        os: "Windows 10",
        software: "Acrobat Reader",
        quantity: 1,
        paymentMethod: PAYMENT_METHOD.credit,
        creditCard: CREDIT_CARD.discover,
    },

    {
        computerClass: StandardComputerComponent,
        processor: "2.5 GHz",
        ram: "8GB",
        hdd: "400 GB",
        os: "Ubuntu",
        software: "Microsoft Office",
        quantity: 2,
        paymentMethod: PAYMENT_METHOD.cod,
    },

    {
        computerClass: StandardComputerComponent,
        processor: "2.2 GHz",
        ram: "2 GB",
        hdd: "320 GB",
        os: "Windows 7",
        software: "Total Commander",
        quantity: 3,
        paymentMethod: PAYMENT_METHOD.money
    },

    {
        computerClass: StandardComputerComponent,
        processor: "2.5 GHz",
        ram: "4GB",
        hdd: "400 GB",
        os: "Ubuntu",
        software: "Acrobat Reader",
        quantity: 1,
        paymentMethod: PAYMENT_METHOD.purchase,
        poNumber: "PO444555666"
    },
]