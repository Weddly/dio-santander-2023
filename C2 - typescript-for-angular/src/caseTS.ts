type Hero = {
    name: string;
    alias: string;
    phoneNumber: number;
};

function callTo(hero: Hero) {
    console.log("Calling: " + hero.phoneNumber);
};

// Expected error, missing element of class Hero
callTo({
    name: "Steve Rogers",
    alias: "Captain America",
    phoneNumber: 156595584
});