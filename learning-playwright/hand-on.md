Day 26
- init @playwright
- configuaration
- stategy for selector

Day 27
- Tìm xpath trong console: $x("//tagname[function(text(),'string')]")
- page.waitForSelector("locator") : explicit wait | thời gian chờ 1 element - override for this element
- plawright.config.ts: {use: {actionTimeout: }} : implicitwait | thời gian chờ tất cả các element
- plawright.config.ts: timeout | thời gian chờ cho 1 test
- const element = page.locator("").filter({hasText: ''})
- element.nth(index).click()
- page.locator("").count() 

Day 28
- handle dropdown: const dropdownLocator = page.locator("dropdown")
        + index: dropDownLocator.selectOption({index: 1})
        + value: dropDownLocator.selectOption({value: '1'}) (attribute value)
        + label: dropDownLocator.selectOption({label: 'Option 1'}) (visible text)
- handle iframe: const myIframe = page.frameLocator("")
- handle mouse hover : await page.locator("").all()
                for ( elem of allElement){ const image = elem.locator("")
                                            const userName = elem.locator("") }

        + mouse hover: image.hover()
- dynamic controls: chờ element hiển thị/ không hiển thị
        + narrow-down searching scope: find all parent components
        + page.waitForSelector("", {state: 'hidden'})