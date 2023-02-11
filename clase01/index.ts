const arraySum = require("array-sum");
const matrix: number[][] = new Array();
matrix.push([1, 3, 5], [2, 4, 6], [7, 9, 8]);

/*
Esta función tiene un desempeño muy pobre en términos de notación Big O. Este algortitmo tiene la peor nota en la escala de eficiencia. Se dice que es un algoritmo cuadrático. Big O Notation -> O(n2). Lo utilizamos solo con fines didácticos. Siempre que tengamos bucles anidados, debería sonar una alarma en nuestra cabeza... y buscar una forma más eficiente
*/
function matrixSum(mtx: number[][]): number {
  let accum: number = 0;
  for (let i = 0; i < mtx.length; i++) {
    for (let j = 0; j < mtx[i].length; j++) {
      accum += mtx[i][j];
    }
  }
  return accum;
}

/* Aquí vemos que podemos reutilizar la lógica de la función anterior para recorrer la matriz y luego, en vez de devolver una suma, devolvemos un arreglo de una dimensión, sobre el que podemos ejecutar el método reduce*/

function matrixFlat(mtx: number[][]): number[] {
  const flatArray: number[] = [];
  for (let i = 0; i < mtx.length; i++) {
    for (let j = 0; j < mtx[i].length; j++) {
      flatArray.push(mtx[i][j]);
    }
  }
  return flatArray;
}

/*Aunque logramos aplanar el arreglo, lo hicimos usando un algoritmo cuadrático, o sea... sigue siendo una mala solución. Afortunadamente podemos utilizar otro método de los array: flat()*/
const initValue: number = 0;
const result = matrix.flat();
const reducedNum = result.reduce(
  (accum: number, currValue: number) => accum + currValue,
  initValue
);
console.log(reducedNum);

console.log(
  matrix.flat().reduce((accum: number, curr: number) => accum + curr, 0)
);

/*Ahora lo haremos con un paquete o dependencia. En este caso usamos array-sum. La instalamos con npm i array-sum. Para usarla, declaramos una constante y le asignamos las funcionalidades de la dependencia instalada: const ArraySum = require("array-sum") */
console.log(arraySum(matrix.flat()));
