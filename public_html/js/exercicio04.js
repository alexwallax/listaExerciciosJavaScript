function exercicio04() {
    
//    Supondo que a população de um país A seja da ordem de 80000 
//    habitantes com uma taxa anual de crescimento de 3% e que a 
//    população de B seja 200000 habitantes com uma taxa de 
//    crescimento de 1.5%. Faça um programa que calcule e escreva
//    o número de anos necessários para que a população do país 
//    A ultrapasse ou iguale a população do país B, mantidas as 
//    taxas de crescimento.

//Altere o programa anterior permitindo ao usuário informar as 
//populações e as taxas de crescimento iniciais. Valide a entrada 
//e permita repetir a operação.
    
    var populacaoA = parseInt(prompt("Informe a população de A"));
    var txA = parseFloat(prompt("Informe a taxa de A"));
    var populacaoB = parseInt(prompt("Informe a população de B"));
    var txB = parseFloat(prompt("Informe a taxa de B"));    
    
    txA *= 100;
    txB *= 100;
    
    var i = 0;
    while (populacaoA < populacaoB) {
        populacaoA += populacaoA * txA;
        populacaoB += populacaoB * txB;
        i++; 
    }
    alert("Passaram " + i + " Anos");

    
    
//    for(var i = 0; i < 10000; i++) {
//        populacaoA += populacaoA * txA;
//        populacaoB += populacaoB * txB;
//        if(populacaoA >= populacaoB) {
//            alert("Quantidade de anos e " + i);
//            break;
//        }            
//    }
}


function exemploWhile() {
    resposta = "nao";
    while (resposta != "sim") {
        resposta = prompt("Eu sou bonito?");
    }
    alert("Parabens! Você é uma pessoa inteligente!")
}


