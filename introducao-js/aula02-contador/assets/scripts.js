const currentNumberWrapper = document.getElementById('currentNumber')
const subtracao = document.querySelector('#increment')
const soma = document.querySelector('#decrement')


let currentNumber = 0;


/* Funcoes */

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
  
}

function incrementColor(){
    if(currentNumberWrapper.innerHTML > 0){
        currentNumberWrapper.classList.remove("vermelho")
        currentNumberWrapper.classList.add("azul")
   
    }else if(currentNumberWrapper.innerHTML == 0){
        currentNumberWrapper.classList.remove("vermelho")
        currentNumberWrapper.classList.remove("azul")
    }
}

function decrementColor(){
    if(currentNumberWrapper.innerHTML < 0){
        currentNumberWrapper.classList.remove("azul")
        currentNumberWrapper.classList.add("vermelho")
    }else if(currentNumberWrapper.innerHTML == 0){
        currentNumberWrapper.classList.remove("vermelho")
        currentNumberWrapper.classList.remove("azul")
    }
}


function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}


/* Eventos de click */

    subtracao.addEventListener('click', ()=>{
        increment()
        incrementColor()
                     
    })

   



soma.addEventListener('click', ()=>{
    decrement()
    decrementColor()
   
         
}) 





