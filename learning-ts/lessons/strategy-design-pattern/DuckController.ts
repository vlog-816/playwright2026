import Duck from "./Duck";

export default class DuckCOntroller {

    static performQuack(duck: Duck) {
        duck.performQuack();
    }

    static performFly(duck: Duck) {
        duck.performFly();
    }
}