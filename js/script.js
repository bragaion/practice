
const numberOfFilms = +prompt("Cate filme ati privit", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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

if (personalMovieDB.count < 10) {
    console.log('Destul de putine filme');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Utilizator clasic');
} else if (personalMovieDB.count >= 30) {
    console.log('Esti kinoman');
} else {
    console.log('error');
}

console.log(personalMovieDB);
