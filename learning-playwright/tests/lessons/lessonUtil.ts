import { Page } from "@playwright/test";

export async function scrollToBottom(page: Page): Promise<void> {
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    })
}

export async function removeAllElements(page: Page, locator: string): Promise < void> {
    await page.evaluate( (locator) => {
        const elements = document.querySelectorAll(locator);
        elements.forEach(elem => elem.remove());
    }, locator)
}