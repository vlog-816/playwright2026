import { expect, Locator, Page } from '@playwright/test';
import { ComputerDataType } from '../../test-data/ComputerDataType';
import { ComputerDetailsPage } from '../../modules/pages/ComputerDetailsPage';
import ShoppingCartPage from '../../modules/pages/ShoppingCartPage';
import CartItemRowComponent from '../../modules/components/shopping-cart/CartItemRowComponent';
import CheckoutOptionPage from '../../modules/pages/CheckoutOptionPage';
import defaultCheckoutData from '../../test-data/DefaultCheckoutData.json';
import CheckoutPage from '../../modules/pages/CheckoutPage';
export default class OrderComputerTestFlow {

    private productPrice: number = 0;
    constructor(private page: Page, private computerData: ComputerDataType) {
        this.page = page;
        this.computerData = computerData
    }

    async buildAndAddToCart() {
        const computerDetailsPage = new ComputerDetailsPage(this.page);
        const { computerClass, processor, ram, hdd, os, software, quantity } = this.computerData
        console.log(this.computerData);

        const computerComp = computerDetailsPage.computerComponent(computerClass);
        await computerComp.unSelectAllOptions();

        const processorPrice = this.getAddionalPrice(await computerComp.selectProcessor(processor));
        const ramPrice = this.getAddionalPrice(await computerComp.selectRAM(ram));
        const hddPrice = this.getAddionalPrice(await computerComp.selectHDD(hdd));
        const softwarePrice = this.getAddionalPrice(await computerComp.selectSofware(software));

        let osPrice = 0;
        if (os !== undefined && os !== null) {
            osPrice = this.getAddionalPrice(await computerComp.selectOS(os));
        }

        if (quantity !== undefined && quantity !== null) {
            await computerComp.inputQuantity(quantity);
        }

        const basePrice = await computerComp.getBasePrice();
        const additionPrice = processorPrice + ramPrice + hddPrice + softwarePrice + osPrice;

        this.productPrice = (basePrice + additionPrice) * (quantity ? quantity : 1);

        console.log(`processor Price: ${processorPrice} | ramPrice: ${ramPrice} | hddPrice: ${hddPrice}
                    softwarePrice: ${softwarePrice} | osPrice: ${osPrice} | quanlity: ${quantity}
                    |basePrice:${basePrice} | additionPrice: ${additionPrice} | productPrice: ${this.productPrice}`);

        //Add to cart
        const requestSlug = await computerComp.clickOnAddToCart();
        await this.page.waitForResponse(requestSlug);

        //Navigate to Shopping cart page
        await computerDetailsPage.headerComponent().clickOnShoppingCart();
    }

    async verifyShoppingCart() {
        //cart row: price = productPrice, price*Qty = total
        const shoppingCartPage = new ShoppingCartPage(this.page);
        const cartItems: CartItemRowComponent[] = await shoppingCartPage.cartItemRowComponentList();

        expect(cartItems.length).toBeGreaterThan(0);

        let itemSubtotals = 0;
        for (const item of cartItems) {
            const itemPrice = await item.getPrice();
            const itemQuantity = await item.getQuantity();
            const itemSubtotal = await item.getSubtotal();

            expect(itemPrice * itemQuantity).toEqual(this.productPrice);
            expect(itemPrice * itemQuantity).toEqual(itemSubtotal);

            itemSubtotals += itemSubtotal;
        }

        //cart total: subtotal = total(row), total = subtotal + shipping + tax

        const cartTotal = shoppingCartPage.totalsComponent();
        const priceCategory = await cartTotal.priceCategory();
        console.log("Price category:", priceCategory);

        const subTotal = priceCategory['Sub-Total'];
        const shipping = priceCategory['Shipping'];
        const tax = priceCategory['Tax'];
        const total = priceCategory['Total'];

        expect(subTotal).toBe(itemSubtotals);
        expect(total).toBe(subTotal + shipping + tax);

    }

    async agreeTosAndCheckout() {
        const totalsComponent = new ShoppingCartPage(this.page).totalsComponent();
        await totalsComponent.clickTosCheckbox();
        await totalsComponent.clickCheckoutBtn();

        const checkoutOptionPage = new CheckoutOptionPage(this.page);
        await checkoutOptionPage.checkoutAsGuest();
    }

    async inputBillingAddress() {

        const { firstName, lastName, email, company, country, stateProvince, city, address1, address2,
            zipPostalCode, phoneNumber, faxNumber } = defaultCheckoutData;

        const billingAddrComp = new CheckoutPage(this.page).billingAddressComp();
        await billingAddrComp.inputFirstname(firstName);
        await billingAddrComp.inputLastname(lastName);
        await billingAddrComp.inputEmail(email);
        await billingAddrComp.inputCompany(company);
        await billingAddrComp.selectCountry(country);
        await billingAddrComp.selectStateProvince(stateProvince);
        await billingAddrComp.inputCity(city);
        await billingAddrComp.inputAddress1(address1);
        await billingAddrComp.inputAddress2(address2);
        await billingAddrComp.inputZip(zipPostalCode);
        await billingAddrComp.inputPhoneNumber(phoneNumber);
        await billingAddrComp.inputFax(faxNumber);
        await billingAddrComp.clickContinueBtn();

    }

    async inputShippingAddress() {
        const shippingAddressComp = new CheckoutPage(this.page).shippingAddressComp();
        await shippingAddressComp.clickOnContinueBtn();
    }

    async selectShippingMethod() {
        //ramdomly selector method
        const shippingMethodComp = new CheckoutPage(this.page).shippingMethodComp();
        const shippingMethodLocators: Locator[] = await shippingMethodComp.shippingMethodLocatorsList();
        const randomIndex = Math.floor(Math.random() * shippingMethodLocators.length);

        await shippingMethodLocators[randomIndex].click();

        const innerText = await shippingMethodLocators[randomIndex].innerText();
        const shippingFee = this.getAddionalPrice(innerText);

        console.log('shippingFee:', shippingFee);

        await shippingMethodComp.clickOnContinueBtn();

    }

    async selectPaymentMethod() {
        const paymentMethodComp = new CheckoutPage(this.page).paymentMethodComp();
        await paymentMethodComp.selectPaymentMethod();
        await paymentMethodComp.clickOnContinueBtn();
    }

    private getAddionalPrice(optionFullText: string): number {

        const regex = /\[\+(\d+(?:\.\d+)?)\]/;

        if (optionFullText === null) optionFullText = ""

        const matches = optionFullText.match(regex);

        if (matches) return Number(matches[1].trim())

        return 0;
    }
}