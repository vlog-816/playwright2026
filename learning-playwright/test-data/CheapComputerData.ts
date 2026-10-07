import { CREDIT_CARD, PAYMENT_METHOD } from './PaymentConstants';
import CheapComputerComponent from "../modules/components/computer/CheapComputerComponent";
import { ComputerDataType } from "./ComputerDataType";

export const cheapComputerData: ComputerDataType[] = [

    {
        computerClass: CheapComputerComponent,
        processor: "Fast",
        ram: "8 GB",
        hdd: "320 GB",
        software: "Office Suite",
        paymentMethod: PAYMENT_METHOD.credit,
        creditCard: CREDIT_CARD.visa
    },

    {
        computerClass: CheapComputerComponent,
        processor: "Medium",
        ram: "4 GB",
        hdd: "400 GB",
        software: "Image Viever",
        quantity: 2,
        paymentMethod: PAYMENT_METHOD.cod,
    },

    {
        computerClass: CheapComputerComponent,
        processor: "Slow",
        ram: "2 GB",
        hdd: "400 GB",
        software: "Other Office Suite",
        paymentMethod: PAYMENT_METHOD.money,
    },
    
    {
        computerClass: CheapComputerComponent,
        processor: "Medium",
        ram: "8 GB",
        hdd: "320 GB",
        software: "Office Suite",
        paymentMethod: PAYMENT_METHOD.purchase,
    },

]