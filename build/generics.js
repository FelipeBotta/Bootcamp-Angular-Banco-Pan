"use strict";
//generics
function concatArray(...itens) {
    return new Array().concat(...itens);
} ///utilizar as reticencias faz com que aceite varios itens
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["Luis", "Felipe"], ["Botta"]);
console.log(numArray);
console.log(stgArray);
