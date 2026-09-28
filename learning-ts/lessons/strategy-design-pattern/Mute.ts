import type {QuackBehavior} from "./QuackBehavior";

export default class Mute implements QuackBehavior{

    quack(): void {
        // Mute ducks do not make a sound.
        console.log("I'm Mute !!!!");
        
    }
    
}