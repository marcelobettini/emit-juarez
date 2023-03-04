import { Engine } from "./engine";
import { Tyre } from "./tyre";
import { Vehicle } from "./vehicle";

const myEngine = new Engine("Puma 3.2");
const myTyres: Tyre[] = [new Tyre(17), new Tyre(17)];
const myBike = new Vehicle("Twingo", "Casio", myEngine, myTyres);
console.log(myBike);
