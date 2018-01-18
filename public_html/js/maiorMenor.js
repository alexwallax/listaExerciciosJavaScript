

        function maiorMenor() {
        
        //Faça um Programa que leia três números e mostre o maior e o menor deles.
        n1 = parseInt(prompt("Digite o 1º número"));
        n2 = parseInt(prompt("Digite o 2º número"));
        n3 = parseInt(prompt("Digite o 3º número"));
        
        if(n1 > n2 && n3 < n1) {
            alert("O 1º número é maior");
        } else if(n2 > n1 && n3 < n2) {       
            alert("O 2º número é maior");
        } else if(n3 > n1 && n2 < n3) {
            alert("O 3º número é maior");
        }
        
    //para colocar em ordem do menor para o maior    
    /*    if(a > b) {
            aux = a;
            a = b;
            b = aux;
        }
        if(b > c) {
            aux = b;
            b = c;
            c = aux;
        }
        if(a > b) {
            aux = a;
            a = b;
            b = aux;
        }
   */     
        
        }