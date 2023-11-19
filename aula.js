
class Pessoa{

    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    decrever() {
        console.log(`Meu nome e ${this.nome} e minha idade e ${this.idade} e meu ano de nascimento e ${this.anoDeNascimento}`);     
    }
}

function compararPessoas(p1,p2){
    if(p1.idade > p2.idade){
       console.log(`${p1.nome} e mais velho(a) que ${p2.nome}`) 
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} e mais velho(a) que ${p1.nome}`) 
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const luis = new Pessoa("Luis Felipe", 24);

const gabriela = new Pessoa("Gabriela", 23);

luis.decrever();
gabriela.decrever();

compararPessoas(luis,gabriela)
