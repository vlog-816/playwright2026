import { Ancestor } from "./Ancestor.js";

export class Parents extends Ancestor {
    constructor() {
        super('Parent', 70);
    }

    callMyName() {
        console.log("I'm parents");
    }

    callAncestor(){
        console.log("Ancestor static in parents");
        
    }
}