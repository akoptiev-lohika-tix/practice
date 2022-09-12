'use strict'
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та
// повертати списко імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1
// параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я
// факультету в якого більше очків

const hogvarts = {
    griffindor: [
        {
            name: 'Harry',
            points: 17,
        },
        {
            name: 'Hermiona',
            points: 19,
        },
        {
            name: 'Ron',
            points: 14,
        },
    ],
    sliserin: [
        {
            name: 'Draco',
            points: 17,
        },
        {
            name: 'Goyl',
            points: 14,
        },
        {
            name: 'Crabbe',
            points: 5,
        },
    ],
    dumbledoors: [
        {
            name: 'Draco',
            points: 50,
        },
        {
            name: 'Goyl',
            points: 40,
        },
        {
            name: 'Crabbe',
            points: 5,
        },
    ],

    getNames(department) {
        if (!this.hasOwnProperty(department)) {
            return 'No departments here';
        }

        const names = [];

        for (const student of this[department]) {
            names.push(student.name);
        }

        return names;
    },

    getPoints(department) {
        if (!this.hasOwnProperty(department)) {
            return 'No departments here';
        }

        let totalPoints = 0;

        for (const student of this[department]) {
            totalPoints += student.points;
        }

        return totalPoints;
    },

    getTopPointsDepartment() {
        const namesArray = Object.keys(this);

        const listPoints = {};

        for (const key of namesArray) {
            if (typeof this[key] !== 'function') {
                const sumOfPoints = this.getPoints(key);
                listPoints[key] = sumOfPoints;
            }
        }

        let maxPoints = 0;
        let maxDepartment = '';

        for (const key in listPoints) {
            if (listPoints[key] > maxPoints) {
                maxPoints = listPoints[key];
                maxDepartment = key;
            }
        }

        return maxDepartment;
    },
};

console.log(hogvarts.getTopPointsDepartment());