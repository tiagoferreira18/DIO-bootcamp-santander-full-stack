/* Crie uma função que recebe um array e um número
Realize as seguintes validações

Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError

Se o array não for do tipo 'object', lance um erro do tipo TypeError

Se o número não for do tipo 'number', lance um erro do tipo TypeError

Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError

Utilize a declaração try...catch

Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof */




function validaArr(arr, number){
    try {
        if(!arr && !number) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object' ) throw new TypeError('O Array precisa ser do tipo objeto');

        if(typeof number !== 'number') throw new TypeError('O numero precisa ser do tipo number')

        if(arr.length !== number) throw new RangeError('Tamanho inválido');
        return arr;
    } catch (e) {
        if(e instanceof ReferenceError){
            console.log("Este erro é um referenceError");
            console.log(e.message);
            // console.log(e.name);
            // console.log(e.stack);
        } else if(e instanceof TypeError){
            console.log("Este erro é um TypeError");
            console.log(e.message);
            // console.log(e.name);
            // console.log(e.stack);
        } else if(e instanceof RangeError){
            console.log("Este erro é um RangeError");
            console.log(e.message);
            // console.log(e.name);
            // console.log(e.stack);
        }else{
            console.log("Tipo de erro não esperado?" + e);
        }
    }
} 
console.log(validaArr());
console.log("-------------");

console.log(validaArr(5, 5));
console.log("-------------");

console.log(validaArr([], '5'));
console.log("-------------");

console.log(validaArr([], 5));
console.log("-------------");

console.log(validaArr([1, 2, 3, 4, 5], 5));