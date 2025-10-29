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
const somma = (a, b) => a + b
console.log(somma(3,5))


// 2 Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga

const quadrato = (a) => a*a
console.log(quadrato(5))