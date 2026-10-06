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

- handle dropdown: const dropdownLocator = page.locator("dropdown") + index: dropDownLocator.selectOption({index: 1}) + value: dropDownLocator.selectOption({value: '1'}) (attribute value) + label: dropDownLocator.selectOption({label: 'Option 1'}) (visible text)
- handle iframe: const myIframe = page.frameLocator("")
- handle mouse hover : await page.locator("").all()
  for ( elem of allElement){ const image = elem.locator("")
  const userName = elem.locator("") }

        + mouse hover: image.hover()

- dynamic controls: chờ element hiển thị/ không hiển thị + narrow-down searching scope: find all parent components + page.waitForSelector("", {state: 'hidden'})

Day 29

- JSArlert
- Floating menu: evaluate(), binding param into evaluate()

Day 30

- POM: cách biến pape hoặc 1 phần của page thành class trong lập trình. Để dùng lại selector, method tương tác với element trên page, tránh lặp đi lặp lại. + Scope to declare selector + Constructor + Main interaction methods || return Locator ||
- structure: + models: + components: global, computer, checkoutPage + pages: LoginPage.ts, HomePage.ts, ComputerDetailsPage.ts, ShoppingCartPage.ts, ChechOutOptionPage.ts,... + types: + DataType.ts + ComputerDataType.ts + test-flow + component: OrderTestFlow.ts + global: FooterTestFlow.ts + tests + global + computer + test_data + Computer
- component models:
  1. component in a page: footer, header, sidebar
  2. List of components in page:
  3. Component in parent component
  4. List of Components in parent component
  5. Reusing BaseComponent

Day 31 2. List of components in page 3. 4. Component(s) in parent component 5. Reusing BaseComponent
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
  //logic

- FooterComponentTest:
  const footerTestFlow = new FooterTestFlow();
  footerTestFlow.verifyFooterComponent();

Day 32
Data Driven: 1 bộ data cần test cho nhiều page, || hoặc 1 page cần test nhiều bộ data
a concept to reuse/loop over a suite of test data for a test logic
Nếu trang được extend từ 1 layout -> dùng chiến lược random

dùng async-await: handle asynchronus 1. find Element -> 2. interact with Element
.locator() .click()

Context: 1 element (RAM) nằm ở nhiều component, lúc thì là lựa chọn radio button, lúc là lựa chọn select dropdown
Resolve: abstract class: có method abstract selectRAM(). => các class con sẽ force viết select này theo cách của riêng nó
abstract extends parent BaseComputer class: để reuse logic của getTitle, price, ...

Day 33
generic type: có 1 page chứa 1 component. Component có nhiều kiểu component: Cheap, Standard, Expensive,....
nên cần tạo method return về kiểu Generic
computerCom<T extends ComputerEssentialComponent>(): T
anotation

Day 34

- Tạo OrderComputerFlow, tạo kiểu type riêng bằng interface, tạo data test cho CheapComputerComponent, StandardComputerComponent,...
- OrderComputerFlow{
  constructor(page, computerData)
  //logic of this controller...
  buidAndAddToCart()
  }
- interface ComputerDataType{
  loginCreds?: {username: string, password: string},
  computerCompClass: ComputerComponentConstructor<ComputerEssentialComponent>,
  processorType: string,
  ram: string,
  ....
  }

- tạo data cho CheapComputerData
  const cheapComputerData: ComputerDataType = {
  computerCompClass: CheapComputerComponent,
  processorType: "Fast",
  ram: "8 GB",
  ....
  }

Day 35

- quantity, inputQuantity, addToCart
- totalPrice = (basePrice + additionPrice) \* quantity
- chờ khi request add to cart status 200 : page.waitForRequest(urlSlug)
- Header
- click on Cart
- CartItemRowComponent : [], TotalsComponent

Day 36

- CartItemRowComponent: getPrice, getQty, getSubTotal
- TotalsComponent: acceptTos(), priceCategories(), clickOnCheckoutBtn()
- OrderComputerFlow:
  verifyShoppingCart()
  //logic...
  verifyung all item rows: expect length > 0, expect (price*+*qty) = subtotal
  verifying totals component: expect subTotal, expect total
  agreeTosAndCheckout()
  //logic...
  acceptTos
  clickOnChoutBtn
  clickOnCheckOutAsGuestBtn
  inputBillingAddress()
  //logic....
  Json {default checkout data} : import defaultCheckouData from...

-BillingAddressComponent:
inputFirstname(), inputLastname(), inputEmail(), ...

- CheckoutPage: billingAddressComponent(), shippingAddressComponent(), ShippingMethodComponent(), paymentMethodComponent(), paymentInformationComponent(), confirmOrderComponent()
- Test.spec.ts:
  buildComputerAndAddToCart()
  verifyShoppingCart()
  agreeTosAndCheckout()

Day 37

- OrderComputerFlow:
  //logic...
  ClickContinueBtn()
  selectShippingMethod(){logic...: randomly select, get text, get shippinig fee }
  selectPaymentMethod()
  inputPaymentInformation(): card info using in developer.payment => DefaultCheckoutCard.json
  confirmOrder():
- ShippingAddressComponent: ClickContinueBtn()
- ShippingMethod: getAllShippingMethodLocs()
- PaymentMethod: chọn payment method sẽ ảnh hưởng đến payment information phía sau. HARD CODE now: Credit Card
- PaymentMethodInformation:
  selectCreditCart()
  inputCardHolder()
  ...
- ConfirmationOrder:
  getDetailsItem(...)
  getPrice(...)

Day 38

- Data: tạo array[{object}] cho data CheapComputerDataType
        đưa 1 trigger vào data nếu muốn bỏ qua hay làm 1 cái gì đó
  Test: cheapData.foreach(arrow function (test(...//method()...)))
- Structure: tạo 1 file Test riêng cho case validation required fields
        buildComputerSelection(): viết lại logic để chọn các field là option => nếu là required field thì sẽ đưa vào data empty, và check rỗng
- handle:
