import type {FlyBehavior} from "./FlyBehavior";

export default class FlyNoWay implements FlyBehavior {
    fly(): void {
        console.log("I cannot fly.");
    }

}