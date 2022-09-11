'use strict'
// MODULE -3-

// // Потрібно мутувати масив так щоб залишились тільки (імена) елементи типу String.

const names = ['Anna', 3, 12, 'Roma', 17, 'Kate', 14, 'Oleg'];

function filterNames(namesList) {
    for(let i = namesList.length - 1; i >= 0; i--) {
        console.log(namesList[i]);
        if(typeof namesList[i] !== 'string') {
            namesList.splice(i, 1);
        }
    }

    return namesList;
}

console.log(filterNames(names))


// const arr1 = [1, 2, 1, 4];
// const arr2 = [2, 1, 3, 4];
// const arr3 = [1, 2, 3, 4, 5];

// function compareArrays(array1, array2) {
//      if(array1.length !== array2.length) {
//          return false;
//      }
//
//     for(let i = 0; i < array1.length; i++) {
//         if(array1[i] !== array2[i]) {
//             return false;
//         }
//     }
//
//     return true;
// }
//
//
// console.log(compareArrays(arr1, arr3))

// arr1 === arr2// true
// arr1 === arr3 // false

//Створити функцію яка буде рахувати за скільки днів равлик
// зможе виповзти з колодязя, функція приймає 1 параметр.
//1 глибина колодязя (depth)
//Функція повертає кількість днів
// Умови:
// вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз


// if(isDay) {
//     daysToCover++;
//     distanceToCover -= 7;
// } else {
//     distanceToCover += 2;
// }
//
// isDay = !isDay;

// function calcDays(depth) {
//     let distanceToCover = depth;
//     let daysToCover = 0;
//
//     // let isDay = true;
//
//    while(distanceToCover > 0) {
//        daysToCover += 1;
//        distanceToCover -= 7;
//        if(distanceToCover <= 0) {
//            return daysToCover;
//        }
//        distanceToCover += 2;
//    }
//
//    return daysToCover;
// }
//
// console.log(calcDays(17))
// calcDays(42)//виповзе за 8 днів
// calcDays(17)//виповзе за 3 дні
// calcDays(18)//виповзе за 4 дні

