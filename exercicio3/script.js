//Crie a const para a frase aqui

/* # Exercício 3

A partir da frase a seguir, faça o que se pede.

```
Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
```

a) Crie uma `const` no seu código para **guardar a frase** (com aspas e tudo);

b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

c) **Verifique** se a nova string inclui **verde**, e se inclui **laranja**.

**EXTRA:** tente fazer o trecho “mas não deixe o gato sair” ficar em **letras maiúsculas**, assim como o “BOAS VINDAS”*/


const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`;

const novaFrase = frase.replaceAll("verde", "rosa").replaceAll("azul", "laranja");
console.log(novaFrase);
console.log(`A nova frase inclui verde:${novaFrase.includes("verde") }`)
console.log(`A nova frase inclui laranja:${novaFrase.includes("laranja") }`)
console.log(`Jorge tem uma casa verde e com portão azul, com os dizeres: ${("BOAS VINDAS, mas não deixe o gato sair").toUpperCase()}.`)