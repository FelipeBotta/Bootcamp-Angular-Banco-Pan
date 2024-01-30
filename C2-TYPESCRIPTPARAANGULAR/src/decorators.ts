//decorators

function ExibirNome(target: any){
    console.log(target);
}

@ExibirNome
class Funcionario{}

@ExibirNome
class Chefe{}


//decorators (nivel de classe)

function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "Felipe"})
    }
}

@apiVersion("1.10")
//class Api{}

//const api = new Api();

//console.log(api.__version)