import { Locator } from "@playwright/test";

export default class FooterComponent {

    public static readonly FOOTER_LOCATOR = ".footer";

    constructor(private component: Locator) {
        this.component = component;
    }

    async getPoweredText(): Promise<string> {
        return await this.component.locator(".footer-poweredby").innerText();
    }
}