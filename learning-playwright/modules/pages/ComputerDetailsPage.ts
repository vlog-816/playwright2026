import { Locator } from '@playwright/test';
import ComputerEssentialComponent from "../components/computer/ComputerEssentialComponent";
import BasePage from "./BasePage";

export type ComputerComponentConstructor<T extends ComputerEssentialComponent> = new (component: Locator) => T;

export class ComputerDetailsPage extends BasePage{

    /*
    Có nhiều loại Computer Component: Standard, Cheap, Expensive,...
    Cần đưa vào cái khuôn, bên dưới hàm sẽ tự khởi tạo new.
    */
    computerComponent<T extends ComputerEssentialComponent>(componentClass: ComputerComponentConstructor<T>): T{
        return new componentClass(this.page.locator(".product-essential"))
    }
}