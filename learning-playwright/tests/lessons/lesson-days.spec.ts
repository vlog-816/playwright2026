import { test, expect } from '@playwright/test'
import { removeAllElements, scrollToBottom } from './lessonUtil';


test('Handle Remove/Add', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

    const checkboxComponent = page.locator("#checkbox-example");

    const checkboxLocator = checkboxComponent.locator("#checkbox input");
    const buttonLocator = checkboxComponent.locator("button");

    const isCheckboxChecked = await checkboxLocator.isChecked();
    if (!isCheckboxChecked) { await checkboxLocator.check() };

    await buttonLocator.click();
    await page.waitForSelector("#checkbox-example #loading", { state: 'hidden' });
    await page.waitForSelector("#checkbox-example #checkbox input", { state: 'hidden' });

    await buttonLocator.click();
    await page.waitForSelector("#checkbox-example #loading", { state: 'hidden' });
    await page.waitForSelector("#checkbox-example input#checkbox", { state: 'visible' });
})

test('Handle Enable/disable', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
    const inputComponent = page.locator("#input-example");
    const inputLocator = inputComponent.locator("input");
    const buttonLocator = inputComponent.locator("button");

    await buttonLocator.click();
    await page.waitForSelector("#input-example #loading", { state: 'hidden' });
    await expect(inputLocator).toBeEnabled();

    await buttonLocator.click();
    await page.waitForSelector("#input-example #loading", { state: 'hidden' });
    await expect(inputLocator).toBeDisabled();
})

test('Handle Floating menu', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/floating_menu');
    const menuComponent = page.locator('#menu');
    const homeLocator = menuComponent.locator("//a[contains(text(), 'Home')]");
    const newsLocator = menuComponent.locator("//a[contains(text(), 'News')]");
    const contactLocator = menuComponent.locator("//a[contains(text(), 'Contact')]");
    const aboutLocator = menuComponent.locator("//a[contains(text(), 'About')]");

    await scrollToBottom(page);

    await expect(homeLocator).toBeVisible();
    await expect(newsLocator).toBeVisible();
    await expect(contactLocator).toBeVisible();
    await expect(aboutLocator).toBeVisible();

    await removeAllElements(page, "#menu li");

})