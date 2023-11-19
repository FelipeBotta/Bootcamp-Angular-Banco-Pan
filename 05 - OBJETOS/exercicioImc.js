/*

Crie uma classe para representar pessoas.
Para cada pessoa teremos atributos: Nome, Peso e Altura.
Calcule o IMC


*/

class Pessoa{
    nome;
    peso;
    altura

    constructor(nome,peso,altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularIMC(){
        return this.peso / (Math.pow(this.altura,2));
    }

    classificarIMC(){
        const imc = this.calcularIMC();

        if(imc < 18.5){
            return "Abaixo do peso !";
        } else if (imc >= 18.5 && imc < 25 ){
            return "Peso normal !";
        } else if (imc >= 25 && imc < 30 ){
            return "Acima do peso !";
        } else if (imc >= 30 && imc < 40 ){
            return "Obeso !";
        } else{
            return "Obesidade grave !";
        }
        
    }


}

const jose = new Pessoa("Jose",70,1.75);

console.log(jose);
console.log(jose.calcularIMC());
console.log(jose.classificarIMC())