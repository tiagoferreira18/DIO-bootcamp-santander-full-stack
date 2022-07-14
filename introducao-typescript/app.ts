const button = document.getElementById('button')
const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;

function adicionandoNumero(numero1: number, numero2: number){
    return numero1 + numero2
}

if(button){
    button.addEventListener('click', ()=>{
        if(input1 && input2){
            adicionandoNumero(Number(input1.value), Number(input2.value))
        }
    })
}
