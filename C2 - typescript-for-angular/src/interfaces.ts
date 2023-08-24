// Interfaces (Type x Interface)
// Type more related to objects and variables
// Interface more related to classes

type robotType = {
    readonly id: number;
    name: string;
};

const bot1: robotType = {
    id: 1,
    name: "Megaman"
};

interface robotInterface {
    readonly id: number | string;
    name: string;
    sayHello(): string;

};

const bot2: robotInterface = {
    id: "1",
    name: "Megaman",
    sayHello: function (): string {
        return "Hello";
    }
};

console.log(bot1);
console.log(bot2);

class Person implements robotInterface {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id;
        this.name = name;
    }

    sayHello(): string {
        return `Hello ${this.name}`;
    }
}

const p = new Person(1, 'John');
console.log(p);
console.log(p.sayHello());