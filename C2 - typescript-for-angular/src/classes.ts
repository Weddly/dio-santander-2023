// Classes

// Data modifiers
// Public - Free access to the property
// Private - Property only can be accessed inside class
// Protected - Derived classes and subclasses can access values

class Character {
    private name: string;
    public readonly strength: number;
    protected skill?: number;

    constructor(name: string, strength: number) {
        this.name = name;
        this.strength = strength;
    }

    attack(): void {
        console.log(`Attack with ${this.strength} points`);
    }

    getName() {
        return this.name
    }
};

const p1 = new Character("Pikachu", 20);
console.log(p1);
console.log(p1.getName());
p1.attack();

// Character: Superclass
// FireCharacter: Subclass
class FireCharacter extends Character {
    weakness: string = "Water";

    constructor(name: string, strength: number){
        super(name, strength)
        this.skill = 2;
    }
};

const p2 = new FireCharacter("Charizard", 50);

console.log(p2);
console.log(p2.getName());
console.log(p2.weakness);