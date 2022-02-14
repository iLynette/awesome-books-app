const listNav = document.querySelector('.list-nav');
const addBooksNav = document.querySelector('.books-nav');
const contactNav = document.querySelector('.contact-nav');

const addBook = document.querySelector('.add-books');
const showContact = document.querySelector('.contact');
const showBookList = document.querySelector('.book-list');

addBook.style.display = 'none';
showContact.style.display = 'none';

function bookList() {
  showBookList.style.display = 'block';
  listNav.style.color = 'blue';
  contactNav.style.color = 'black';
  addBooksNav.style.color = 'black';
  addBook.style.display = 'none';
  showContact.style.display = 'none';
}

listNav.addEventListener('click', bookList);

function addBookForm() {
  addBook.style.display = 'flex';
  addBooksNav.style.color = 'blue';
  contactNav.style.color = 'black';
  listNav.style.color = 'black';
  showBookList.style.display = 'none';
  showContact.style.display = 'none';
}

addBooksNav.addEventListener('click', addBookForm);

function contact() {
  showContact.style.display = 'flex';
  contactNav.style.color = 'blue';
  addBooksNav.style.color = 'black';
  listNav.style.color = 'back';
  addBook.style.display = 'none';
  showBookList.style.display = 'none';
}

contactNav.addEventListener('click', contact);

export { bookList, addBookForm, contact}