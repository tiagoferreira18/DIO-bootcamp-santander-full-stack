"use strict";
// é possivel tipar a função assim evita erros no retorno da função 
/* function somarValoresNumericos(numero1: number, numero2: number): number{
    return numero1 + numero2;
}

console.log(somarValoresNumericos(1,3));
 */
//  void é para rodar a função mais não esperar que ela devolva nada 
function printaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
/* Callback */
function somarValoresNumericosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
