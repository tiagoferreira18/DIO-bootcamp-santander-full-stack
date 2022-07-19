const pessoa = {
    nome: "Mariana",
    idade: 20,
    profissao: 'desenvolvedora'
}

// Se tentar trocar a idade passando como string '21' não permitira, valida o tipo também dentro dos objetos.

pessoa.idade = 21;

//Objeto com a tipagem iniciada, deve seguir o tipo na declaração dos valores
const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Desenvolvedor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedor'
}


//enum grupo de constantes
enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    JogadorDeFutebol
}


//Criado a interface para definir os tipos apenas uma unica vez
interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao // ? deixa a propriedade não obrigatoria
}

interface Estudante extends Pessoa{
    materias: string[]
}

const vanessa: Pessoa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Atriz

}

const maria: Pessoa = {
    nome: "Maria",
    idade: 23,
    profissao: Profissao.Atriz

}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 29,
    profissao: Profissao.JogadorDeFutebol,
    materias: ['Português', 'Matemática', 'Ed.Fisica']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 29,
    materias: ['Português', 'Matemática', 'Ed.Fisica']
}

function listar(lista: string[]){
    for(const item of lista){
        console.log('- ', item);
        
    }
}
listar(monica.materias)