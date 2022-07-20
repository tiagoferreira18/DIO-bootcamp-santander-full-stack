"use strict";
// any e unknow
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = '3';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'Vai sim';
let stringTest2 = 'agora vai';
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
// tipo never e comando throw
function jogaErro(erro, codigo) {
    throw { eroor: erro, code: codigo };
}
jogaErro('deu erro', 500);
