// Generics
function concatArraysNotGeneric(...itens: any[]): any[] {
    return new Array().concat(...itens);
};

function concatArrays<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
};

const numArray = concatArraysNotGeneric([1,5], [3]);
const stringArray = concatArrays<string[]>(["Goku", "Picolo"], ["Vegeta"]);

// Accept any type
numArray.push("Gohan");

//Won't work
// stringArray.push(2);

console.log(numArray);
console.log(stringArray);