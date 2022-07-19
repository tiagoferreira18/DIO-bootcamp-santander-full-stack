//Any é uma mal prática

// any é um tipo de variavel que pode receber qualquer tipo
let valorAny: any;

// Qualquer tipo de valor pode ser atribuido ao any 
valorAny = 3;
valorAny = 'olá';
valorAny = true;

// O Any pode ser qualquer valor de objetos inclusive uma string 
let valorString: string = 'teste'
valorString = valorAny;

let valorString2: string = 'testão'
valorString2 = valorAny

function somarStrings(string1: string, string2: string){
    console.log(string1 + string2);
    
}

somarStrings(valorString, valorString2)