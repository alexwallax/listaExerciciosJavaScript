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



function exemplowhile() {
//Faça um programa que peça uma nota, entre zero e dez. 
//Mostre uma mensagem caso o valor seja inválido e 
//continue pedindo até que o usuário informe um valor válido.
    var nota;
    do {
        nota = parseFloat(prompt("digite a nota"));
    } while (nota < 0 || nota > 10 || isNaN(nota))
    {
    }
    alert(nota);
}




function exemplowhile02() {
//Faça um programa que leia um nome de usuário e a 
//sua senha e não aceite a senha igual ao nome do usuário, 
//mostrando uma mensagem de erro e voltando a pedir as informações.   
    var nome, senha;

    do {
        nome = prompt("Digite seu nome");
        senha = prompt("Digite sua senha");
        if (nome == senha) {
            alert("nome e senha tem que ser diferentes");
        }
    } while (nome == senha);
    document.write()("nome e senha diferentes");
}



function exemplowhile03() {
//Faça um programa que leia e valide as seguintes informações:
//Nome: maior que 3 caracteres;
//Idade: entre 0 e 150;
//Salário: maior que zero;
//Sexo: 'f' ou 'm';
//Estado Civil: 's', 'c', 'v', 'd';
    nome = prompt("Digite seu nome");
    while (nome.length <= 3 || !isNaN(nome)){
        nome = prompt("Digite seu nome de novo");
    }
    idade = parseInt(prompt("Digite sua idade"));
    while (idade < 0 || idade > 150) {
        idade = prompt("Idade invalida, tem que ser uma idade maior que zero e menor que 150");
    }
    salario = parseFloat(prompt("Digite seu salario"));
    while (salario < 0) {
        salario = prompt("Salario nao pode ser menor que zero");
    }
    
    var sexo;
    do  {
         sexo = prompt("Digite o sexo - m ou f");
    }
    while (sexo != "m" && sexo != "f") {    
    }
    if(sexo == "m") {
        sexo = "Masculino";
    } else {
        sexo = "Feminino";
    }
    
    estadoCivil = prompt("Digite o estado civil - s/c/v/d");
    while (estadoCivil != "s" && estadoCivil != "c" && estadoCivil != "v" && estadoCivil != "d") {
        estadoCivil = prompt("Estado civil invalido");
    }
    if(estadoCivil == "c") {
        estadoCivil = "Casado";
    } else if(estadoCivil == "s") {
        estadoCivil = "Solteiro";
    } else if(estadoCivil == "v") {
        estadoCivil = "Viuvo";
    } else if(estadoCivil == "d") {
        estadoCivil = "Divorciado";
    }
    
    document.write("Nome " +nome + "<br> Idade " + idade + " anos <br> Salario " + salario.toFixed(2) + "<br> Sexo " + sexo + "<br> Estado civil " + estadoCivil);
  
    
    
}

