import { Page } from '@playwright/test';
import FooterComponent from "../components/global/footer/FooterComponent";
import ProductComponent from '../components/global/ProductComponent';
import BasePage from './BasePage';

export default class HomePage extends BasePage{

    constructor( page: Page) {
       super(page);
    }

    async productListComponents(): Promise<ProductComponent[]> {
        const listProductComponent = await this.page.locator(ProductComponent.PRODUCT_LOCATOR).all();
        return listProductComponent.map(locator => new ProductComponent(locator));
    }
}