interface Media {
    title: string;
    genre: string[];
    director ? : {
        name : string
    }
}

const fetchedMediaData : Media = {
    title : 'Sharknado',
    genre : ['comedy', 'bizarre'],
    director : {name : 'Sara Paulson'}
}

console.log(fetchedMediaData.director ?? 'director no encontrado');
