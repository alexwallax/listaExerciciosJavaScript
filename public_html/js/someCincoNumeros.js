

function somaNumeros() {
   /* 
    n1 = parseInt(prompt("Digite o 1º número"));
    n2 = parseInt(prompt("Digite o 2º número"));
    n3 = parseInt(prompt("Digite o 3º número"));
    n4 = parseInt(prompt("Digite o 4º número"));
    n5 = parseInt(prompt("Digite o 5º número"));
    
    soma = n1 + n2 + n3 + n4 + n5;
    alert("A soma dos 5 números é " + soma);
    
    */
    s = 0;
    for(var a = 0; a < 5 ; a++) {
        n = parseInt(prompt("Digite o "+ (a+1) +"º número"));
        s += n;  
    }
    alert("a soma é " + s);
}

