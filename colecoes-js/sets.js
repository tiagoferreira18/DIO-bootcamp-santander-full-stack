/* Atividade Set */

/* dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos. */

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet]; // usar spread para retornar em formato de array, caso contrario retornara em SET
}
console.log(valoresUnicos(meuArray));