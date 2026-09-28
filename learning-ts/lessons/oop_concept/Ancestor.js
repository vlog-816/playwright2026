export class Ancestor {
    constructor(name, age = 102, method = {}) {
        this.name = name;
        this.age = age;
        this.method = method
    }

    callMyName() {
        console.log(`Hello ${this.name} `);

    }

    callMyAge() {
        console.log(`My age: ${this.age}`);
    }

    static callAncestor(){
        console.log("Ancestor static");
        
    }
}