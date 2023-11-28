// DEFINIZIONE FUNZIONE CHE GENERA NUMERI CASUALI COMPRESI TRA 1 e 5
function randomNumber(){
    return Math.floor(Math.random() * 5 + 1);
}

// DEFINIZIONE FUNZIONE PER STABILIRE SE LA SOMMA DEI DUE NUMERI È PARI O DISPARI
function isOdd(number){
    return number % 2 === 0;
}    

// CHIEDERE ALL'UTENTE DI SCEGLIERE PARI O DISPARI
let OddorEven = prompt('Scegliere tra pari o dispari');

// VERIFICA DELL'UTENTE SE HA INSERITO UNA SCELTA VALIDA
if (OddorEven !== 'pari' && OddorEven !== 'dispari'){
    alert("Per favore, inserisci 'pari' o 'dispari'.");
}

// CHIEDERE ALL'UTENTE DI INSERIRE UN NUMERO DA 1 a 5
let UserNumber = parseInt(prompt("Inserire un numero da 1 a 5"));

console.log(OddorEven);
console.log(UserNumber);

// GENERARE UN NUMERO CASUALE PER IL COMPUTER
let ComputerNumber = randomNumber();

// CALCOLARE LA SOMMA DEI DUE NUMERI
let sum = UserNumber + ComputerNumber;

alert("La somma dei numeri è: " + sum);
console.log(sum);

// DETERMINARE SE LA SOMMA È PARI O DISPARI
let result; 
if (sum % 2 === 0) {
    result = 'pari';
}
else {
    result = 'dispari';
}

// MOSTRA IL VINCITORE
if(result === OddorEven) {
    alert("Complimenti, hai vinto! La somma è " + result + ".");
}
else {
    alert("Mi dispiace, hai perso. La somma è " + result + ".");
}
console.log(sum);
