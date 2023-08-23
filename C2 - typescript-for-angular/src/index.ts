type hero = {
    name: string;
    alias: string;
};

function printObject(person: hero) {
    console.log(person);
}

printObject({
    name: "Bruce Wayne",
    alias: "Batman"
})