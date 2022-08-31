console.log("Mercoledì");

////////////////////// PALINDROMA

/*
const word = prompt("Inserisci la prima parola che ti viene in mente");
console.log(word);

const parolaInvertita = reverseWord(word);
console.log(parolaInvertita);

if (parolaInvertita === word) {
  console.log("La parola è palindroma");
} else {
  console.log("La parola non è palindroma");
}

function reverseWord(word) {
  const parolaAlContrario = word.split("").reverse().join("");
  return parolaAlContrario;
}
*/
/////////////////// PARI E DISPARI

/*
if (scelta == "pari") {
  const pari = "pari";
} else if (scelta == "dispari") {
  const dispari = "dispari";
} else {
  console.log("errore");
}
*/
const scelta = prompt("Scegli: pari o dispari?");
console.log(scelta);

const sceltaNumero = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(sceltaNumero);
const numeroCpu = Math.floor(Math.random() * 5) + 1;
console.log(numeroCpu);
const somma = sceltaNumero + numeroCpu;
console.log(somma);

let pariDispari;

if (somma % 2 === 0) {
  pariDispari = "pari";
} else {
  pariDispari = "dispari";
}
console.log(pariDispari);

if (scelta === pariDispari) {
  console.log("Hai vinto");
} else {
  console.log("Hai perso");
}
