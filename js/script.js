console.log("Mercoledì");

const word = prompt("Inserisci la prima parola che ti viene in mente");
console.log(word);

var parolaInvertita = reverseWord(word);
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
