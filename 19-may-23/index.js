"use strict";
const numbersArr = [-3, -10, 0, 2, 4, 5, 6, 9, 37];

/**
 *
 * @param {*} numbers arreglo de nums
 * @param {*} fn callback
 * @returns lista de nums determinada por el callback
 */
function filter(numbers, fn) {
  const result = [];
  for (const number of numbers) {
    if (fn(number)) result.push(number);
  }
  return result;
}

/**
 *
 * @param {*} number un número
 * @returns Boolean
 */
function isOdd(number) {
  return number % 2 !== 0;
}
function isEven(number) {
  return number % 2 === 0;
}

const oddNumbers = filter(numbersArr, isOdd);
const evenNumbers = filter(numbersArr, isEven);
console.log(oddNumbers);
console.log(evenNumbers);

/**
 *
 * @param {*} url
 * @param {*} success callback para todo ok
 * @param {*} failure  callback para se fue a la mier...
 */
function download(url, cb) {
  setTimeout(() => {
    console.log(`\nDescargada imagen: ${url}`);
    cb(url);
  }, 2000);
}

function process(image) {
  console.log(`\nProcesada imagen: ${image}`);
}
const url_1 = "http://servidor/img001.jpg";
const url_2 = "http://servidor/img002.jpg";
const url_3 = "http://servidor/img003.jpg";

//pyramid of doom, callback hell
download(url_1, url => {
  console.log(`Procesando ${url}`);
  download(url_2, url => {
    console.log(`Procesando ${url}`);
    download(url_3, url => {
      console.log(`Procesando ${url}`);
    });
  });
});

function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
