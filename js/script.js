'use strict';
const numberOfFilms = +prompt('Скільки фільмів ви вже глянули?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Ваш останній переглянутий фільм?', '');
const b = +prompt('На скільки оцінити його?', '');
const c = prompt('Ваш останній переглянутий фільм?', '');
const d = +prompt('На скільки оцінити його?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);














/* 
const category = 'toys';
console.log(`https:://someurl.com/${category}`);
 */








/* const result = confirm('What you want?');
console.log(result);
const answer = +prompt('Розкажи про себе?', 'Я ...');
console.log(answer + 5); */
/* const answers = [];
console.log(typeof(answers)); */


/* let numberForRomyl = 4.3;
console.log(4 / 0);
const personRomyl = 'Romyl';
console.log(personRomyl); */




/* Види називання змінних, папок, констант і тд:
snake_case - для папок частіше
UPPER_SNAKE_CASE - для констант інколи назив 
Kebab-case
PascalCase - ДЛЯ НАЗВ КЛАСІВ У JS*/



/* 
let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);
console.log(leftBorderWidth);

const obj = {
    a: 50
};
obj.a = 17;
console.log(obj);

var name = 'Romyl';
console.log(name); */