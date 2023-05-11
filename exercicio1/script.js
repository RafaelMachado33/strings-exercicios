/*Faça um programa que pergunte ao usuário seu **nome** e suas **três comidas favoritas**. Em seguida, imprima no console a seguinte mensagem:
    
   
    Estas são as comidas favoritas de nomeDoUsuario:
    - Comida1
    - Comida2
    - Comida3
  
    
Você deve usar apenas um `console.log()` para isso

  <details> 
  <summary> 💡 Dica</summary>
  
    ⭐ Você pode juntar texto com variáveis de duas formas:
    - Concatenando as strings (com o sinal de +)
    - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
    Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  
  </details>*/

let nome = prompt(`Digite seu nome:`);
console.log(`Nos fale 3 tipos de comidas que você gosta:`);
let comida1 = prompt(`Qual tipo de comida:`);
let comida2 = prompt(`Qual tipo de comida:`);
let comida3 = prompt(`Qual tipo de comida:`);

let frase = `Boa noite ${nome}!\n Suas comidas favoritas são:\n-${comida1}\n-${comida2}\n-${comida3}`;
console.log(frase);





