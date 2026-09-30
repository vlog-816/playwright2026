import { test } from '@playwright/test';
import FooterTestFlow from '../../modules/test-flow/global/FooterTestFlow';

test('Footer Test', async ({ page }) => {
    const footerTestFlow = new FooterTestFlow(page);
    footerTestFlow.verifyFooterComponent();
})