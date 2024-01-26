"use strict";
const bot1 = {
    id: 1,
    name: "Mega-man"
};
const bot2 = {
    id: 1,
    name: "Mega-man",
    sayHello: function () { throw new Error("Function not implemented."); }
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}
const p = new Pessoa(1, "Felipe");
console.log(p.sayHello());
