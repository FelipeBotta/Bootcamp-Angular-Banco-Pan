/*

Faça um programa para calcular o valor de uma viagem.

Você terá 3 variavéis, sendo elas:
1- Preço do combustivel;
2- Gasto médio de combustível do carro por KM;
3- Distância em km da viagem;


*/


const preco = 5.86;
var media = 17;
var distancia = 220;

var gasto = (distancia/media) * preco;

console.log("O valor gasto na viagem com combustivel foi de : R$ " + gasto.toFixed(2));