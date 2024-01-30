"use strict";
//classes
//data modifiers 
//public(auto explicativo)
//private(so consegue ser visto dentro da propria classe)
//protected(consegue ser visto tambem por sub classes)
//superclass
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
//subclass
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Sica-flex", 10, 5);
p1.attack();
const p2 = new Magician("Mago de Oz", 7, 10, 100);
p2.attack();
