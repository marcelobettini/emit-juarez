class Mechanic {
  constructor(type) {
    this.type = type;
  }
  repair(stuff) {
    console.log(`Especialista en ${this.type} arreglando ${stuff}`);
  }
}

const pedro = new Mechanic("mecánica automotor");
pedro.repair("VW Gol 1999");


const cocinero = {
  type: "comida rápida",
  cook(meal) {
    console.log(`Cocinero de ${this.type} preparando ${meal}...`);
  }
};

const person01 = {
  name: "Marcelo Bettini",
  role: "Developer",
  type: "fullstack",
  code(tech) {
    console.log(`Programando en ${tech}`);
  },
  teach(tech) {
    console.log(`Enseñando ${tech}`);
  }
};

Object.setPrototypeOf(person01, cocinero);
person01.cook("pancho con papitas y todos los aderezos");

cocinero.wash = function (utensilio) {
  console.log(`lavando ${utensilio}`);
};

person01.wash("ollas y sartenes");
console.log(person01.type);

const woman = { name: "Belinda" };
const nums = [3, 4, 5];//Array.prototype
const rightNow = new Date(); //Date.prototype
const twoSum = (a, b) => a + b; //Function.prototype

console.log(cocinero.isPrototypeOf(person01));