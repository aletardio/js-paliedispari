// CREAZIONE DI UNA FUNZIONE PER CAPIRE SE LA PAROLA INSERITA È PALINDROMA
function isPalindrome(word) {
    // CREO LA PAROLA INVERSA DI QUELLA INSERITA
    let reversed = word.split('').reverse().join('');
    // VERIFICARE CHE SIA UGUALE A QUELLA INSERITA
    // 1° MODO: senza return, eseguo delle visualizzazioni tramite alert o in pagina con iniezione di codice html
    if (reversed == word) {
        alert('La parola inserita è palindroma')
    }
    else {
        alert('La parola inserita non è palindroma')
    }
    // 2° MODO: con il return, devo restituire qualcosa
    // if (reversed == word) {
    //     return true;
    // }
    //     return false;
}

// CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA CON UN PROMPT
let userWord = prompt('Inserisci una parola');
// 1° MODO: vedi sopra
isPalindrome(userWord);

// 2° MODO: devo assegnare la chiamata della funzione a qualcuno/qualcosa
// let check_pal = isPalindrome(userWord);

// if (check_pal) {
//     alert('La parola inserita è palindroma');
// }
// else {
//     alert('La parola inserita non è palindroma');
// }