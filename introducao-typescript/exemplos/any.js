"use strict";
//Any é uma mal prática
// any é um tipo de variavel que pode receber qualquer tipo
let valorAny;
// Qualquer tipo de valor pode ser atribuido ao any 
valorAny = 3;
valorAny = 'olá';
valorAny = true;
// O Any pode ser qualquer valor de objetos inclusive uma string 
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'testão';
valorString2 = valorAny;
function somarStrings(string1, string2) {
    console.log(string1 + string2);
}
somarStrings(valorString, valorString2);
