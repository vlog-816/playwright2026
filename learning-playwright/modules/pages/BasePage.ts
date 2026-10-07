import { Page } from "@playwright/test";
import FooterComponent from "../components/global/footer/FooterComponent";
import HeaderComponent from "../components/global/header/HeaderComponent";

export default class BasePage {

    protected page: Page;
    private notificationSel = "#bar-notification";

    constructor(page: Page) {
        this.page = page;
    }

    headerComponent(): HeaderComponent {
        return new HeaderComponent(this.page.locator(HeaderComponent.HEADER_LOCATOR));
    }

    footerComponent(): FooterComponent {
        return new FooterComponent(this.page.locator(FooterComponent.FOOTER_LOCATOR));
    }

    async getNotificationText(): Promise<string> {
        return await this.page.locator(this.notificationSel).innerText();
    }

}