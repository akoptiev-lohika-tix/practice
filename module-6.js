// 1. Створити список із назвами книг використовуючи метод append.

// 2. Змінити розмір шрифту для кожної книжки  та додати нижній марджин

// 3. Книга у якої рейтинг менше ніж 8 повинен бути червоного кольору.

// 4. Створити такий же список використовуючи insertAdjacentHTML

// 5. Додати Title використовуючи insertAdjacentHTML

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

// const bookList = document.querySelector('.books-list');

// const bookItemList = books
//     .map(
//         (book) => `
// <li class="${book.author}">
//   <p>${book.title}</p>
// </li>
// `
//     )
//     .join('');

// bookList.insertAdjacentHTML('afterbegin', bookItemList);

// const title = `<h1>Books</h1>`;
// bookList.insertAdjacentHTML('beforebegin', title);

// console.log(bookList.children);

// bookList.children[0].remove();

// const bookItemList = books.map((book) => {
//     const bookItem = document.createElement('li');
//     bookItem.textContent = book.title;
//     bookItem.classList.add('book');

//     addClass(book, bookItem);

//     // if (book.rating < 8) {
//     //     bookItem.classList.add('low-rated');
//     // }

//     // bookItem.style.cssText = `font-size: 22px`;
//     // bookItem.style.marginBottom = '30px';

//     return bookItem;
// });

// function addClass(item, el) {
//     if (item.rating < 8) {
//         el.classList.add('low-rated');
//     }
// }

// bookList.append(...bookItemList);

//  books.forEach((book) => {
//     const bookItem = document.createElement('li');
//     bookItem.textContent = book.title;

//     bookList.append(bookItem);
// });

