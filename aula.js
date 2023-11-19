


const pessoa = {
    nome: "Luis Felipe",
    idade: 24,
    
    descrever: function (){
        console.log(`Meu nome e ${this.nome} e minha idade e ${this.idade}`);
    }
} ;


const atributo = 'idade';


pessoa['idade'] = 30;

console.log(pessoa['idade']);