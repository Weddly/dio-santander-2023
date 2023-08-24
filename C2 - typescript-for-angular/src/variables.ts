// Variables

// Primitive Types: boolean, number, string

let isOn: boolean = false;
let userName: string = "John";
let age: number = 30;
let height: number = 1.90;

// Special Types: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// Embracing Types: any, void
let notReturn: void;
let returnView: any = false;

// Object - unpredictable
let product: object = {
    name: "Mart",
    location: "NY",
    price: 33.88
};

// Object - typed and predictable

type ShopProduct = {
    name: string;
    price: number;
    quantity: number;
};

let myProduct: ShopProduct = {
    name: "Jeans",
    price: 99.99,
    quantity: 15
}

// Arrays

let days: string[] = ["Monday", "Tuesday", "Wednesday"];
let days2: Array<string> = ["Thursday", "Friday", "Saturday", "Sunday"];

// Multiple Types Arrays

let infos: (string | number | boolean)[] = [11, false, "Eleven"]; 

// Tuple - Position matters

let ticker: [string, number, number] = ["Water bill", 12.99, 2023];

// Date

let birthday:Date = new Date("2022-02-01 05:00");
console.log(birthday.toString());