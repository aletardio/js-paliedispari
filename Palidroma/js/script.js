// CREAZIONE DI UNA FUNZIONE PER CAPIRE SE LA PAROLA INSERITA È PALINDROMA
function isPalindrome(word) {
    
    let reversed = word.split('').reverse().join('');

    if (reversed == word) {
        alert('La parola inserita è palindroma')
    }
    else {
        alert('La parola inserita non è palindroma')
    }
}

// CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA CON UN PROMPT
let userWord = prompt('Inserisci una parola');
// STAMPA IN CONSOLE
console.log(userWord);