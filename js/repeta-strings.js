// длина строки 

// const messege = 'В этой строке 26 символов';
// // обращаемся к свойству length
// console.log(messege.length);

// --------------------------------------------

// Конкатенация строк

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullName = firstName + ' ' + lastName;

// console.log(fullName);

// --------------------------------------------------

// напиши скрипт который выведет строку в формате:
// "Гость x y поселяется в z номер q"
// подставь вместо x y q z значение переменных

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const room = 716;
// const type = 'VIP';
// //  пишем шаблонным литералом важно что бы ковычки были обратные
// const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${room} номер ${type}.`;
// console.log(welcomeMsg);

// ----------------------------------------------------------

// нормализация методом toLowerCase()

// Что ищем?
// let brand = prompt('Давай бренд');
// const normolizedBrand = brand.toLowerCase();

// console.log(normolizedBrand );




// если нужно нормализовать только первую букву 
// метод slice() не деструктивный, делает копию с того индекса который укажешь в скобочках 


// let brand = 'SamSUnG';
// console.log(brand.slice(1).toLocaleLowerCase());

// brand = brand[0] + brand.slice(1).toLowerCase();

// console.log(brand);


// --------------------------------------------------------------

// Поиск в строке с методом includes() то есть включает ли 
// Есть слова которые мы заблэклистили, то есть мы хотим в нашем мейле их отфильтровать 



// const blacklistedWord1 = 'спам'
// const blacklistedWord2 = 'распродажа'

// const string1 = "Привет, это не спам, предлагаю тебе миллион";
// const string2 = "Самая большая РАСПРОДАЖА этой недели";
// const string3 = "Рекламная компания GDFAJHFJASF";

// // приводим к нижнему регистру что бы РАСПРОДАЖА тоже попадала под правила
// console.log(string1.toLowerCase().includes(blacklistedWord1));
// console.log(string1.toLowerCase().includes(blacklistedWord2));

// console.log(string2.toLowerCase().includes(blacklistedWord1));
// console.log(string2.toLowerCase().includes(blacklistedWord2));

// console.log(string3.toLowerCase().includes(blacklistedWord1));
// console.log(string3.toLowerCase().includes(blacklistedWord2));



 