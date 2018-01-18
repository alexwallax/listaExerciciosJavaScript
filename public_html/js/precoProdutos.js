//Faça um programa que pergunte o preço de três produtos e informe qual
// produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.

function precoProduto() {
    
    alert("Digite os preços dos produtos");
    pr01 = parseFloat(prompt("Digite o preço do 1º produto"));
    pr02 = parseFloat(prompt("Digite o preço do 2º produto"));
    pr03 = parseFloat(prompt("Digite o preço do 3º produto"));
    
    if(pr01 < pr02 && pr03 > pr01) {
        alert("Você deve comprar o 1º produto, ele é o mais barato: " + pr01 );
    } else if (pr02 < pr01 && pr03 > pr02 ) {
        alert("Você deve comprar o 2º produto, ele é o mais barato: " + pr02 );
    } else if(pr03 < pr01 && pr02 > pr03) {
        alert("Você deve comprar o 3º produto, ele é o mais barato: " + pr03 );
    }
    
}
