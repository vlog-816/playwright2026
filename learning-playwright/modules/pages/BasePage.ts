import { Page } from "@playwright/test";
import FooterComponent from "../components/global/footer/FooterComponent";

export default class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    footerComponent(): FooterComponent {
        return new FooterComponent(this.page.locator(FooterComponent.FOOTER_LOCATOR));
    }
}