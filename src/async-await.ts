class Family{
    constructor(
        public readonly name : string,
        public readonly castles : string[]
    ) {}
}
const lannister = new Family('Lannister', ['Casterly rock', 'Kings Landing']);
const stark = new Family('Stark', ['Winterfell']);
const families : Family[] = [lannister, stark];

function getCastlesByFamily( family : string) : Promise<string[]> {
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
async function logCastleSearch(family:string) {
    let foundCastles = await getCastlesByFamily(family)
    console.log(foundCastles);   
}

console.log('comenzando la búsqueda..');
logCastleSearch('Lann').catch((reason) => console.log('Error: ', reason)).then(() => console.log('Búsqueda finalizada'));

export {}