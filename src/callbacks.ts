class Family{
    constructor(
        public readonly name : string,
        public readonly castles : string[]
    ) {}
}
const lannister = new Family('lannister', ['Casterly rock', 'Kings Landing']);
const stark = new Family('Stark', ['Winterfell']);

const families : Family[] = [lannister, stark];

interface CastleCallback {
    (err? : Error, castles? : string[]) : void
}

function gestCastlesByFamily( family : string, callback : CastleCallback) : void {
    setTimeout(() => {
        try {
            let foundCastles = families.filter((x) => x.name === family)
            if(foundCastles.length > 0) {
                callback(undefined, foundCastles.map(x => x.castles)[0])
            } else {
                throw new Error('No se encontraron castillos')
            }
        } catch (err) {
            callback(err, undefined)
        }
    }, 2000)
}

function logCastleSearch(err? : Error, castles? : string[]) : void {
    if(err) {
        console.log('Mensaje de error: ', err.message);
    } else {
        console.log('se encontraron los siguientes castillos:', castles);
        
    }
}

console.log('comenzando la búsqueda..');
gestCastlesByFamily('lannister', logCastleSearch);
console.log('Búsqueda finalizada.');

