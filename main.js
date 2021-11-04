// Import stylesheets
import './style.css';

// Деструктуризация. Домашняя работа.

// Группа С =======================================================
// Задание №1
// Дан массив ["Julius", "Caesar", "Consul", "of the Roman Republic"]
// Вам надо поместить в переменную
// firstName 1-элемент массива, а в
// переменную titul  3-элемент.

// let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// let [firstName,,titul] = arr;
// console.log(firstName,titul)

// Задание №2
// Дана строка `Albert Einstein`.
// Поместите в переменную firstName первое слово,
// в переменную lastName второе слово.

// let str = `Albert Einstein`
// str = str.split(' ')
// let [firstName, LastName] = str;
// console.log(firstName, LastName)

// Задание №3
// Создайте объект let obj = {};
// В свойство firstName поместите первое
// слово из задания №2
// В свойство lastName поместите второе
// слово из задания №2

// let obj = {
//  firstName,
//  LastName
// }
// console.log(obj)

// Задание №4
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}.
// Запишите соответствующие значения в переменные name, surname и age

// let arr = {name: 'Петр', surname: 'Петров', age: '20 лет'};
// let {name, surname, age} = arr
// console.log(name, surname ,age)

// Задание №5
// Дан объект: { hello: "World", console: "log", java: "script" }
// Поместите в переменные, первые два свойства.
// Следующий выведите в консоль. Используйте оператор ...rest (spread).

// let arr = {
//   hello: 'World',
//   console: 'log',
//   java: 'script',
// };

// let { hello: a, console: b, ...rest } = arr
// console.log(a, b, rest);
