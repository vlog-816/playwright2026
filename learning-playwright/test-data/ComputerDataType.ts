import { LoginCreds } from './LoginDataType';
import ComputerEssentialComponent from '../modules/components/computer/ComputerEssentialComponent';
import { ComputerComponentConstructor } from '../modules/pages/ComputerDetailsPage';

export interface ComputerDataType {
    loginCreds?: LoginCreds,
    computerClass: ComputerComponentConstructor<ComputerEssentialComponent>,
    processor: string,
    ram: string,
    hdd: string,
    os?: string,
    software: string
}