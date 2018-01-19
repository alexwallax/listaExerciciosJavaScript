
//Faça um programa que peça uma nota, entre zero e dez. 
//Mostre uma mensagem caso o valor seja inválido e continue 
//pedindo até que o usuário informe um valor válido.

//function exercicio01() {
//    
//    for(var i = 0; i < 10; i++) {
//        n1 = parseInt(prompt("Digite um número de 0 a 10"));
//        if(n1 == 7) {
//            alert("Você acertou");
//            break;
//        } else if(n1 > 10) {
//            alert("Número invalido");
//        } else {
//            alert("Você errou tente novamente");
//        }
//    }  
//}

//Faça um programa que leia um nome de usuário e a sua senha e 
//não aceite a senha igual ao nome do usuário, mostrando uma 
//mensagem de erro e voltando a pedir as informações.

//function exercicio02() {
//    
//    for(i = 1; i < 5; i++){
//        nome = prompt("Digite seu nome");
//        senha = prompt("Digite sua senha");
//        if(nome != senha) {
//            alert("Acesso autorizado");
//            break;
//        } else {
//            alert("Acesso negado");
//        }
//    } 
//    
//}

//Faça um programa que leia e valide as seguintes informações:
//Nome: maior que 3 caracteres;
//Idade: entre 0 e 150;
//Salário: maior que zero;
//Sexo: 'f' ou 'm';
//Estado Civil: 's', 'c', 'v', 'd';

function exercicio03() {
    
    for(i = 1; i < 2; i++) {
        
        for(a = 1; a < 50; a++) {
        nome = prompt("digite seu nome");       
            if(nome.length > 3) {              
                break;
            }           
            else {
                alert("Nome invalido");
            }      
        }
        
        for(a = 1; a < 50; a++) {
        idade = parseInt(prompt("Digite sua idade"));
            if(idade > 0 && idade < 150) {
                break;
            } else {
                alert("Idade invalida tente denovo");
            }
        }
        
        for(a = 1; a < 50; a++) {
        salario = parseFloat(prompt("Digite seu salario"));
            if(salario > 0) {
                break; 
            } else {
                alert("Salario não pode ser zero ou menos");
            }
        }
        
        for(a = 1; a < 50; a++) {
        sexo = prompt("Digite o sexo m/f");
            if(sexo === "m" || sexo === "M") {
                sexo = "Masculino";
                break;
            } else if (sexo === "f" || sexo === "F") {
                sexo = "Feminino";
                break;
            } else {
                alert("Sexo invalido digite m/f");
            }
        
        }
        
        for(a = 1; a < 50; a++) {
        estado = prompt("Estado civil - s / c / v / d");
            if(estado === "s" || estado === "S") {
                estado = "Solteiro(a)";
            break;
        } else if(estado === "c" || estado === "C") {
                estado = "Casado(a)";
            break;
        } else if(estado === "v" || estado === "V") {
                estado = "Viuvo(a)";
            break;
        } else if(estado === "d" || estado === "D") {
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




































