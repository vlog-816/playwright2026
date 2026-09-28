import DecoyDuck from "./DecoyDuck";
import DuckCOntroller from "./DuckController";
import MallardDuck from "./MallardDuck";
import Quack from "./Quack";


let decoyDuck = new DecoyDuck();
let mallardDuck = new MallardDuck();

DuckCOntroller.performQuack(decoyDuck);
DuckCOntroller.performQuack(mallardDuck);

decoyDuck.setQuackBehavior(new Quack());
DuckCOntroller.performQuack(decoyDuck);