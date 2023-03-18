
enum Talle {
  xs = 1, s, m, l, xl, xxl
}

class Pantalon {
  private modelo: string = "";
  private material: string = "";
  private talle: Talle = Talle.s;  //xs, s, m, l, xl,   

  public setPantalon(modelo: string, material: string, talle: Talle): void {
    this.modelo = modelo;
    this.material = material;
    this.talle = talle;
  };
  private getTalle(talle: Talle): string {
    const talles = {
      1: "XS",
      2: "S",
      3: "M",
      4: "L",
      5: "XL",
      6: "XXL"
    };
    return talles[talle] || "desconocido";
  }

  public getPantalon(): string {

    //no piensen en modos óptimos, metan if o switch acá adentro
    return `
    Modelo:   ${this.modelo}
    Material: ${this.material}
    Talle:    ${this.getTalle(this.talle)}
    `;
  }
}


const panta1 = new Pantalon();
panta1.setPantalon("Bulldog", "nylon", Talle.xs);
console.log(panta1.getPantalon());
