function numbers(a,b){
   if(!a || !b) return `Defina dois numeros`
    return(console.log( 
        (a === b) ? `Os numeros a e b são igual.` : `Os numeros a e b são diferentes.` , 
        (a+b > 10 && a+b < 20) ? `sua soma é ${a+b}, que é maior ou igual 10 e menor ou igual 20` : `Sua soma é ${a+b}, que é menor que 10 ou maior que 20` )
        )
}

console.log(numbers(8,8));