"use strict";
//tipos primitivos
let ligado = false;
let nome = "felipe";
let idade = 24;
let altura = 1.76;
//tipos especiais
let nulo = null;
let indefinido = undefined;
//tipos abrangentes
let retorno; //sem retorno
let retornoView = 1; //retorno que nao sabemos o que ira retornar
//objeto - sem previsibilidade
let produto = {
    name: "Felipe",
    city: "Cruzeiro",
    age: 24,
    gender: "Masculino"
};
let meuProduto = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5
};
//arrays
let dados = ["felipe", "gabriela", "flora"];
let dados2 = ["felipe", "gabriela", "flora"];
let infos = ["felipe", 24, "gabriela", 23]; //array com multiplos tipos
//tuplas
let boleto = ["agua conta", 199.90, 312435];
//metodos arrays
dados.pop();
//Datas
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
