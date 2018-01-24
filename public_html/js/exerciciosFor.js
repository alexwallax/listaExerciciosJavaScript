

function exercicioFor01() {
//Faça um programa que peça uma nota, entre zero e dez. 
//Mostre uma mensagem caso o valor seja inválido e continue 
//pedindo até que o usuário informe um valor válido.

    for (var i = 0; i < 10; i++) {
        n1 = parseInt(prompt("Digite um número de 0 a 10"));
        if (n1 == 7) {
            alert("Você acertou");
            break;
        } else if (n1 > 10) {
            alert("Número invalido");
        } else {
            alert("Você errou tente novamente");
        }
    }
}


function exercicioFor02() {
//Faça um programa que leia um nome de usuário e a sua senha e 
//não aceite a senha igual ao nome do usuário, mostrando uma 
//mensagem de erro e voltando a pedir as informações.    

    for (i = 1; i < 5; i++) {
        nome = prompt("Digite seu nome");
        senha = prompt("Digite sua senha");
        if (nome != senha) {
            alert("Acesso autorizado");
            break;
        } else {
            alert("Acesso negado");
        }
    }
}


function exercicioFor03() {
//Faça um programa que leia e valide as seguintes informações:
//Nome: maior que 3 caracteres;
//Idade: entre 0 e 150;
//Salário: maior que zero;
//Sexo: 'f' ou 'm';
//Estado Civil: 's', 'c', 'v', 'd';    

    for (i = 1; i < 2; i++) {

        for (a = 1; a < 50; a++) {
            nome = prompt("digite seu nome");
            if (nome.length > 3) {
                break;
            } else {
                alert("Nome invalido");
            }
        }

        for (a = 1; a < 50; a++) {
            idade = parseInt(prompt("Digite sua idade"));
            if (idade > 0 && idade < 150) {
                break;
            } else {
                alert("Idade invalida tente denovo");
            }
        }

        for (a = 1; a < 50; a++) {
            salario = parseFloat(prompt("Digite seu salario"));
            if (salario > 0) {
                break;
            } else {
                alert("Salario não pode ser zero ou menos");
            }
        }

        for (a = 1; a < 50; a++) {
            sexo = prompt("Digite o sexo m/f");
            if (sexo.toUpperCase() === "M") {
                sexo = "Masculino";
                break;
            } else if (sexo.toUpperCase() === "F") {
                sexo = "Feminino";
                break;
            } else {
                alert("Sexo invalido digite m/f");
            }

        }

        for (a = 1; a < 50; a++) {
            estado = prompt("Estado civil - s / c / v / d");
            if (estado.toUpperCase() === "S") {
                estado = "Solteiro(a)";
                break;
            } else if (estado.toUpperCase() === "C") {
                estado = "Casado(a)";
                break;
            } else if (estado.toUpperCase() === "V") {
                estado = "Viuvo(a)";
                break;
            } else if (estado.toUpperCase() === "D") {
                estado = "Divorciado(a)";
                break;
            } else {
                alert("Opção invalida tente denovo ");
            }
        }

        alert("Bem vindo cadastro feito com sucesso");
        alert("Nome " + nome + "\n Idade " + idade + " anos \n Salario " + salario.toFixed(2) + "\n Sexo " + sexo + "\n Estsdo cívil " + estado);
    }
}


function exemploFor06() {
//Faça um programa que imprima na tela os números de 1 a 20, 
//um abaixo do outro. Depois modifique o programa para que 
//ele mostre os números um ao lado do outro.
    for (var i = 1; i <= 20; i++) {
        document.write(" - " + i);
    }
}


function exemploFor07() {
//Faça um programa que leia 5 números e informe o maior número.
    var maior;
    for (var i = 0; i < 5; i++) {
        numero = parseFloat(prompt("Digite um número"));
        if (numero > maior || i == 0) {
            maior = numero;
        }
    }
    document.write(maior);
}


function mediaFor08() {
//Faça um programa que leia 5 números e 
//informe a soma e a média dos números.      
    var soma = 0;
    for (i = 0; i < 5; i++) {
        numero = parseFloat(prompt("Digite o numero " + i));
        soma += numero;
    }
    var media = soma / 5;
    document.write("Soma " + soma + "<br>");
    document.write("Media " + media);
}


function exemploFor09() {
//Faça um programa que imprima na tela apenas os 
//números ímpares entre 1 e 50.

    for (i = 0; i <= 50; i++) {

        if ((i % 2) != 0) {
            document.write("<br>" + i);
        }
    }
}


function exemploFor10() {
//Faça um programa que receba dois números inteiros e 
//gere os números inteiros que estão no intervalo compreendido por eles.    
    var inicio = parseInt(prompt("valor inicial"));
    var fim = parseInt(prompt("valor final"));
    var soma = 0;
    for (i = inicio; i <= fim; i++) {
        document.write(i + "<br>");
        soma += i;
    }
    document.write(soma);
}


function exemploFor() {
//1 1 2 3 5 8 13   (fibronasse) 
    var n = parseInt(prompt("Informe o n-ésimo termo"));
    var atual = 1, anterior = 1;
    for (var i = 0; i < n; i++) {
        if (i == 0) {
            document.write(anterior + "<br>");
            document.write(atual + "<br>");
        } else {
            document.write(atual + "<br>")
        }
        var aux = atual;
        atual = anterior + atual;
        anterior = aux;
    }
}



function vetores() {
//    var notas = new Array(10, 2, 3, 5, 1, 2);
//
//    for(var i = 0; i < notas.length; i++) {
//        alert(notas[i]);       
//   }
    var ademir = {nome: "Admemir", idade: 30, sexo: "m", altura: 1.80};

    alert(ademir["idade"]);
    alert(ademir.length); // o length mostra a quantidade de elementos do vetor  
}

function vetores02() {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            var texto = prompt("Digite");
            document.write(texto + "  ");
        }
        document.write("<br>");
    }
}


function vetores() {
    var notas = new Array();
    notas[0] = 3;
    notas[2] = 5;
    notas[1] = 2;
    notas[4] = 25;
    notas[3] = 10;
    for (var i = 0; i < notas.length; i++) {
        alert(notas[i]);

    }
}


//Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.
function exercicioVetores01() {

    var n = new Array();

    for (i = 0; i < 5; i++) {
        n[i] = Number(prompt("Digite os números"));
        document.write(n[i] + "<br>");
    }
}


//Faça um Programa que leia um vetor de 10 números 
//reais e mostre-os na ordem inversa.
function exercicioVetores02() {

    var n = new Array(10);

    for (i = 0; i < 10; i++) {
        n[i] = Number(prompt("Digite os números"));
            for () {
                document.write(n[i] + "<br>");

            }
        }


    }

}
























