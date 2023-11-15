function escrevaMeuNome(nome){
    return "Meu nome e " + nome;
}

function verificarIdade(idade){
    if(idade >= 18){
        return "Voce eh maior !"
    }else{
        return "Voce eh menor !"
    }
}

function main(){
    

    console.log("Ola " + escrevaMeuNome("Luis") + " Verificamos que " + verificarIdade(24));
}

main();