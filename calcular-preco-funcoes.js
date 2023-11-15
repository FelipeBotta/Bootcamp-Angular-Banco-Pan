/*

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta e a escolha do pagamento.

Condicoes:

1 - A vista Debito, recebe 10% de desconto;
2 - A vista no dinhero ou pix, recebe 15% de desconto;
3 - Em duas vezes, preco normal sem juros;
4 - Acima de duas vezes preco normal com 10% de juros;

*/

function aplicarDesconto(valor,desconto){
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros (valor,juros){
    return (valor + (valor*(juros/100)));
}

const preco = 100;
const formaPgto = 4;

    if (formaPgto === 1 ){
        console.log(aplicarDesconto(preco,10))
    } else if (formaPgto === 2){
        console.log(aplicarDesconto(preco,15))
    } else if (formaPgto === 3){
        console.log(preco)
    } else{
        console.log(aplicarJuros(preco,10))
    }



