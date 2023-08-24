// Functions

function addNumber(x: number, y: number): number {
    return x+y;
};

function addToHello(name: string): string {
    return `Hello ${name}`;
};

let sum: number = addNumber(4,7);

console.log(sum);
console.log(addToHello("Buzz"));

// Multitype functions

function callToPhone(phone: number | string): any {
    return phone;
};

console.log(callToPhone(313116));
console.log(callToPhone("313116"));

// Async functions

async function getDatabase(id: number): Promise<string> {
    return "John";
};

