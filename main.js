console.log('............завдання 1................');
// - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 
// 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write

let word = 'hello';
let school = 'owu';
let it = 'com';
let country = 'ua';
let one = 1;
let ten = 10;
let min = -999;
let num = 123;
let pi = 3.14;
let point = 2.7;
let num2 = 16;
let bul1 = true;
let bul2 = false;
console.log(word + ', ' + school + ', ' + it + ', ' + country + ', ' + one + ', ' + ten + ', ' + min + ', ' + num + ', ' + pi + ', ' + point + ', ' + num2 + ', ' + bul1 + ', ' + bul2 + '.');
alert(word + ',\n ' + school + ',\n' + it + ',\n' + country + ',\n' + one + ',\n' + ten + ',\n' + min + ',\n' + num + ',\n' + pi + ',\n' + point + ',\n' + num2 + ',\n' + bul1 + ',\n' + bul2 + '.');
document.write(word + ',<br>' + school + ',<br>' + it + ',<br>' + country + ',<br>' + one + ',<br>' + ten + ',<br>' + min + ',<br>' + num + ',<br>' + pi + ',<br>' + point + ',<br>' + num2 + ',<br>' + bul1 + ',<br>' + bul2 + '.');


console.log('............завдання 2................');
// переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write

word = 'hi';
school = 'cool';
it = 'com.ua';
country = 'GB';
one = 2;
ten = 22;
min = 888;
num = 333;
pi = 3.14569845;
point = 12.25;
num2 = 79;
bul1 = false;
bul2 = true;
console.log(word + ', ' + school + ', ' + it + ', ' + country + ', ' + one + ', ' + ten + ', ' + min + ', ' + num + ', ' + pi + ', ' + point + ', ' + num2 + ', ' + bul1 + ', ' + bul2 + '.');
alert(word + ',\n ' + school + ',\n' + it + ',\n' + country + ',\n' + one + ',\n' + ten + ',\n' + min + ',\n' + num + ',\n' + pi + ',\n' + point + ',\n' + num2 + ',\n' + bul1 + ',\n' + bul2 + '.');
document.write('<h1>' + word + ',<br>' + school + ',<br>' + it + ',<br>' + country + ',<br>' + one + ',<br>' + ten + ',<br>' + min + ',<br>' + num + ',<br>' + pi + ',<br>' + point + ',<br>' + num2 + ',<br>' + bul1 + ',<br>' + bul2 + '.' + '</h1>');


console.log('............завдання 3................');
// Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

const PI = 3.14;
const myAge = 30;
const myHeight = 187;
const myName = 'Andrii';
const mySurname = 'Kovalyk';
const myNationality = 'Ukrainian';
console.log(`${PI}, ${myAge}, ${myHeight}, ${myName}, ${mySurname}, ${myNationality}.`);
alert(`${PI},\n ${myAge},\n ${myHeight},\n ${myName},\n ${mySurname},\n ${myNationality}.`);
document.write(`<h2>${PI},</h2> <h3>${myAge},</h3> <h4>${myHeight},</h4> <h5>${myName},</h5> <h6>${mySurname},</h6> <b>${myNationality}.</b> <br>`);


console.log('............завдання 4................');
// при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

let name = prompt('введіть Ваше ім`я');
let surname = prompt('введіть Ваше прізвище');
let lastName = prompt('як Вас по батькові?');
console.log(`${surname} ${name} ${lastName}.`);
alert(`вітаю Вас ${surname} ${name} ${lastName}.`);
document.write(`${surname} ${name} ${lastName}.`)


console.log('............завдання 5................');
// Взять переменные из задания 4 и сконкатенировать их в одной переменной person

let person = surname+' '+name+' '+lastName;
console.log(person); 


console.log('............завдання 7................');
// при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
let num11 = +prompt('enter num11');
let num12 = +prompt('enter num12');
let num13 = +prompt('enter num13');
console.log(num11+', '+num12+', '+num13+'.');


console.log('............завдання 8................');
// при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

let a = prompt('a'),
    b = prompt('b'),
    c = prompt('c'),
    d = prompt('d');
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
d = parseInt(d);
let rslt = a + b + c + d;
console.log(rslt);


console.log('............завдання 9................');
// при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

let a1 = prompt('a1 with point'),
    b1 = prompt('b1 with point'),
    c1 = prompt('c1 wiyh point');
a1 = parseFloat(a1);
b1 = parseFloat(b1);
c1 = parseFloat(c1);
let rslt1 = a1 + b1 + c1;
console.log(rslt1);


console.log('............завдання 10................');
// при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав 
// результат в переменную  и вывести в консоль браузера
let A = Math.round(prompt('enter A with poitn'));
let B = Math.round(prompt('enter B with poitn'));
let C = Math.round(prompt('enter C with poitn'));
let sum = A + B + C;
console.log(sum);


console.log('............завдання 11................');
// при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. 
// Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
let A1 = Math.round(+prompt('enter A1 with point')),
    B1 = Math.round(+prompt('enter B1 with point'));
let C1 = Math.pow(A1, B1);
console.log(C1);


console.log('............завдання 12................');
// При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль 
// let a = 100; let b = '100'; let c = true; let d = undefined;
let a22 = 100; 
let b22 = '100';
let c22 = true; 
let d22 = undefined;
console.log(typeof a22);
console.log(typeof b22);
console.log(typeof c22);
console.log(typeof d22);


console.log('............завдання 13................');
// Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
//     5 ? 6 -> true
//     5 ? 6 -> false
//     5 ? 6 -> false
//     5 ? 6 -> false
//     10 ? 10 -> true
//     10 ? 10 -> true
//     10 ? 10 -> false
//     10 ? 10 -> false
//     10 ? 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true
let a222 = 5 < 6,
    b222 = 5 > 6,
    c222 = 5 >= 6,
    d222 = 5 === 6,
    e222 = 10 == 10,
    f222 = 10 === 10,
    g222 = 10 != 10,
    h222 = 10 > 10,
    i222 = 10 < 10,
    j222 = 123 === '123',
    k222 = 123 == '123';
console.log(a222);
console.log(b222);
console.log(c222);
console.log(d222);
console.log(e222);
console.log(f222);
console.log(g222);
console.log(h222);
console.log(i222);
console.log(j222);
console.log(k222);