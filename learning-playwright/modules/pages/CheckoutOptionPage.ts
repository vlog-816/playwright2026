import { Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class CheckoutOptionPage extends BasePage {

    private checkoutAsGuestSelector = "input[class*=checkout-as-guest-button]";

    async checkoutAsGuest(): Promise<void> {
        await this.page.locator(this.checkoutAsGuestSelector).click();
    }

}