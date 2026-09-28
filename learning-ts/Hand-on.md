1. string
2. number (- infinity , infinity)
3. boolean
4. bigint
5. undefined
6. null
7. symbol
8. object (Object, Array, Date)

//Variable - re-assign is acceptable
let number;
number = 5;

let num = 2;
num = 5;

//Constant - not allow to re-assign
const PI_NUMBER = 3.14

//Cheatsheet
Copy: Alt + Shift + down arrow
Move: Alt + up/down arrow
Format: Alt + Shift + F

//Day 5
ArrayMethod: declare, array.splice, array.filter(function), array.map(function), forEach(function), sort(function), reverse()

//Day 7
Object learning: CRUD an object, nested object

//Day 8
MapLearning: CRUD

//Day 10
StringLearning: methods
.substring(startIndex, endIndex ) cut a string into substring
.split() | do not change the original string

AsynchronousProgram

//Day 11
PromiseWrapper
async function and await

//Day 9, 12

//Day 13
OOP:
_name: maximum call stack size exceeded

//Day 14
constructor: only 1 constructor in a class. Declare properties in constructor
lab_day07

//Day 15
lab07

//Day 16
There are 3 ways to declare a function

1.Type: Function Declaration
function add(a, b){}

2. Type: Function Expression
   const add = function(a, b){}

3. Type: Arrow function
   const arrowAdd = (a, b) => {}
   const arrowAdd = () => () | return only one statement

Object Literal
Lexical binding
const person = {
name: 'John',
age: 18
delay:function() { settimeout(()=>{}), 2000 }
}

- Method overloading in JS : does not support, but we can use rest parameters
function add(...nums){}

-OOP principles
    + Inheritance: reuse concept, design concept (is-a relationship). Có 1 class sẽ dùng lại các property, method của 1 class khác.

//Day 17
OOP concept:
- static belong to class level -> it not have inheritance/override . class function không thể overriding lên được. Nó dùng thông qua class chứ không phải thông qua khởi tạo object
- truy cập class variable: JS có thể truy cập thông qua Class.variable

Using typescript for 3 others concept

Day 18
OOP with design concept: is-a relationship
   - TS: property is crucial. Các thuộc tính sẽ được define bên ngoài, khai báo private/public
   - JS: các property đặt trong constructor(){}

Day 19
Abstraction is a mechanism that we hide the details implenetation and show only the functionality
- abstract: only the keyword is used to strong force is-a relationship
oop-login-page: problem

Day 20
- Review OOP: pillars/Concepts - Design
- Encapsulation: Hạm chế, Kiểm soát quyền truy cập cho các thuộc tính và phương thức trong 1 class. Dev sẽ luôn controll tính đúng đắn của dữ liệu
- Access modifier/phạm vi truy cập: private, protected, public

Day 21 
- Design a immutable object | READ only
- Design a mutable object | WRITE only
- 23 design patterns
   - Context -> Behavior 
- Ứng dụng Encapsulation: Builder Design Patterns 
      object: Data model - many properties + values variants + immutable
      inner class: class chỉ có ý nghĩa trong class đó | public static Builder = class {} 
      inner class sẽ chứa private variable là cái outter class | private house : HouseWithBuilder

Day 22
- Bài tap

Day 23
- Polymorphism : khả năng 1 object có thể thya đổi type/instance từ loại này sang loại khác
- has-a relationship
- Object composition: thiết kế class chứa object/ instance của 1 class/objeect khác. class Car has a Engine.
   Electric Engine, GasEngine is a Engine. Engine is a interface, has method start()
   Context: có 1 cái Page, Page có nhiều loại: HomePage, DetailPage,.... Không quan tâm có bao nhiêu loại, chỉ quan tâm nó phải playVideo(), playSlide(). Controller: giữ page: Page và có method playVideo(){page.playVideo()}

Day 24
- has-a relationshop: không bắt buộc family phải implement interface
- Design object composition: cần có interface, Duck, Controller
- Controller: tạo method có input đầu vào là parent Class, list, ... và xử lý logic
- class Duck: has attributes is a interface - FlyBehavior, QuackBehavior. 
              contructor(interface) - tạo object cụ thể
              method: performQuack(){this.quackBehavior.quack()}, performFly(){this.flyBehavior.fly()}
- interface: QuackBehavior, FlyBehavior
             method: quack(), fly()

- implements interface: FlyWithWings, FlyNoWay, Mute, Squeak, Quack
- extends Duck: MallardDuck, DecoyDuck
- DuckController: performQuack(duck: Duck){duck.performQuack()}

Day 25
Errors: liên quan đến phần cứng, giới hạn của máy tính. VD: tràn bộ nhớ - OutOfMemory, StackOverFlow. Khi có lỗi sẽ không catch được
Exceptions: Check exception. VD: Input,OutPutException & uncheck exception: VD lỗi toán học chia cho 0 - NullPointer, Arithmetic
try-catch: catch (error: any){throw new Error() } hoặc {do nothing}
Custome error handling: class AppError extends Error
   nơi quăng lỗi: try
   nơi chụp lỗi: catch
   nơi dùng: controller

Day 26
- Giao thức/ Protocol dành cho web: WebDriver protocol (gồm client, browser driver, browser), Devtool Protocol (client, browser)
- Playwright: dùng devtool protocol