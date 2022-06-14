/* Palindromo são frase que de trás para frente tem o mesmo significado exemplo OMO, AMA, ARARA */

//solução 1
//split() está separando as letras da frase e guardando como array.
//reverse() está revertendo a ordem
//join está juntando novamente os caracteres do array

function verificaPalindromo(string){
    if (!string) return "String inexistente";

   return string.split("").reverse().join("") === string;
}
console.log(verificaPalindromo(""));

//solucao 2
// omo
function verificaPalindromo2(string){
    if(!string) return "String inexistente";

    for(let i = 0; i< string.length / 2; i++){
       if(string[i] !== string[string.length - 1 - i]) {
        return false;
       }
       
    }
    return true;
}

console.log(verificaPalindromo2("omo"));