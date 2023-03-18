export class Battery {
  private capacidad: number;
  private make: string;
  private model: string;
  public constructor(capacidad: number, make: string, model: string) {
    this.capacidad = capacidad;
    this.make = make;
    this.model = model;
  };
  public getInfo(): Battery {
    return this;
  }
}