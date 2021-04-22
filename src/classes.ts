// La clase abstract no se pueden llamar directamente, solo a las clases que dependan de esta.
interface Billable {
    currentBill() : string;
}

interface Flyable {
    altitude() : string
}


abstract class Vehicle  {

    constructor(
        protected readonly brandName : string,
        private year : number,
        protected color : string,
        private prize : number
    ) 
    {}
    get getPrize(){
        return this.prize
    }

    set setPrize(value : number){
        this.prize = value
    }
    static PriceTocurrency(value: number, typeOfCurrency: string) {
        let result;
        switch(typeOfCurrency) {
            case 'USD' :
                result = 'US' + value;
            break;
            case 'PESO' :
                result = '$' + value;
            break;
        }
        return result;
    }
    
    abstract drive() : void /*{
        // Cuando en el atributo se añade readonly no se puede modificar el contenido, solo se permite su lectura.
        //this.brandName = 'hyundai'
        //console.log(`conduciendo un ${this.brandName}`);
    }*/
};

class Car extends Vehicle implements Billable{
    color = 'blue'
    drive() : void {
        console.log(`im driving my car, it is ${this.getPrize}`);
    }

    currentBill() : string {
        return `La factura total es de 200`;
    }
};

class Airplane extends Vehicle implements Billable, Flyable {
    drive() : void {
        console.log(`im driving an ${this.brandName}`);
    }
    currentBill() : string {
        return 'good';
    }
    altitude() : string {
        return 'really high';
    }
}

const newFlyingVehicle : Flyable = new Airplane('boing', 1960, 'blue', 2000000)

//const vehicle = new Vehicle('mazda', 2018, 'red', 200000)


const newVehicle = new Car('mercedes', 2019, 'black', 20000)

// Esta modificación no debería ser posible, para arreglarlo se añade private a los atributos ----|>
//vehicle.brandName = 'Toyota'

// No se pueden llamar debido a que pertenecen a un objeto con la clase abstract----------------|>
//vehicle.setPrize = 200000
//vehicle.drive();

console.log(Car.PriceTocurrency(200, 'USD'), newVehicle);
newVehicle.drive();

newFlyingVehicle.drive();


//----------------------------------------------------------------||

/*let motorcycle = {
    brandName : 'Honda',
    drive : vehicle.drive
}*/