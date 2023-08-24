// Decorators

function Getname(target: any) {
    console.log(target);
}

@Getname
class Employee {}

@Getname
class Company {}

//Factory - function that returns another function
function apiVersion(version: string) {
    return(target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "Buzz"})
    }
}

@apiVersion("1.10")
class apiV{}

const apiO = new apiV();
// Work using TS-Node server
// console.log(apiO.__version);
// console.log(apiO.__name);

// Attribute Decorator

function minLength(length: number) {
    return(target:any, key: string) => {
        let _value = target[key];
        
        const getter = () => "play " + _value;
        const setter = (value: string) => {
            if(value.length < length) {
                throw new Error(`Value smaller than ${length}`)
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    }
}

class ApiD {
    @minLength(4)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const apiD = new ApiD("product");
console.log(apiD.name);