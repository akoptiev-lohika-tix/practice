'use strict';

// function hello() {
//     console.log(this)
// }

// const hello2 = () => {
//     console.log(this)
// }

// hello()
// hello2()

// const user = {
//     data: [1, 2, 4, 5],

//     showRole() {

//         const f = () => {
//             console.log(this)
//         }

//         f()
//     }
// };

// user.showRole();

// user.showR()
// admin.showR()

// showRole.call(user)
// showRole.call(admin)

// Перед звільненням розробник зламав вихідний код
// управління акаунтами користувачів нашого сервісу доставки
// їжі. Виконай рефакторинг методів об'єкта customer, розставивши
// відсутні this під час звернення до властивостей об'єкта.

// Після оголошення об'єкта ми додали виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.
// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//       return this.balance;
//     },
//     getDiscount() {
//       return this.discount;
//     },
//     setDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost - cost * this.discount;
//       this.orders.push(order);
//     },
//     // Change code above this line
//   };

//   const newCustomer = Object.create(customer);

//   newCustomer.balance = 10000
//   console.log(newCustomer.getBalance())

//   console.log(newCustomer)

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// const father = {
//     name: 'Father',
//     lastName: 'Smith'
// }

// const child = {
//     name: 'Child',
// }

// Object.setPrototypeOf(child, null)
// // console.log(child.hasOwnProperty('name'))
// // console.log(Object.getPrototypeOf(child))
// console.log(child)

// // const child = Object.create(father)
// // child.name = 'Child'

// function User (name) {
// //   const this = {}

//   this.name = name
//   this.role = "user";
//   this.rating = 0;

// //   return user;
// }

// const misha = new User('misha')

// const mykola = new User('mykola')

// console.log(misha)
// console.log(mykola)

// Створи клас BankAccount, конструктор якого приймає наступні початкові дані: ім'я клієнта name та початковий баланс банківського рахунку money. Також в класі мають бути наступні методи:

// getInfo - повертає рядок з інформацією про клієнта в форматі з прикладу.
// addMoney - приймає суму amount, на яку потрібно збільшити баланс, та рядок info про операцію
// withdrawMoney - приймає суму amount, на яку потрібно зменшити баланс, та рядок info про операцію
// getAccountHistory - повертає історію операцій по рахунку.

// class BankAccount {
//     constructor(name, amount) {
//         this.name = name;
//         this.amount = amount;
//         this.history = [`Initial: ${amount}`];
//     }

//     getInfo() {
//         return `Name: ${this.name}, Amount: ${this.amount}`;
//     }

//     addMoney(amount, operation) {
//         this.amount += amount;
//         this.history.push(`${operation}: ${amount}`);
//     }

//     withdrawMoney(amount, operation) {
//         this.amount -= amount;
//         this.history.push(`${operation}: -${amount}`);
//     }

//     getAccountHistory() {
//         return this.history;
//     }
// }

// class NewBankAccount extends BankAccount {
//     constructor(name, amount, bonus) {
//        super(name, amount) 

//        this.bonus = bonus;
//     }

//     addMoney(amount, operation) {
//         super.addMoney(amount, operation)
//         console.log('added money')
//     }
// }


// const mykola = new NewBankAccount('Mykola', 200, 10)
// const dmytro = new BankAccount('Dmytro', 1000);


// console.log(dmytro instanceof BankAccount)
// console.log(dmytro instanceof NewBankAccount)


// mykola.addMoney(2000, 'salary');
// console.log(mykola)






// const pavel = new BankAccount('Pavel', 400);

// // console.log(pavel.getInfo())
// dmytro.getInfo(); // 'Name: Dmytro, Amount: 1000'
// dmytro.addMoney(2000, 'salary');

// dmytro.withdrawMoney(500, 'new phone');
// dmytro.withdrawMoney(500, 'apartment rent');

// dmytro.getInfo(); // 'Name: Dmytro, Amount: 2500'
// dmytro.getInfo(); // 'Name: Dmytro, Amount: 2000'

// dmytro.getAccountHistory();
// // ['Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

// console.log(dmytro.getAccountHistory());

// pavel.getInfo(); // 'Name: Pavel, Amount: 400'
// pavel.getAccountHistory(); // ['Initial: 400']



// class Car {
//     static MAX_PRICE = 40;

//     constructor(name) {
//      audi.name = name;
//     }

    
//     get this() {
//         console.log(audi.MAX_PRICE)
//     }
// }

// const audi = new Car('audi')


// console.log(audi)
// console.dir(Car)