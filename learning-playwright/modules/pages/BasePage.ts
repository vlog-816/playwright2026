import { Page } from "@playwright/test";
import FooterComponent from "../components/global/footer/FooterComponent";
import HeaderComponent from "../components/global/header/HeaderComponent";

export default class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    footerComponent(): FooterComponent {
        return new FooterComponent(this.page.locator(FooterComponent.FOOTER_LOCATOR));
    }

    headerComponent(): HeaderComponent {
        return new HeaderComponent(this.page.locator(HeaderComponent.HEADER_LOCATOR));
    }

}