function call(hero) {
    console.log("Calling: " + hero.phoneNumber);
}

call({
    name: "Steve Rogers",
    alias: "Captain America",
    phoneNumber: "11 3338888"
});

call({
    name: "Steve Rogers",
    alias: "Captain America"
});