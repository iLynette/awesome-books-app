const listNav = document.querySelector('.list-nav');
const addBooksNav = document.querySelector('.books-nav');
const contactNav = document.querySelector('.contact-nav');

const addBook = document.querySelector('.add-books');
const showContact = document.querySelector('.contact');
const showBookList = document.querySelector('.book-list');

function bookList() {
  showBookList.style.display = 'block';
  listNav.style.color = 'blue';
  contactNav.style.color = 'black';
  addBooksNav.style.color = 'black';
  addBook.style.display = 'none';
  showContact.style.display = 'none';
}

function addBookForm() {
  addBook.style.display = 'flex';
  addBooksNav.style.color = 'blue';
  contactNav.style.color = 'black';
  listNav.style.color = 'black';
  showBookList.style.display = 'none';
  showContact.style.display = 'none';
}

function contact() {
  showContact.style.display = 'flex';
  contactNav.style.color = 'blue';
  addBooksNav.style.color = 'black';
  listNav.style.color = 'back';
  addBook.style.display = 'none';
  showBookList.style.display = 'none';
}

export {
  bookList, addBookForm, contact, listNav, addBooksNav, contactNav, addBook, showContact,
};