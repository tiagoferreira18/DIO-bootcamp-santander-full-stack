/* Atividade Alunos aprovados

1 Crie uma função que receba o array alunos e um numero que irá representar a média final.

2 Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais a médiafinal.

3 Utilize a técnica "Object destructuring" para manipular as propriedades desejadas de cada aluno.
*/


/* Array Alunos */
const alunos = [
    {
        nome: "Jose",
        nota: 7,
        turma: "3A"
    },
    {
        nome: "Julia",
        nota: 6,
        turma: "2B"
    },
    {
        nome: "Juca",
        nota: 3,
        turma: "2B"
    },
    {
        nome: "Paulo",
        nota: 9,
        turma: "3C"
    }
]


/* Funcão para verificar a média */
function alunosAprovados(arr, media){

    /* Array que recebera os alunops filtrados do array principal */
    let aprovados = [];

    /* For para precorrer os indices do array alunos */
    for(let i = 0; i < arr.length; i++){

        const {nota, nome} = arr[i]; //Object destructuring

        /* If para adicionar no array aprovados o nome dos alunos */
        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));