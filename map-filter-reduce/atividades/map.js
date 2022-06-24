/* Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele. */


/* COM THIS */
const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

const nums = [1, 2];


function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
       return item * this.value;
    }, thisArg);
}

console.log('this -> maçã', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));



/* -------SEM O THIS--------- */
console.log(`-------SEM O THIS--------`);

function mapSemThis(arr){
    return arr.map(function (item){
        return item * 2;
    });
}

const numbers = [2, 4, 6, 8, 10];


console.log(`Array inalterado ${numbers} `);

console.log("Saida do MAP sem o This ", mapSemThis(numbers));