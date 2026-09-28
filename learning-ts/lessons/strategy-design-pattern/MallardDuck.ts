import Duck from "./Duck";
import FlyWithWings from "./FlyWIthWings";
import Quack from "./Quack";

export default class MallardDuck extends Duck {

    constructor() {
        super(new Quack(), new FlyWithWings())
    }

}