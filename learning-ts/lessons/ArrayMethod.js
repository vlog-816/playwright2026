let myArr = [1, 2, 3, 3, 3, 2, 4, 5];

//map
let afterMap = myArr.map(mapCondition);
function mapCondition(value, index, array) {
    return value * 10;
}

console.log("My array: ", myArr);
console.log("After map: ", afterMap)

//filter
let afterFilter = myArr.filter(filterCondition);
function filterCondition(value, index, array) {
    return value % 2 === 0;
}

console.log("My array: ", myArr);
console.log("After filter: ", afterFilter)

//forEach
let forEachArray = []
let afterForEach = myArr.forEach(forEachCondition);
function forEachCondition(value, index, array) {
    forEachArray.push(`Username_${value}`);
}

console.log("My array: ", myArr);
console.log("After forEach: ", afterForEach);
console.log("For Each array: ", forEachArray);

//sort
//-------string
let stringArray = ['A', 'b' , 'C', 'a', 'c']
stringArray.sort();
console.log("Sort a string:", stringArray)

stringArray.reverse()
console.log("Reverse a string:", stringArray)

//---------number
let numArray = [5, 2, 19, 9, 10, 100];
numArray.sort(acsendingCondition);
console.log("Sort acs:", numArray);

numArray.sort(desendingCondition);
console.log("Sort des:", numArray);

function acsendingCondition(num1, num2){
    return num1 - num2;
}

function desendingCondition(num1, num2){
    return num2 - num1;
}