// CREAZIONE DI UNA FUNZIONE PER CAPIRE SE LA PAROLA INSERITA È PALINDROMA
function isPalindrome(word) {
    
    for(let i = 0; i<word.length; i++){
        console.log(word[i]);
    }

    return(word);
}

// CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA CON UN PROMPT
let UserWord = prompt('Inserisci una parola');
// STAMPA IN CONSOLE
console.log(UserWord.split('').reverse().join(''));