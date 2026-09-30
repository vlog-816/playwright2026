import { Page } from "@playwright/test";
import FooterColumnComponent from "../../components/global/footer/FooterColumnComponent";
import FooterComponent from "../../components/global/footer/FooterComponent";
import BasePage from "../../pages/BasePage";

export default class FooterTestFlow {

    constructor(private page: Page) {
        this.page = page;
    }

    async verifyFooterComponent() {

        const basePage = new BasePage(this.page);
        const footerComp = basePage.footerComponent();

        this.verifyInformationColumn(footerComp);
        this.verifyCustomerServiceColumn(footerComp);
        //this.verifyMyAccountColumn();
        //this.verifyFollowUsColumn();
    }

    async verifyInformationColumn(footerComponent: FooterComponent) {

        const inforColumnComp = footerComponent.informationComp();
        const linkTexts = ["Sitemap", "Shipping & Returns", "Privacy Notice", "Conditions of Use", "About us", "Contact us"];
        const hrefs = ["/Sitemap", "/Shipping & Returns", "/Privacy Notice", "/Conditions of Use", "/About us", "/Contact us"];

        await this.verifyFooterColumnComponent(inforColumnComp, linkTexts, hrefs);
    }

    async verifyCustomerServiceColumn(footerComponent: FooterComponent) {

        const csColumnComp = footerComponent.customerServiceComp();
        const linkTexts = ["Sitemap", "Shipping & Returns", "Privacy Notice", "Conditions of Use", "About us", "Contact us"];
        const hrefs = ["/Sitemap", "/Shipping & Returns", "/Privacy Notice", "/Conditions of Use", "/About us", "/Contact us"];

        await this.verifyFooterColumnComponent(csColumnComp, linkTexts, hrefs);
    }

    async verifyFooterColumnComponent(footerColumn: FooterColumnComponent, expectedLinkTexts: string[], expectedHrefs: string[]) {
        const linkTexts = await footerColumn.getLinkTexts();
        //logic....
    }
}