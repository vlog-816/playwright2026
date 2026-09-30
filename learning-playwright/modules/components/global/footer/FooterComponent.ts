import { Locator } from "@playwright/test";
import InformationFooterComponent from "./InformationFooterComponent";
import CustomerServiceFooterComponent from "./CustomerServiceFooterComponent";

export default class FooterComponent {

    public static readonly FOOTER_LOCATOR = ".footer";

    constructor(private component: Locator) {
        this.component = component;
    }

    informationComp(): InformationFooterComponent {
        return new InformationFooterComponent(this.component.locator(InformationFooterComponent.LOCATOR));
    }

    customerServiceComp(): CustomerServiceFooterComponent {
        return new CustomerServiceFooterComponent(this.component.locator(CustomerServiceFooterComponent.LOCATOR));
    }

    async getPoweredText(): Promise<string> {
        return await this.component.locator(".footer-poweredby").innerText();
    }
}