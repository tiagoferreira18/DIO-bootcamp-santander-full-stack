const formulario = document.querySelector('form')
const button = formulario.querySelector('button')
const conteudo = formulario.querySelector('#tarefa')
const elemento = formulario.querySelector('.AdicionarElemento')
const label = formulario.querySelector('label')

button.addEventListener('click',(event)=>{
    event.preventDefault()
    let = nomeTarefa = conteudo.value;
    console.log(`${nomeTarefa}`);
    criarbox()
    conteudo.focus()
    formulario.reset()
   
})

function criarbox(){
       
    /*Criando elementos dinamicamente*/
    // 1) Criar elemento
    let box = document.createElement('label');

    // 2) Montar o conteúdo do elemento
    box.innerHTML = ` <br> <input type="checkbox" name="${tarefa}" id="${tarefa}">
    <label for="${tarefa}">${nomeTarefa}` // conteudo

    // 3)Adicionar a div de resultados
    elemento.appendChild(box);
    
}



    
