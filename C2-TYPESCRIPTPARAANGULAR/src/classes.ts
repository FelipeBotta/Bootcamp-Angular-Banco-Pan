//classes

//data modifiers 
//public(auto explicativo)
//private(so consegue ser visto dentro da propria classe)
//protected(consegue ser visto tambem por sub classes)


//superclass
class Character{
    protected name?: string; //a utilizacao da interrogacao passa a deixar como nao obrigatorio a utilizacao do parametro
    readonly stregth: number; //readonly faz com que nao seja possivel alterar
    skill: number;

    constructor(name:string,stregth:number,skill:number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack():void{
            console.log(`Attack with ${this.stregth} points`)

    }
}

//subclass
class Magician extends Character{
    magicPoints:number;
    constructor(name:string,stregth:number,skill:number,magicPoints:number){
        super(name,stregth,skill)
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Sica-flex",10,5);
p1.attack();

const p2 = new Magician("Mago de Oz",7,10,100);
p2.attack();