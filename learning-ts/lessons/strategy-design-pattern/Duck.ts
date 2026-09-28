import type {FlyBehavior} from "./FlyBehavior";
import type {QuackBehavior} from "./QuackBehavior";

export default class Duck {
    protected quackBehavior: QuackBehavior;
    protected flyBehavior: FlyBehavior;

    constructor(quackBehavior: QuackBehavior, flyBehavior: FlyBehavior) {
        this.quackBehavior = quackBehavior;
        this.flyBehavior = flyBehavior;
    }

    performQuack() {
        this.quackBehavior.quack();
    }

    performFly() {
        this.flyBehavior.fly();
    }

    setQuackBehavior(quackBehavior: QuackBehavior) {
        this.quackBehavior = quackBehavior;
    }

    setFlyBehavior(flyBehavior: FlyBehavior) {
        this.flyBehavior = flyBehavior;
    }
}