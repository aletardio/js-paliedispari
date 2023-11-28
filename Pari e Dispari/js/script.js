// DEFINIZIONE FUNZIONE CHE GENERA NUMERI CASUALI COMPRESI TRA 1 e 5
function randomNumber(){
    return Math.floor(Math.random() * 5 + 1);
}

// DEFINIZIONE FUNZIONE PER STABILIRE SE LA SOMMA DEI DUE NUMERI È PARI O DISPARI
function checkSum(num1, num2){

    let result = num1 + num2; 

    if (result % 2 == 0) {
        console.log('La somma è pari');
    }

    return console.log(result);
}    

// CHIEDERE ALL'UTENTE DI SCEGLIERE PARI O DISPARI
let OddorEven = prompt('Scegliere tra pari o dispari');
console.log(OddorEven);

// CHIEDERE ALL'UTNETE DI INSERIRE UN NUMERO DA 1 a 5
let UserNumber = parseInt(prompt("Inserire un numero da 1 a 5"));
console.log(UserNumber);
let cpu = randomNumber();
cosole.log(cpu); 

let sum = checkSum(UserNumber, cpu);
console.log(sum);
