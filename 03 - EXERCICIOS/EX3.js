/*

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta e a escolha do pagamento.

Condicoes:

1 - A vista Debito, recebe 10% de desconto;
2 - A vista no dinhero ou pix, recebe 15% de desconto;
3 - Em duas vezes, preco normal sem juros;
4 - Acima de duas vezes preco normal com 10% de juros;

*/

const preco = 100;
const formaPgto = 4;

if (formaPgto === 1 ){
    const total = preco * 0.9
    console.log("O total do pedido eh de R$ " + total)
} else if (formaPgto === 2){
    const total = preco * 0.85
    console.log("O total do pedido eh de R$ " + total)
} else if (formaPgto === 3){
    const total = preco
    console.log("O total do pedido eh de R$ " + total)
} else{
    const total = preco * 1.1
    console.log("O total do pedido eh de R$ " + total.toFixed(2))
}

