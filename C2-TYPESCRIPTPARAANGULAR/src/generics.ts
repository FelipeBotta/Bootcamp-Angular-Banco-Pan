//generics

function concatArray<T>(...itens:T[]):T[]{
    return new Array().concat(...itens);
}///utilizar as reticencias faz com que aceite varios itens

const numArray = concatArray<number[]>([1,5],[3]);
const stgArray = concatArray<string[]>(["Luis", "Felipe"],["Botta"])

console.log(numArray);
console.log(stgArray);