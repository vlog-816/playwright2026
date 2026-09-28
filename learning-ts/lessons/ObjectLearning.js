//1. ------------------
let teo = {
    name: "Teo",
    age: 18,
    "my-gender": "M"
}

//READ
const objName = teo.name;
const objGender = teo["my-gender"];

console.log(teo, objName, objGender);

//----object destructuring
const { name, age, ["my-gender"]: gender } = teo
console.log(name, age, gender);

//----function destructuring
function callMyName({ name }) {
    console.log("My name is: ", name);
}
callMyName(teo);

//UPDATE
teo.name = "Ti";
callMyName(teo);

//DELETE
delete teo.age;
console.log(teo);

//2. --------------- Object  reference, nested object

const tom = {
    name: "Tom",
    age: 18,
    bankAccounts: {
        checking: {
            accountNumber: "123",
            id: "001"
        },
        saving: {
            accountNumber: "321"
        }
    }
}

//COPY object: using shallow coppy (handle for nested obj as well , function in object cannot clone)

const tun = JSON.parse(JSON.stringify(tom));
tun.name = "Tun";
tun.bankAccounts.checking.accountNumber = "9999";

console.log(tom);
console.log(tun);

//GET keys, value
console.log("=====================================")
console.log(Object.keys(tom));
console.log(Object.values(tom));
console.log(Object.entries(tom));
console.log(Object.keys(tom.bankAccounts));
console.log(Object.values(tom.bankAccounts));