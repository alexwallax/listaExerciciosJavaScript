
            //Faça um Programa que verifique se uma letra digitada é vogal ou consoante.            
            function vogal() {
            var escolha = prompt("Digite uma letra");
            escolha = escolha.toUpperCase();//toUpperCase Transforma as letras em maiusculas
            switch(escolha) {
                case "A": case "E": case "I": case "O": case "U": 
                    alert("Você digitou uma vogal");
                    break;
                
                default:
                    document.write("Você digitou uma consoante");
                    
            }
        
            }