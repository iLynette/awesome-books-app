class Book {
  constructor(title = null, author = null) {
    this.title = title;
    this.author = author;
  }
}

class BookList {
    list = [];

    addBook() {
      const title = document.querySelector('#title').value;
      const author = document.querySelector('#author').value;
      if (title !== '' && author !== '') {
        const book = new Book(title, author);
        this.list.push(book);
        localStorage.setItem('Books', JSON.stringify(this.list));
        this.list = JSON.parse(localStorage.getItem('Books'));
        this.render();
      }
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
    }

    render() {
      if (JSON.parse(localStorage.getItem('Books')) != null) {
        this.list = JSON.parse(localStorage.getItem('Books'));
        document.getElementById('showBooks').innerHTML = '';
        this.list.forEach((book, index) => {
          document.getElementById('showBooks').innerHTML += `
                <div class="books">
                    <div class="d-flex child">
                        <p class="title"><b>"${book.title}"  by ${book.author}</b></p>
                        <button class="removeBtn" onClick = 'books.remove(${index})'><b>Remove</b></button>
                    </div>
                </div> `;
        });
      } else {
        document.getElementById('showBooks').innerHTML = '';
      }
    }

    remove(index) {
      this.list.splice(index, 1);
      localStorage.setItem('Books', JSON.stringify(this.list));
      this.render();
      console.log(remove);
    }
}

const books = new BookList();
books.render();
document.getElementById('addBtn').addEventListener('click', () => {
  books.addBook();
});

export default { Book, BookList}