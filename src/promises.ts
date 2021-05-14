class Family{
    constructor(
        public readonly name : string,
        public readonly castles : string[]
    ) {}
}
const lannister = new Family('Lannister', ['Casterly rock', 'Kings Landing']);
const stark = new Family('Stark', ['Winterfell']);

const families : Family[] = [lannister, stark];


function gestCastlesByFamily( family : string) : Promise<string[]> {
    let p : Promise<string[]> = new Promise((resolve, reject) =>{ 
        setTimeout(() => {
            let foundCastles = families.filter((x) => x.name === family)
            
            if(foundCastles.length > 0) {
                resolve(foundCastles.map(x => x.castles)[0])
            } else {    
                reject('No se encontraron castillos')
            }
        }, 2000)
    });
    return p;
}

console.log('comenzando la búsqueda..');
gestCastlesByFamily('Stark')
    .then((castles) => {console.log('Castillos encontrados: ', castles.join(', '))
        return castles.length;
    })
    .then((numberOfCastles) => console.log(`Número de castillos entontrados: ${numberOfCastles}`))
    .catch(reason => console.log('Error: ', reason))
    .then(() => console.log('Búsqueda finalizada.'));

export {}