
//Faça um Programa que leia três números e mostre-os em ordem decrescente.

function menorNumero() {
    n1 = parseInt(prompt("Digite o primeiro número"));
    n2 = parseInt(prompt("Digite o segundo número"));
    n3 = parseInt(prompt("Digite o terceiro número"));
    
    if(n1 > n2) {
        aux = n1;
        n1 = n2;
        n2 = aux;
    }
    if(n2 > n3) {
        aux = n2;
        n2 = n3;
        n3 = aux;
    }
    if(n1 > n2) {
        aux = n1;
        n1 = n2;
        n2 = aux;
    }
    alert(" - " + n1 + " - " + n2 + " - " + n3);
    
}