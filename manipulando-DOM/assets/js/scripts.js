const pagina = document.querySelector('body');
const botao = document.querySelector('button');
const title = document.querySelector('h1');
const rodape = document.querySelector('footer');
const modeDark = 'dark-mode'

/* Callback button */
botao.addEventListener('click', changeMode)


function changeMode(){
    pagina.classList.toggle(modeDark);
    rodape.classList.toggle(modeDark);
    botao.classList.toggle(modeDark)
    changeText()
    
}

function changeText(){
    const lightMode = "Light Mode"
    const darkMode = "Dark Mode"
    if(pagina.classList.contains(modeDark)){
        botao.innerHTML = lightMode;
        title.innerHTML = darkMode + "ON";
        return;
    }
    botao.innerHTML = darkMode;
    title.innerHTML = lightMode + "ON";

}




