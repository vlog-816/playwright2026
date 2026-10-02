import { expect, Page } from "@playwright/test";
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

        await this.verifyInformationColumn(footerComp);
        await this.verifyCustomerServiceColumn(footerComp);
        //this.verifyMyAccountColumn();
        //this.verifyFollowUsColumn();
    }

    async verifyInformationColumn(footerComponent: FooterComponent) {

        const inforColumnComp = footerComponent.informationComp();
        const title = "INFORMATION";
        const linkTexts = ["Sitemap", "Shipping & Returns", "Privacy Notice", "Conditions of Use", "About us", "Contact us"];
        const hrefs = ['/sitemap', '/shipping-returns', '/privacy-policy', '/conditions-of-use', '/about-us', '/contactus'];

        await this.verifyFooterColumnComponent(inforColumnComp, title, linkTexts, hrefs);
    }

    async verifyCustomerServiceColumn(footerComponent: FooterComponent) {

        const csColumnComp = footerComponent.customerServiceComp();
        const title = "CUSTOMER SERVICE";
        const linkTexts = ["Search", "News", "Blog", "Recently viewed products", "Compare products list", "New products"];
        const hrefs = ['/search', '/news', '/blog', '/recentlyviewedproducts', '/compareproducts', '/newproducts'];

        await this.verifyFooterColumnComponent(csColumnComp, title, linkTexts, hrefs);
    }

    async verifyFooterColumnComponent(
        footerColumn: FooterColumnComponent,
        expectedTitle: string,
        expectedLinkTexts: string[],
        expectedHrefs: string[]) {

        const titleText = await footerColumn.getTitleText();
        const linkTexts = await footerColumn.getLinkTexts();
        const hrefs = await footerColumn.getHrefs();

        //logic....
        expect(titleText).toBe(expectedTitle);
        expect(linkTexts).toStrictEqual(expectedLinkTexts);
        expect(hrefs).toStrictEqual(expectedHrefs);

    }
}