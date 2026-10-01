import { test } from '@playwright/test';
import FooterTestFlow from '../../modules/test-flow/global/FooterTestFlow';
import HeaderTestFlow from '../../modules/test-flow/global/HeaderTestFlow';

const PAGES = [
    { pageName: "HomePage", slug: "/" },
    { pageName: "Register", slug: "/register" },
    { pageName: "Login", slug: "/login" },
    { pageName: "Cart", slug: "/cart" },
    { pageName: "Wishlist", slug: "/wishlist" }
]

PAGES.forEach(page => {
    const { pageName, slug } = page;
    test(`Test Footer on ${pageName}`, async ({ page }) => {
        await page.goto(slug);
        const footerTestFlow = new FooterTestFlow(page);
        await footerTestFlow.verifyFooterComponent();
    })

        test(`Test Header on ${pageName}`, async ({ page }) => {
        await page.goto(slug);
        const footerTestFlow = new HeaderTestFlow(page);
        await footerTestFlow.verifyHeaderComponent();
    })
})