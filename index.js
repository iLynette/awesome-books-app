import updateTime from './modules/date.js';
import BookList from './modules/display-booklist.js';
import {
  bookList, addBookForm, contact, contactNav, listNav, addBooksNav, addBook, showContact,
} from './modules/nav.js';

const books = new BookList();
books.render(books);
document.getElementById('addBtn').addEventListener('click', () => {
  books.addBook();
});

setInterval(updateTime, 1000);

addBook.style.display = 'none';
showContact.style.display = 'none';

listNav.addEventListener('click', bookList);
addBooksNav.addEventListener('click', addBookForm);
contactNav.addEventListener('click', contact);