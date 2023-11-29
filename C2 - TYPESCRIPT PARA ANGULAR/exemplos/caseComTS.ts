type Hero = {
    nome: string;
    vulgo: string;
    telefone: string;
};

function ligarPara(heroi: Hero) : string{
    return "ligando para: " + heroi.telefone;
}

ligarPara({
    nome: "Felipe",
    vulgo: "Malvadão",
    telefone: "(11) 93085-5742"
});