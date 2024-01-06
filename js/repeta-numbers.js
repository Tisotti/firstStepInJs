// Number.parseInt() и Number.parsFloat
// откинет значение оставиит только число (целую численную часть). Метод не диструктивный. Оставит с px.



// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// 
// console.log(result);
// console.log(elementWidth);


// ------------------------------------ 
// если хотим записать новое значение 50 в эту же переменную, то присваем ей сразу это значение


// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
//
// console.log(elementWidth);


// -----------------------------------------
// метод Number.parsFloat парсит число с точкой но до символов 


// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
//
// console.log(elementHeight);


// -----------------------------------------------
// метод toFixed для работы с деньгами что бы отсечь значение после точки или есл передать в скобочках число, то это значит до какого чила убрать знаки. метод не диструктивный 
// метод не диструктивный но возвращает не число а строку
 

// let salary = 1300.16472;
// salary = salary.toFixed(2);

// console.log(salary);


// если надо приобразовать число в строку то
// salary = Number(salary);
// 
// console.log(salary);


// --------------------------------------------------
// привести строку в число


// console.log(Number(false));
// console.log(Number(true));
// console.log(Number(5));
// console.log(Number('edfqef'));
// console.log(Number(6 / 0));
// console.log(6 / 0);


// -----------------------------------------------------
// возведение в степень


// const base = 2;
// const power = 5;
// 
// const result = Math.pow(base, power);
// 
// console.log(result);


// аналог 


// console.log(base ** power);


// --------------------------------------------------------

// напиши скрипт который просит пользователя ввести число и степень
// возводит его в степень с выводит результат в консоль


// // 1попросить ввести число  и сохранить в переменную 
// let base = prompt('Давай число');
// // prompt возвращает строку. поэтому наше число будет строкой поэтому надо его преобразовать в число
// base = Number(base);

// console.log(base);
// // 2 попросить ввести в степень и сохранить в переменную 
// let power = prompt('Давай степень');
// power = Number(power);

// console.log(power);
// // 3 возвести введенные данные в степень и вывести 
// const result = base ** power;

// console.log(result);


// ------------------------------------------------------------

//  метод Math.random() генерит случайное число

// const max = 80;
// const min = 10;
// // но случайное число будет не округленное а с 14 цифрами после запятой
// const result = Math.random() * ((max - min) + min);
// // поэтому округляем при помощи Math.round
// const endResult = Math.round(Math.random() * (max - min) + min);

// console.log(endResult);


// ---------------------------------------------------------------
// меняем цветы на сайте
// создаем массив с цветами массив начинается с 0
const colors = ['tomato', 'teal', 'orange', 'deeppink'];
const max = colors.length - 1
const min = 0;
// генерим случайные числа
const index =  Math.round(Math.random() * (max - min) + min)

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;



