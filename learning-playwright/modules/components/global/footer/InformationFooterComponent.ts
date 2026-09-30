import { Locator } from "@playwright/test";
import FooterColumnComponent from "./FooterColumnComponent";

export default class InformationFooterComponent extends FooterColumnComponent {

    public static readonly LOCATOR = ".column.information";

    constructor(component: Locator) {
        super(component);
    }
}