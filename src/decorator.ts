interface ApiEndpoint {
    get() : string[];
    post(req : string) : void;
}
let httpServer : { [key : string ] : ApiEndpoint } = {};

@registerEndpoint
class Families implements ApiEndpoint  {
    private houses = ['Stark', 'Lannister'];
    get() {
        return this.houses;
    };
    post(req : string) {
        this.houses.push(req);
    };
};

@registerEndpoint
class Castles implements ApiEndpoint {
    private castles = ['Winterfell', 'Casterly rock'];
    get() {
        return this.castles;
    };
    getCastles(@paramDecorator index : number, defaultValue : string) {
        return this.castles[index] ?? defaultValue;
    }
    post(@paramDecorator req : string) {
        this.castles.push(req);
    };

};

function paramDecorator(target: any, key: string, index: number) {
    console.log('Este es el target: ',target);
    console.log('Este es el key: ',key);
    console.log('Este es el index: ',index);
    
    
    
}

function registerEndpoint(target : any){
    const className = target.name;
    const endpointPath = '/' + className.toLowerCase();
    httpServer[endpointPath] = new target();
};


/* 
registerEndpoint(Families);  ############ NO ES NECESARIO SI EL EXPERIMENTAL ############
registerEndpoint(Castles);   ############        DECORATION ES TRUE          ############
 */
//console.log(httpServer);

console.log(httpServer['/families'].get());
httpServer['/castles'].post('Castle Black');
console.log(httpServer['/castles'].get());