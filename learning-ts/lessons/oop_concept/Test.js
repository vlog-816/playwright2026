import { Child } from "./Child.js";

let myChildVar = new Child();

console.log(myChildVar.age);
console.log(myChildVar.name);
myChildVar.callMyName()
myChildVar.callMyAge()
myChildVar.callMyChild()
myChildVar.callAncestor();
