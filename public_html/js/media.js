/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

        //Faça um Programa que peça as 4 notas bimestrais e mostre a média.
            
            function media() {
            
            n1 = parseFloat(prompt("Digite a 1ª nota"));
            n2 = parseFloat(prompt("Digite a 2ª nota"));    
            n3 = parseFloat(prompt("Digite a 3ª nota"));    
            n4 = parseFloat(prompt("Digite a 4ª nota"));
            media = (n1 + n2 + n3 + n4) / 4;
            alert("Sua Média foi " + media);
        
            }
        

