
const numberOfFilms = +prompt("Cate filme ati privit", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('unul din filmele privite?', ''),
      b = prompt('Ce nota ii dati?', ''),
      c = prompt('unul din filmele privite?', ''),
      d = prompt('Ce nota ii dati?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
