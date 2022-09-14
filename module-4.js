// 'use strict';
// // callback base

// function forLoop(num, onConsole) {
//     for (let i = 1; i <= num; i++) {
//         onConsole(i);
//     }
// }

// function showInConsole(number) {
//     console.log(number);
// }

// const multiplyNumber = (number) => {
//     console.log('Number');
//     return number;
// };
// forLoop(5, multiplyNumber);

// // Створи функцію makeOrder яка буде приймати
// // назву товару який заказали та 2 коллбеки
// // (1й буде доставляти заказ, 2й буде відміняти заказ коли його нема у списку).
// const goods = ['Apple', 'Lemon', 'Peanut'];

// function makeOrder(order, onDelivery, onCancel) {
//     if (goods.includes(order)) {
//         return onDelivery(order);
//     }

//     return onCancel(order);
// }

// const successOrder = (good) =>
//     console.log(`You order of ${good} is success and going to your adress`);

// const canceledOrder = (good) =>
//     console.log(`We do not have ${good} in our store now`);

// makeOrder('Peach', successOrder, canceledOrder);

// // Порахуйте загальну сумму елементів масиву numbers

// const numbers = [7, 15, 66, 54, 21, 99];

// const getSum = (arr) => {
//     let sum = 0;

//     arr.forEach((el) => (sum += el));

//     console.log(sum);
//     return sum;
// };

// const arrayInfo = (nums) => {
//     nums.forEach((el, i, arr) => {
//         console.log(
//             `Number is ${el} with index ${i} and length of array ${arr.length}`
//         );
//     });
// };

// arrayInfo(numbers);

// // 1. Створіть функцію, яка буде повертати масив із назвами книг
// // 2. Створіть функцію, яка буде повертати масив книг, оцінка яких вища за 8
// // 3. Створіть функцію, яка поверне середній
// // рейтинг усіх кних у массиві books

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     {
//         title: 'Redder Than Blood',
//         author: 'Tanith Lee',
//         rating: 7.94,
//     },
//     {
//         title: 'Enemy of God',
//         author: 'Bernard Cornwell',
//         rating: 8.67,
//     },
// ];

// const getBookTitles = (collection) => {
//     const titles = [];
//     collection.forEach((book) => titles.push(book.title));

//     return titles;
// };

// console.log(getBookTitles(books));

// const getBooksWithRating = (collection, rating) => {
//     const ratedBooks = [];

//     collection.forEach((book) => {
//         if (book.rating > rating) {
//             ratedBooks.push(book);
//         }
//     });

//     return ratedBooks;
// };

// console.log(getBooksWithRating(books, 7.8));

// const getAvarageRating = (col) => {
//     let avarageRating = 0;

//     col.forEach((book, i, arr) => {
//         avarageRating += book.rating / arr;
//     });

//     return avarageRating;
// };

// console.log(getAvarageRating(books));

'use strict';

const numbers = [1, 2, 3, 5];

// console.log(numbers)
// console.log(mappedArray)

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// const maleList = characters
//     .filter((person) => person.gender !== 'female')
//     .map((person) => person.height);

// console.log(maleList);

// const isMale = characters.every((person) => person.gender === 'male');
// const isFemale = characters.some((person) => person.gender === 'female');
// console.log(isMale);
// console.log(isFemale);

// const yellowEyePerson = characters.find((person) => person.eye_color === 'blue')
// console.log(yellowEyePerson)

// const indexOfPerson = characters.findIndex((person) => Number(person.height) > 175);
// console.log(indexOfPerson)

let initial;

const sumMass = numbers.reduce((prev, curr) => prev + curr, initial)

console.log(sumMass)