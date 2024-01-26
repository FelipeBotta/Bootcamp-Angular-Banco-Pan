    
    //tipos primitivos
    let ligado: boolean = false;
    let nome: string = "felipe";
    let idade: number = 24;
    let altura: number = 1.76;
    
    
    //tipos especiais
    let nulo: null = null;
    let indefinido: undefined = undefined;

    //tipos abrangentes
    let retorno:void //sem retorno
    let retornoView: any = 1; //retorno que nao sabemos o que ira retornar


    //objeto - sem previsibilidade
    let produto: object = {
        name:"Felipe",
        city:"Cruzeiro",
        age:24,
        gender:"Masculino"
    };

    //objeto tipado - com previsibilidade

    type ProdutoLoja = {
        nome:string;
        preco:number;
        unidades:number;
    };

    let meuProduto:ProdutoLoja = {
        nome:"Tenis",
        preco: 89.99,
        unidades: 5
    }

    //arrays

    let dados:string[] = ["felipe","gabriela","flora"]

    let dados2: Array<string> = ["felipe","gabriela","flora"]

    let infos:(string | number)[] = ["felipe",24, "gabriela", 23] //array com multiplos tipos


    //tuplas

    let boleto:[string,number,number] = ["agua conta", 199.90,312435];


    //metodos arrays
    

    dados.pop();

    //Datas

    let aniversario:Date = new Date("2022-12-01 05:00")
