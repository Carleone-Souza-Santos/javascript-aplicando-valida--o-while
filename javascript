

var primeiroV = prompt("Digite o prrimeiro Valor");                           // recolhendo a informação do prompt para variavel primeiroV
var operacao  = prompt("informe o sinal para a sua operação  +  -  /  * ");   // recohendo atraves da variavel o sinal.
var segundoV  = prompt("Digite o Segundo Valor");                             // recolhendo a informação do prompt para variavel segundoV



primeiroV=parseInt(primeiroV); //  transformando string em number int.
segundoV=parseInt(segundoV);   //  transformando string em number int.

while( operacao !='-' && operacao !='+' && operacao  !='*' && operacao !='/' ){  // validando os sinal com um loop while....
alert('Por favor aplique um sinal valido!')  
    operacao = prompt("Informe o sinal da sua operação corretamente +  -  /  * "); 
}

var resultadoF = 0;                                   //variavel resultadoF number para receber primeiroV e segundoV

if(operacao=='-'){

    resultadoF = primeiroV - segundoV;               // resultadoF recebe Subtração.
}
else if(operacao=='+'){

    resultadoF = primeiroV + segundoV;               // resultadoF recebe Soma.
}
else if(operacao=='*'){

   resultadoF = primeiroV * segundoV;                // resultadoF recebe multiplicação.

}else if(operacao=='/'){

   resultadoF = primeiroV / segundoV;                 // resultadoF recebe Divisão.
}

alert('O resultado final é : ' + resultadoF + ' Pçs' ); // apresenta o resultado através dde um alert. 