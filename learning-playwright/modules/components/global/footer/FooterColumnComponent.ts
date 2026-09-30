import { Locator } from "@playwright/test";

export default class FooterColumnComponent {

    protected component: Locator;
    private titleSelector = "h3";
    private linkTextSelector = "ul li a";

    constructor(component: Locator) {
        this.component = component;
    }

    async getTitleText(): Promise<string> {
        return await this.component.locator(this.titleSelector).innerText();
    }

    async getLinkTexts(): Promise<string[]> {

        const linkTextLocators = await this.component.locator(this.linkTextSelector).all();

        return Promise.all(linkTextLocators.map(linkText => linkText.innerText()));
    }
}