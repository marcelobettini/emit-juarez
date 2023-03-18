/* interfases: Son contratos que las clases deben respetar. Los miembros datos son públicos por defecto. OJO: esto rompe el encapsulamiento. Podemos tener interfases sin props, sólo con métodos.
*/


interface ITvShow {
  readonly title: string; //la variable será final si usamos el access modifier readonly
  info(): string;
}
class Sitcom implements ITvShow {
  readonly title: string;
  private firstAired: Date;
  public constructor(title: string, firstAired: Date) {
    this.title = title;
    this.firstAired = firstAired;
  };
  private dateFormat(date: Date): string {
    return date.toLocaleDateString("es-AR");
    //`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  };
  info(): string {
    return `Title: ${this.title} - First Aired: ${this.dateFormat(this.firstAired)}`;
  }

}
const show01: Sitcom = new Sitcom("Southpark", new Date("12/23/1999")); //mm/dd/yyyy

console.log(show01.info());


/*
Podemos pensar en las clases abstractas como una anotación y, en cierto modo, como una lista de tareas. En la vida cotidiana solemos llevar registro de las citas o tareas pendientes pero no entramos en detalles finos sobre cómo realizarlas. Las anotamos para no olvidar nada importante y para no reinventar la rueda en la resolución de cada una de esas tareas. 

Estas clases abstractas funcionan como una clase que declara la existencia de métodos, más no su implementación. Eso lo haremos luego, a través de las clases derivadas. Una clase abstracta puede contener métodos no abstractos, pero al menos uno debe serlo.
*/

abstract class Vegetal {
  private nombre: string;
  private variedad: string;
  public constructor(nombre: string, variedad: string) {
    this.nombre = nombre;
    this.variedad = variedad;
  }
  public abstract getVegetal(): void;
}

class TomatePerita extends Vegetal {
  private precio: number;
  public constructor(precio: number) {
    super("Tomate", "Perita");
    this.precio = precio;
  };
  public setPrecio(precio: number) {
    this.precio = precio;
  }
  //overriding abstract method
  public getVegetal(): TomatePerita {
    return this;
  }
}

const prod01: TomatePerita = new TomatePerita(600);
console.log(prod01.getVegetal);
