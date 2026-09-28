import { Parents } from "./Parents.js";

export class Child extends Parents{

    callMyChild(){
        console.log(`I'm child, name: ${this.name}`);
        
    }
}