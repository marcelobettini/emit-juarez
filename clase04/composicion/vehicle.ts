import { Engine } from "./engine";
import { Tyre } from "./tyre";
export class Vehicle {
  private make: string;
  private model: string;
  private engine: Engine;
  private tyres: Tyre[];
  public constructor(make: string, model: string, engine: Engine, tyres: Tyre[]) {
    this.make = make;
    this.model = model;
    this.engine = engine;
    this.tyres = tyres;
  }
  public getVehicle(): void {
    console.log(this.make, this.model, this.engine, this.tyres);
  }
}