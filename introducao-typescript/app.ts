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
stringTest2 = unknownValor;

if(typeof unknownValor === 'string'){
    stringTest2 = unknownValor;
}