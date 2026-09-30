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

Day 29
- JSArlert
- Floating menu: evaluate(), binding param into evaluate()

Day 30
- POM: cách biến pape hoặc 1 phần của page thành class trong lập trình. Để dùng lại selector, method tương tác với element trên page, tránh lặp đi lặp lại.
        + Scope to declare selector
        + Constructor
        + Main interaction methods || return Locator ||
- structure:
        + models:
                + components
                + pages: LoginPage.ts, HomePage.ts
        + types:
                + DataType.ts
        + test-flow
                + component
                + global: FooterTestFlow.ts
        + tests
- component models:
    1. component in a page: footer, header, sidebar
    2. List of components in page: 
    3. Component in parent component
    4. List of Components in parent component
    5. Reusing BaseComponent

Day 31
2. List of components in page
3. 4. Component(s) in parent component
5. Reusing BaseComponent
   parent class: không có locator để tìm kiếm nó, chỉ chứa các attribute, method chung để class con reuse
   child class: chỉ định locator để tìm kiếm nó, không chứa thêm attribute, method

BasePage: chứa các component chung, từ khóa extends dùng để reuse logic. Chứa component, không chứa các element (trừ vài case)
test-flow: middle layer 
== module, page: tìm kiếm selector, thiết kế POM | controller (test-flow) | test ==
- FooterTestFlow: logic cho việc test FooterComponent |>> InformationColumn >> CustimerServiceColumn >> ...FooterColumnComponen
        verifyFooterComponent(){
                this.verifyInfoColumn();
                this.verifyServiceColumn();
                this.verifyAccountColumn();
                this.verifyAboutColumn();
        }



- FooterComponentTest:
        const footerTestFlow = new FooterTestFlow();
        footerTestFlow.verifyFooterComponent();