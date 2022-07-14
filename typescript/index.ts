// Função de soma em typescript não precisa fazer validação com typeof
/* function soma(a: number, b: number){
    return a + b;
}

console.log(soma(10, 5));
 */

//types
//interfaces

/* interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    // executarRugido(alturaEmDecibeis: number): void;
    domestico: boolean;
}
 */

/* type IAnimal = {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: number): void;
} */

/* interface IFelinos extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelinos | ICanino;

 */


/* const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
    visaoNoturna: true,
    // executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
} */

// animal.executarRugido(3);

/* const felino: IFelinos = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    domestico: true,
    
} */


//---------------TRATANDO A TAG INPUT-----------------

/* const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event)=>{
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
}); */


//----------------GENERIC TYPES----------------------

/* function adicionaApendiceALista<T>(array: T[], valor: T){
    return array.map(() =>  valor)
}

adicionaApendiceALista([1, 2, 3], 1); */



//-------------CONDICIONAIS A PARTIR DE PARAMETROS----

/* interface IUsuario{
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redireciona(usuario: IUsuario | IAdmin){
    if ('cargo' in usuario){
        // redireciona para a area de administração
    }
        // redireciona para area de usuario
} */


//----------uTILIZANDO ? PARA VARIAVEIS OPCIONAIS

/* interface IUsuario{
    id: string;
    email: string;
    cargo?: 'padrao' | 'gerente' | 'coordenador' | 'supervisor';
}

function redireciona(usuario: IUsuario){
   if(usuario.cargo){
    //Redireciona(usuario.cargo);
   }
   // redireciona para area do usuario
}

 */



//-----Criando variáveis com propriedade readonly e private

interface Cachorro{
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

/* const meuCachorro: Cachorro = {
    nome: 'Apolo',
    idade: 14,

} */

type CachorroSomenteLeitura = {
    +readonly [k in keyof Cachorro]-?: Cachorro[k];
}

class MeuCachorro implements CachorroSomenteLeitura{
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 13);
cao.idade = 8;

console.log(cao);
