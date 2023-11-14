/*

Faça um programa para calcular o valor de uma viagem.

Você terá 5 variavéis, sendo elas:
1- Preço do Etanol;
2- Preço da gasolina;
3- O tipo de combustivel que esta no carro;
4- Gasto médio de combustível do carro por KM;
5- Distância em km da viagem;


*/


const precoE = 4.56;
const precoG = 5.86;
const tipoComb = "Gasolina";
var media = 10;
var distancia = 100;



var gasto = (distancia/media);

if(tipoComb === "Etanol"){
    const total = (gasto*precoE); 
}else if(tipoComb === "Gasolina"){
    const total = (gasto*precoG)
}

console.log("O valor gasto na viagem com combustivel foi de : R$ " + total.toFixed(2));