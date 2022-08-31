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

let opzione = true;
console.log(typeof opzione);

if (opzione === true) {
  const scelta = parseInt(prompt("Inserisci un numero da 1 a 5"));
  console.log(scelta);
  const numeroCpu = Math.floor(Math.random() * 5) + 1;
  console.log(numeroCpu);
  const somma = scelta + numeroCpu;
  console.log(somma);
  if (somma % 2 === 0) {
  }
} else {
}
