const PI_NUMBER = 3.14

console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

console.log(typeof Infinity);
console.log(typeof null);

//Operator
let num1 = 4;
let num2 = 3;
let result = num1 + num2;
console.log('Total result: ' + result);
console.log('Total result:', result);
console.log(`Total result: ${result + 1}`); //String template/literal (using backstick `${}`)

//Forward slash
result = 7/4;
console.log(`5/2: ${result}`);
console.log(`10/3: ${10/3}`);

//Rounding
console.log(`None Rounding : ${result}`);
console.log(`Rounding nearest: ${Math.round(result)}`);
console.log(`Rounding Floor: ${Math.floor(result)}`);
console.log(`Rounding Ceil: ${Math.ceil(result)}`);
console.log(`in fixed : ${result.toFixed(4)}`);

console.log(`5 to the power of 2 : ${5**2}`);

//Comparable Operator > < >= <= == === != !==
// !: to revert a boolean value


//Ternary operator: isOnTime? "Let's talk" : "Write a letter..."

//&& ||
console.log("true && true: ", true && true); //true
console.log("true && false: ", true && false); //false
console.log("false && true: ", false && true); //false
console.log("false && false: ", false && false); //false

console.log("true || true: ", true || true); //true
console.log("true || false: ", true || false); //true
console.log("false || true: ", false || true); //true
console.log("false || false: ", false || false); //false