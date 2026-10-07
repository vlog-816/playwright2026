type myType = {
    myName: string;
    age: number;
    phone: boolean;
    an?: string
}
const number = ""

let str = "This is a string"
const bool = true
const obj: myType = {
    myName: "An Truong",
    age: 18,
    phone: true
}

if (number && str && bool && obj.myName) {
    console.log(`1. number: ${number} | stirng: ${str} | bool: ${bool} | obj: ${JSON.stringify(obj)}`);
}

(number && str && bool && obj.myName) &&
    console.log(`2. number: ${number} | stirng: ${str} | bool: ${bool} | obj: ${JSON.stringify(obj.an)}`)

if (number !== null && number !== undefined) {
    console.log(`3. number: ${number}`);
}
if (number !== null) {
    console.log(`4. number: ${number}`);
}
if (number !== undefined) {
    console.log(`5. number: ${number}`);
}
if (number != null) {
    console.log(`6. number: ${number}`);
}