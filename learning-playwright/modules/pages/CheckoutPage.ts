import BillingAddressComponent from "../components/checkout-page/BillingAddressComponent";
import ConfirmOrderComponent from "../components/checkout-page/ConfirmOrderComponent";
import PaymentInformationComponent from "../components/checkout-page/PaymentInformationComponent";
import PaymentMethodComponent from "../components/checkout-page/PaymentMethodComponent";
import ShippingAddressComponent from "../components/checkout-page/ShippingAddressComponent";
import ShippingMethodComponent from "../components/checkout-page/ShippingMethodComponent";
import BasePage from "./BasePage";

export default class CheckoutPage extends BasePage {

    billingAddressComp(): BillingAddressComponent {
        return new BillingAddressComponent(this.page.locator(BillingAddressComponent.LOCATOR))
    }

    shippingAddressComp(): ShippingAddressComponent {
        return new ShippingAddressComponent(this.page.locator(ShippingAddressComponent.LOCATOR))
    }

    shippingMethodComp(): ShippingMethodComponent {
        return new ShippingMethodComponent(this.page.locator(ShippingMethodComponent.LOCATOR))
    }

    paymentMethodComp(): PaymentMethodComponent {
        return new PaymentMethodComponent(this.page.locator(PaymentMethodComponent.LOCATOR))
    }

    paymentInformationComp(): PaymentInformationComponent {
        return new PaymentInformationComponent(this.page.locator(PaymentInformationComponent.LOCATOR))
    }

    confirmOrderComp(): ConfirmOrderComponent {
        return new ConfirmOrderComponent(this.page.locator(ConfirmOrderComponent.LOCATOR))
    }


}