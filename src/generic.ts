/* class ArrayNumbers {
    constructor ( private collection : number[]) {}
    get(index : number) : number {
        return this.collection[index];
    };
};

class ArrayStrings {
    constructor( private collection : string[]) {}
    get(index : number) : string {
        return this.collection[index];
    };
}; */

class ArrayOfAny<T> {
    constructor(private collection : T[]) {}
    get(index : number ) : T {
        return this.collection[index];
    }
}

const col = new ArrayOfAny/* <string> */(['1' ,'2' ,'3'])

/*class ArrayOfAny {
    constructor (private collection : number[] | string[]) {}
    get(index : number) : string | number {
        return this.collection[index];
    }
}*/


// FUNCIONES---------------------------------------------------------------------|
function printNumber (arr : number[]) : void {
 for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
 };
};

function printString (arr : string[]) : void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    };
};

function printArray<T>(arr : T[]) : void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    };
};

printArray(['a', 'b', 'c'])


// CONSTRAINS ----------------------------------------------------------------------|

interface IMedia {
    print(): void
};

class Movie implements IMedia {
    constructor ( private name : string) {}
    print() : void {
        console.log(`La película es ${this.name}`);
    };
};

class TvShow implements IMedia {
    constructor ( private name : string) {}
    print() : void {
        console.log(`La serie es ${this.name}`);
    };
};

function printMedia<T extends IMedia>(media : T[]) {
    media.forEach((media) =>{
        media.print();
    });
};

class PrintStuff<T> {
    constructor ( private name : string) {}
    get(name : string) {
        console.log(name);
    };    
};

const movie = new Movie('Sharknado')
const tvshow = new TvShow('Motherland')

const media : IMedia[] = [movie, tvshow]

printMedia(media)



// KEYOF------------------------------------------------------------------|

function findvalue<T extends object, U extends keyof T>(object : T, key : U) {
    return object[key];
};

findvalue({'name': 'Rodrigo'}, 'name');


// BUILT-IN TYPESCRIPT ----------------------------------------------------|

class Vehicle2 {
    brand: string = '';
    model: string = '';    
};

function createVehicle() : Vehicle2 {
    const vehicle : Partial<Vehicle2>= {};
    vehicle.brand = 'Fiat';
    vehicle.model = 'Punto';
    return vehicle as Vehicle2;
};

const cars /*:  Readonly<string[] >*/ = ['ford', 'mazda'];

cars.push('honda')

