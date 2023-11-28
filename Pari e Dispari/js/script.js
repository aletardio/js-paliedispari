// DEFINIZIONE FUNZIONE CHE GENERA NUMERI CASUALI COMPRESI TRA 1 e 5
function randomNumber(){
    return Math.floor(Math.random() * 5 + 1);
}

// DEFINIZIONE FUNZIONE PER STABILIRE SE LA SOMMA DEI DUE NUMERI È PARI O DISPARI
function isOddorEven(number){

    if(number % 2 === 0) {
        return 'pari';
    }
    else {
        return 'dispari';
    }
}    

// CHIEDERE ALL'UTENTE DI SCEGLIERE PARI O DISPARI
let odd_or_even = prompt('Scegliere tra pari o dispari');

// VERIFICA DELL'UTENTE SE HA INSERITO UNA SCELTA VALIDA
if (odd_or_even !== 'pari' && odd_or_even !== 'dispari'){
    alert("Per favore, inserisci 'pari' o 'dispari'.");
}

// CHIEDERE ALL'UTENTE DI INSERIRE UN NUMERO DA 1 a 5
let userNumber = parseInt(prompt("Inserire un numero da 1 a 5"));

console.log(odd_or_even);
console.log(userNumber);

// GENERARE UN NUMERO CASUALE PER IL COMPUTER
let computerNumber = randomNumber();

// CALCOLARE LA SOMMA DEI DUE NUMERI
let sum = userNumber + computerNumber;

alert("La somma dei numeri è: " + sum);
console.log(sum);

// DETERMINARE SE LA SOMMA È PARI O DISPARI
let result = isOdd(sum); 

// MOSTRA IL VINCITORE

if(result === odd_or_even) {
    alert("Complimenti, hai vinto! La somma è " + result + ".");
}
else {
    alert("Mi dispiace, hai perso. La somma è " + result + ".");
}
console.log(sum);
