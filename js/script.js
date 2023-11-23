let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Cate filme ati privit", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Cate filme ati privit", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('unul din filmele privite?', ''),
              b = prompt('Ce nota ii dati?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Destul de putine filme');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Utilizator clasic');
    } else if (personalMovieDB.count >= 30) {
        console.log('Esti kinoman');
    } else {
        console.log('error');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        const genre = prompt(`Genul cu nr ${i}`);
        personalMovieDB.genres[i-1] = genre;
    }
}

writeYourGenres();