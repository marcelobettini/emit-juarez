function logger() {
  console.log("1- primer mensaje");
  setTimeout(() => console.log("2- segundo mensaje"), 0);
  prom().then(() => console.log("3- tercer mensaje"));
  console.log("4- cuarto mensaje");
}

function prom() {
  return Promise.resolve();
}

logger();

//ojo con esto... lo escribió Recursive Pennywise 🤡 y genera un stack overflow
function reventatodonegro() {
  return reventatodonegro();
}

reventatodonegro();
