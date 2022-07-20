// any e unknow

let anyEstaDeVolta: any;

anyEstaDeVolta = 3;
anyEstaDeVolta = '3';
anyEstaDeVolta = 5;

let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'Vai sim';

let stringTest2: string = 'agora vai';


if(typeof unknownValor === 'string'){
    stringTest2 = unknownValor;
}

// tipo never e comando throw

function jogaErro(erro: string, codigo: number): never{
    throw{eroor: erro, code: codigo}
}

jogaErro('deu erro', 500)