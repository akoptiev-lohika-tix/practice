'use strict'
// MODULE -1- -2-
//Перевірити чи юзер ввів емейл.
// в prompt() юзер вводить емейл якщо ця стрінга містить '@' та '.'
// ми виводимо меседж що перевірка успішна, якщо ні то виведимо
// що перевірка не успішна

const emailInput = prompt();

if(emailInput.includes('@') && emailInput.includes('.')) {
    alert('email is valid');
} else {
    alert('email is invalid');
}

// Робимо імітацію логіна юзера і визначаємо до якої групи він відноситься
// В перший prompt() юзер вводить своє імя, в 2 prompt() вводить свій вік
// Якщо юзер молодший 18 років виводемо стрінгу
// `User ${name} has been added to the children group
// Якщо юзеу 18 років і більше виводемо стрінгу
// `User ${name} has been added to the adult group

const name = prompt('enter your name');

const age = prompt('enter your age');

if (age >= 18) {
    console.log(`User ${name} has been added to the adult group`)
} else {
   alert(`User ${name} has been added to the children group`)
}

//Замінити всі розширення файлів з .css на .js

const files = 'index.css, script.js, style.css, step-types.json, firebase.css';

const newFiles = files.replace('.css', '.js');

console.log(newFiles)

// Потрібно створити світлофор за допомогою switch()
// Користувач вводить в prompt() колір який він бачить
// В результаті отримує меседж з дією яку повинен виконати
// Світлофор може мати 4 стани green (GO),
// yellow (READY),red (STOP),
// будь що інше означає що сфітлофор не працює (BE CAREFUL)

const colorInput = prompt('enter a color');

const inputTransformed = colorInput.toLowerCase();

switch(inputTransformed) {
    case 'green':
        alert('GO');
        break;

    case 'yellow':
        alert('READY');
        break;

    case 'red':
        alert('STOP');
        break;

    default:
        alert('BE CAREFUL')
}

//Замінити всі розширення файлів з .css на .js

const files = ['index.css', 'script.js', 'style.css', 'step-types.json', 'firebase.css'];

for (let i = 0; i < files.length; i++) {
 if(files[i].includes('.css')) {
     files[i] = files[i].replace('.css', '.js')
 }
}

console.log(files)

// Потрібно мутувати масив так щоб залишились тільки (імена) елементи типу String.

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

console.log(filterNames(names));

//Створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів. (users)
//2 параметр це масив з чоловічими іменами. (mens)
// Функція повина повертати масив з жіночими іменами.

const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
const mens = ['Artem', 'Maksim', 'David', 'Roman'];

function sortUsers(users, mens) {
   const women = [];

   for(let i = 0; i < users.length; i++) {
       if(!mens.includes(users[i])) {
           women.push(users[i]);
       }
   }

   return women;
}

console.log(sortUsers(users, mens));


// Compare arrays
const arr1 = [1, 2, 1, 4];
const arr2 = [2, 1, 3, 4];
const arr3 = [1, 2, 3, 4, 5];

function compareArrays(array1, array2) {
     if(array1.length !== array2.length) {
         return false;
     }

    for(let i = 0; i < array1.length; i++) {
        if(array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
}


console.log(compareArrays(arr1, arr3))

//Створити функцію яка буде приймати 2 параметри:
//1 масив імен які вже зареєстровані. (users)
//2 ім'я введене в prompt(). (name)
//Функція повертає меседж.
//Якщо юзер з таким ім'ям вже існує повертаємо меседж що потрібно обрати інше ім'я
//Якщо юзера з таким ім'ям не існує добавляємо його в масив та вказуємо що юзера додано успішно.

const users = ['artem', 'anna', 'maks', 'vlad'];
const userName = prompt('Enter you name')

function createUser(users, name) {

    if(users.includes(name)) {
        return 'Choose name'
    } else {
        users.push(userName);
        return 'user added';
    }
}


const result = createUser(users, userName);

console.log(result)

//Створіть функцію, яка приймає 1 параметр
//1 масив імен користувачів, які поставили лайки.
//Функція повертає меседж, як вказано у прикладах:
//Використовувати switch()

function stringBuilder(users){
   switch(users.length) {
       case 0:
           return "no one likes this";
       case 1:
           return `${users[0]} likes this`;
       case 2:
           return  `${users.join(' and ')} like this`;
       case 3:
           return `${users[0]}, ${users[1]} and ${users[2]} like this`;
       default:
           return `${users[0]}, ${users[1]} and ${users.length - 2} others like this`;
   }
}

stringBuilder([])//"no one likes this";
stringBuilder(["Peter"])//"Peter likes this";
stringBuilder(["Jacob", "Alex"])//"Jacob and Alex like this";
stringBuilder(["Max", "John", "Mark"])//"Max, John and Mark like this";
stringBuilder(["Alex", "Jacob", "Mark", "Max"])//"Alex, Jacob and 2 others like this;

//Створити функцію яка буде рахувати за скільки днів равлик
// зможе виповзти з колодязя, функція приймає 1 параметр.
//1 глибина колодязя (depth)
//Функція повертає кількість днів
// Умови: вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз




function calcDays(depth) {
    let distanceToCover = depth;
    let daysToCover = 0;

   while(distanceToCover > 0) {
       daysToCover += 1;
       distanceToCover -= 7;
       if(distanceToCover <= 0) {
           return daysToCover;
       }
       distanceToCover += 2;
   }

   return daysToCover;
}

console.log(calcDays(17))
calcDays(42)//виповзе за 8 днів
calcDays(17)//виповзе за 3 дні
calcDays(18)//виповзе за 4 дні


// Cтворити функцію яка буде приймати 1 параметр та
// знаходити в масиві елементи що дублюються і потім ці елменти добавляти в новий масив
// 1 масив чисел (arr)
//

const numbers = [1, 2, 3, 2, 1, 17, 19, 17, 19, 17];

function getCommonElements(arr){
   const result = [];

   for(let i = 0; i < arr.length; i++) {
       if(arr.indexOf(arr[i]) !== i && !result.includes(arr[i])) {
           result.push(arr[i]);
       }
   }

   return result;
};
console.log(getCommonElements(numbers));

// MODULE -3-

// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та
// повертати списко імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1
// параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я
// факультету в якого більше очків

const hogvarts = {
    griffindor: [
        {
            name: "Harry",
            points: 17
        },
        {
            name: "Hermiona",
            points: 19
        },
        {
            name: "Ron",
            points: 14
        },
    ],
    sliserin: [
        {
            name: "Draco",
            points: 17,
        },
        {
            name: "Goyl",
            points: 14
        },
        {
            name: "Crabbe",
            points: 5
        },
    ],
    dumbledoors: [
        {
            name: "Draco",
            points: 50,
        },
        {
            name: "Goyl",
            points: 40
        },
        {
            name: "Crabbe",
            points: 5
        },
    ],

    getNames(department) {
        if(!this.hasOwnProperty(department)) {
            return 'No departments here';
        }

        const names = [];

        for(const student of this[department]) {
            names.push(student.name)
        }

        return names;
    },

    getPoints(department) {
        if(!this.hasOwnProperty(department)) {
            return 'No departments here';
        }

        let totalPoints = 0;

        for(const student of this[department]) {
            totalPoints += student.points;
        }

        return totalPoints;
    },

    getTopPointsDepartment() {
        const namesArray = Object.keys(this);

        const listPoints = {};

        for (const key of namesArray) {
            if(typeof this[key] !== "function") {
                const sumOfPoints = this.getPoints(key);
                listPoints[key] = sumOfPoints;
            }
        }

        let maxPoints = 0;
        let maxDepartment = '';

        for(const key in listPoints) {
            if(listPoints[key] > maxPoints) {
                maxPoints = listPoints[key];
                maxDepartment = key;
            }
        }

        return maxDepartment;
    }

}

console.log(hogvarts.getTopPointsDepartment())
