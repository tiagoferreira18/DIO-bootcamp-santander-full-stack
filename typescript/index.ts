// Função de soma em typescript não precisa fazer validação com typeof
function soma(a: number, b: number){
    return a + b;
}

console.log(soma(10, 5));


//types
//interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelinos extends IAnimal{
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

animal.executarRugido(3);

const felino: IFelinos = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    
}