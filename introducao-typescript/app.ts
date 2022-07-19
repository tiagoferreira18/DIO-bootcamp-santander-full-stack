// é possivel tipar a função assim evita erros no retorno da função 

function somarValoresNumericos(numero1: number, numero2: number): number{
    return numero1 + numero2;
}

console.log(somarValoresNumericos(1,3));


//  void é para rodar a função mais não esperar que ela devolva nada 
function printaValoresNumericos(numero1: number, numero2: number): void{
    console.log(numero1 + numero2);
    
}