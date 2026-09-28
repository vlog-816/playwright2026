//DRY: don't repeat yourself - Single Responsibility: Tính đơn nhiệm
//Declare a function

//Method 01: [Function Declaration] method | hoisting

let returnedValue = functionName();

function functionName() {

    return 1;

    //unreacheable statement
}

//Method 02: [Function Expression] method | NO hoisting

//console.log(addNumber(4, 5)); -- unhoisting

const addNumber = function (firstNum, secondNum) {
    return firstNum + secondNum
}
console.log("addnumber function:", addNumber(4, 5));

console.log("my Var:", myVar);
var myVar = 1;
console.log("my Var:", myVar);

//console.log(myLet); -- unhoisting
let myLet = 5;
console.log("my Let:", myLet);


//function return 
let toBeChanged = 1;

let returnChangeValue = changeValue();
console.log("Value after changed:", toBeChanged);
console.log("returnChangeValue type:", returnChangeValue);
console.log("typeof returnChangeValue:", typeof returnChangeValue);

function changeValue() {
    toBeChanged++;
}