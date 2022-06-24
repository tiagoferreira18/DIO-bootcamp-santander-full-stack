/* Filtre e retorne todos os números pares de um array. */

function filtraPares(arr){
    return arr.filter(callback)
}

/* Verifica pares */
function callback(item){
    return item % 2 === 0;
}

/* verifica impares

function callback(item){
    return item % 2 !== 0;
}
*/

const array = [1, 23, 55 ,67 ,30 ,2 ,4];

console.log(filtraPares(array));