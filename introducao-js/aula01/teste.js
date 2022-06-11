/* Para executar no console digite node +nome do arquivo */

// sintaxe
function soma(a, b){
    return a+b;
}

console.log(soma(15,10));



/* Função para retornar apenas numeros pares */
function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }else{
            console.log(`O numero ${array[i]} é impar`);
        }
    }
    console.log(`Os numeros pares são ${evenNums}`);
}
let array = [1, 2, 4, 5, 7, 8];
returnEvenValues(array);