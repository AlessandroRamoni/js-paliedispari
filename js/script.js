console.log("Mercoledì");

////////////////////// PALINDROMA

const word = prompt("Inserisci la prima parola che ti viene in mente");
console.log(word);

const parolaInvertita = reverseWord(word);
console.log(parolaInvertita);

if (parolaInvertita === word) {
  console.log("La parola è palindroma");
} else {
  console.log("La parola non è palindroma");
}

function reverseWord(text) {
  const parolaAlContrario = text.split("").reverse().join("");
  return parolaAlContrario;
}

/////////////////// PARI E DISPARI

const container = document.querySelector(".container");
const titolo = document.createElement("h1");
container.append(titolo);

const scelta = prompt("Scegli: pari o dispari?");
console.log(scelta);

const sceltaNumero = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(sceltaNumero);
const numeroCpu = getRandomNumber(1, 5);
console.log(numeroCpu);
const pariDispari = isSumOddOrEven(sceltaNumero, numeroCpu);
console.log(pariDispari);

if (scelta === pariDispari) {
  titolo.append("Hai vinto");
  titolo.style.color = "green";
} else {
  titolo.append("Hai perso");
  titolo.style.color = "red";
}

//////// funzione numero random
function getRandomNumber(min, max) {
  let range = max - min + 1;
  let random = Math.floor(Math.random() * range) + min;
  return random;
}

/////// funzione somma pari/dispari
function isSumOddOrEven(number1, number2) {
  let sum = number1 + number2;
  console.log(sum);

  return sum % 2 === 0 ? "pari" : "dispari";

  /*
  if (sum % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
  */
}
