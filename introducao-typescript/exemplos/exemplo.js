"use strict";
const button = document.getElementById('button');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
function adicionandoNumero(numero1, numero2, devePrintar, frase) {
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2;
}
let devePrintar = true;
let frase = `O valor é: `;
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            adicionandoNumero(Number(input1.value), Number(input2.value), devePrintar, frase);
        }
    });
}
