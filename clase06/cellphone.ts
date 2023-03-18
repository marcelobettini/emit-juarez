import { SimCard } from "./simcard";
import { Battery } from "./battery";
export class CellPhone {
  private make: string;
  private model: string;
  private simcard: SimCard[];
  private battery: Battery;
  public constructor(make: string, model: string, battery: Battery) {
    this.make = make;
    this.model = model;
    this.battery = battery;
    this.simcard = [];
  };
  public getInfo(): CellPhone {
    return this;
  };
  public setSimCard(SIM: SimCard) {
    this.simcard.push(SIM);
  }


}