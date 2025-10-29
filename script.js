// 1) Crea una funzione che somma due numeri
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// function somma (a, b){
//    return a + b
// }
// console.log(somma(4, 4))

//Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// const somma = function (a, b) {
//   return a + b;
// };
// console.log(somma(3, 6));

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
const somma = (a, b) => a + b;
console.log(somma(3, 5));

// 2 Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga

const quadrato = (a) => a * a;
console.log(quadrato(5));

// 3) Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const moltiplica = (a, b) => a * b;
function eseguiOperazione(a, b, operazione) {
  return operazione(a, b);
}
console.log(eseguiOperazione(2, 5, moltiplica));

// 4) Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
function creaTimer(tempo) {
  return function () {
    setTimeout(() => {
      console.log("Tempo scaduto!");
    }, tempo);
  };
}
creaTimer(3000)();

// 5) Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

function stampaOgniSecondo(messaggio) {
  let count = 0;
  const interval = setInterval(() => {
    count++;
    console.log(messaggio);
    if (count === 10) {
      clearInterval(interval);
      console.log("stop!");
    }
  }, 1000);
}
stampaOgniSecondo("stampa ogni secondo");
