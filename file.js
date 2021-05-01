"use strict";
//alert ("Я JavaScript!");

//Работа с переменными
/*let name = "Джон";
let admin = name;
alert (admin)*/

//Придумайте правильные имена
/*let world; //let ourPlanetName = "Земля"; +-
let currentUser; //let currentUserName = "Джон"; +*/

// Шаблонные строки
/*
let name = "Ilya";

// выражение - число 1
alert( `hello ${1}` ); // hello 1

// выражение - строка "name"
alert( `hello ${"name"}` ); // hello name

// выражение - переменная, вставим её в строку
alert( `hello ${name}` ); // hello Ilya*/

// Простая страница
/*let name = prompt('Как тебя зовут?', "");
alert(`Здарова ${name} `);*/

// Cкрипт для танюши 
/*let hello=('Привет любимка!');
alert(hello);
let question = prompt('Угадай кто это?', "");
alert(`Правильно милая, это ${question}!`);
let love = prompt('Я тебя очеень сильно люблю, а ты меня?', '');

if (love == да) {
  alert( 'ответ верныый! *ЧМОК*' );
} else {
  alert( 'Ответ не верный! >:(' ); 
}

let kiss=("цом тя в попку хихих");
alert(kiss);*/



/*let value = prompt('Какое "официальное" название JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Верно!');
    } else {
      alert('Не знаете? ECMAScript!');
    }*/
  
  
  
    /*let number = prompt('Введите число', 0);

    if (number > 0) {
      alert('1');
    } else if (number < 0) {
      alert('-1');
    } if (number == 0) {
      alert('0');
    }*/


    /*let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}*/


/*let result = (a + b < 4) ? 'Мало' : 'Много'; -+
result = (a + b < 4) ? 'Мало' : 'Много'; +*/


// let message;

/*if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}*/

/*let post = value('Ваша должность?');

   message = (login == 'Сотрудник') ? 'Привет':
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина';

    let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';*/

/*
    if (age <= 14 && age >=90);  if (age < 14 || age > 90)

    if (age !14 && !90);  if (!(age >= 14 && age <= 90))
*/



/*let login = prompt('Ваш логин', '');

if (login == 'Админ') {
  prompt('Пароль');
} else if (login == 'Я главный') {
  alert('Здравствуйте!');
}*/


/*
let userName = prompt("Кто там?", '');

if (userName == 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass == 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass == '' || pass == null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName == '' || userName == null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}
*/

// console.log('Я учу JS')

/*
let user
let userName = 'Вася'
user = userName
console.log(user)

let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers)
console.log(!false && 11 || 18 && !'');

let name = 11;
console.log(name ?? 'Хуй');
*/

/*
if (0) {
  console.log('Ложь!');
} else if (" ") {
  console.log('Истина!');
}
*/

/*
let scriptName = prompt('Какое "официальное" название JavaScript?');
if (scriptName == 'ECMAScript') {
  alert('Правильно!');
} else {
  alert('Не знаете? "ECMAScript"!');
} 
*/

/*
let value = prompt('Введите число', '');
if (value > 0) {
  alert('1');
} else if (value < 0) {
  alert('-1');
} else if (value == 0) {
  alert('0');
}
*/



//result = (a + b < 4) ? 'Мало' : 'Много';

/*
let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';
*/

/*
if ( !(age >= 14 && age <= 90)) 
if (age <14 || age > 90)
*/



/*let login = prompt('Кто там?', '');
if(login == 'Отмена') {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
} else if(login == 'Админ') {
  
}

let pass = prompt('Пароль?', '');
if(pass == 'Я главный') {
  alert('Здравствуйте!');
} else if('Отмена') {
  alert('Отменено');
} else(pass == '') {
  alert('Неверный пароль');
}
*/


/*
let userName = prompt('Кто там?', '');
if (userName == 'Админ') {
  
  let pass = prompt('Пароль?', '');
  if (pass == 'Я главный') {
    alert('Здравствуйте!');
  } else if (pass == null || pass == '') {
    alert('Отменено');
  } else {
    alert('Неверный пароль');
  }

} else if (userName == '' || userName == null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}
*/



/*
let login = prompt('Кто там?', '');
if (login == 'Админ') {

  let pass = prompt('Пароль?', '');
  if (pass == 'Я главный') {
    alert('Здравствуйте!');
  } else if (pass == null || pass == '') {
    alert('Отменено');
  } else {
    alert('Неверный пароль');
  }

} else if (login == '' || login == null) {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
}
*/

/*
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}
*/

/*
let i = 0;
while (i <= 5) {
  console.log( i );
  i++;
}

let num = 8;
while (num) {
  console.log( num );
  num--;
}
*/

/*
let num = 0;
while (num < 3) {
  console.log(`Число: ${num}`);
  num++;
}
*/
/*
leabel: for (let num = 0; num < 2; num++) {
  for (let size = 0; size < 3; size++){
    if (size == 2) {
      break leabel;
    }
    console.log(size);
  }
} 
*/

/*
let browser = prompt('Каким браузером вы пользуетесь?')
if (browser == 'Edge') {
  alert( "You've got the Edge!" );
} else if (browser == 'Chrome' 
  || browser == 'Firefox' 
  || browser == 'Safari' 
  || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}
*/

/*
const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;

  case 1:
    alert('Вы ввели число 1');
    break;

  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}
*/


// let birth = prompt('Ваш год рождения?', '');
// let currentYear = 2021;
// let age = currentYear - birth;
// // alert('Вам ' + age + ' лет!');
// if (age >= 18) {
//   alert('Здравствуйте!');
// } else if (age <= 18) {
//   alert('Привет, малыш!');
// } else {
//   alert('Сколько же вам?');
// }

// function showMessage() {
//   alert( 'Hello, world!' );
// }

// showMessage();


// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('А родители разрешили?');
//   }
// }

// let age = prompt('Сколько вам лет?', 18);

// if ( checkAge(age) ) {
//   alert( 'Доступ получен' );
// } else {
//   alert( 'Доступ закрыт' );
// }


// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// function checkAge(age) {
//   return = age > 18 || confirm('Родители разрешили?');
// }
// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }


// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// let number = 5;
// console.log(number);

// confirm -- да/Нет
// alert -- показать сообщение
// prompt  -- спросить что-то (prompt('Как твои дела?', ''));

let user = 'Artem';
let surnameUser = 'Lomov';
alert(`Привет, ${user} ${surnameUser}`)