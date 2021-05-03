
// Дз часть 1
"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function detectPersonalLevel() {
  if (personalMovieDB.count <=10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
}

detectPersonalLevel();

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', '');
    let b = prompt('На сколько оцените его?', '');
  
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

rememberMyFilms();

console.log(personalMovieDB);

/*
// Тренировка с разными циклами 2 задание 
// let i = 0
// while (i < 2) {
//   let a = prompt('Один из последних просмотренных фильмов?', '');
//   let b = prompt('На сколько оцените его?', '');
//   i++;

//   if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//   } else {
//     i--;
//   }
// }

let i = 0;
do {
  let a = prompt('Один из последних просмотренных фильмов?', '');
  let b = prompt('На сколько оцените его?', '');
  i++;
  if (a != '' && b != '' && a != null && b != null && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
} while (i < 2);
*/





