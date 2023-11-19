/*
Crie uma classe para representar carros.

Os carros possuem uma marca, cor e um gasto medio de combustivel por km rodado.
Crie um metoro que dado a quantidade de km e o preco do combustivel nos de o valor gasto em reais para realizar o percurso.

*/

class Carro{
    marca;
    cor;
    consumo;

    constructor(marca, cor, consumo){
        this.marca = marca;
        this.cor = cor;
        this.consumo = consumo;
    }

    calcularGasto(distancia, precoCombustivel){
        return (distancia * this.consumo) * precoCombustivel ;
        
    }

}

const gol = new Carro("volks","preto", 1 / 11);
const agile = new Carro("Chevrolet","Verde", 1 / 10);


console.log(gol.calcularGasto(25,5.86));
console.log(agile.calcularGasto(25,5.86));

