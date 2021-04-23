class Bird {
    fly() : void{
        console.log('volando');
    }
};

class Fish {
    swim() : void{
        console.log('nadando');
    }
};

type UnknownPet = Fish | Bird ;

function printPet(pet : UnknownPet) {
    if( pet instanceof Fish) pet.swim();
    if(pet instanceof Bird) pet.fly();
};

const pet = new Bird();
printPet(pet)