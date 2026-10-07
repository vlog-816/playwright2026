import { Locator } from "@playwright/test";

export default class BillingAddressComponent {

    public static readonly LOCATOR = "#opc-billing";
    private firstNameSel = "#BillingNewAddress_FirstName";
    private lastNameSel = "#BillingNewAddress_LastName";
    private emailSel = "#BillingNewAddress_Email";
    private companySel = "#BillingNewAddress_Company";
    private countryDropdown = "#BillingNewAddress_CountryId";
    private stateProvinceDropdown = "#BillingNewAddress_StateProvinceId";
    private citySel = "#BillingNewAddress_City";
    private address1Sel = "#BillingNewAddress_Address1";
    private address2Sel = "#BillingNewAddress_Address2";
    private zipPostalCodeSel = "#BillingNewAddress_ZipPostalCode";
    private phoneNumberSel = "#BillingNewAddress_PhoneNumber";
    private faxNumberSel = "#BillingNewAddress_FaxNumber";
    private continueBtnSel = "input[onclick='Billing.save()']";

    constructor(private component: Locator) {
        this.component = component;
    }

    async inputFirstname(value: string): Promise<void> {
        await this.component.locator(this.firstNameSel).fill(value)
    }

    async inputLastname(value: string): Promise<void> {
        await this.component.locator(this.lastNameSel).fill(value)
    }

    async inputEmail(value: string): Promise<void> {
        await this.component.locator(this.emailSel).fill(value)
    }

    async inputCompany(value: string): Promise<void> {
        await this.component.locator(this.companySel).fill(value)
    }

    async selectCountry(value: string): Promise<void> {
        await this.component.locator(this.countryDropdown).selectOption({ label: value });
    }

    async selectStateProvince(value: string): Promise<void> {
        await this.component.locator(this.stateProvinceDropdown).selectOption({ label: value });
    }

    async inputCity(value: string): Promise<void> {
        await this.component.locator(this.citySel).fill(value)
    }

    async inputAddress1(value: string): Promise<void> {
        await this.component.locator(this.address1Sel).fill(value)
    }

    async inputAddress2(value: string): Promise<void> {
        await this.component.locator(this.address2Sel).fill(value)
    }

    async inputZip(value: string): Promise<void> {
        await this.component.locator(this.zipPostalCodeSel).fill(value)
    }

    async inputPhoneNumber(value: string): Promise<void> {
        await this.component.locator(this.phoneNumberSel).fill(value)
    }

    async inputFax(value: string): Promise<void> {
        await this.component.locator(this.faxNumberSel).fill(value)
    }

    async clickContinueBtn(): Promise<string> {
        await this.component.locator(this.continueBtnSel).click();
        return `**/OpcSaveBilling/**`
    }

}