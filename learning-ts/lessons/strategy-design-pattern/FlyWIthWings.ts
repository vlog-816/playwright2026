import type {FlyBehavior} from "./FlyBehavior";

export default class FlyWithWings implements FlyBehavior {
    fly(): void {
        console.log("I'm flying...");
    }

}