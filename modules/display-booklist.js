import Book from './books.js';

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
          const bookDiv = document.createElement('div');
          bookDiv.classList.add('books');
          const childDiv = document.createElement('div');
          childDiv.classList.add('d-flex', 'child');
          childDiv.innerHTML = `
          <p class="title"><b>"${book.title}"  by ${book.author}</b></p>
          `;
          const removeButton = document.createElement('button');
          removeButton.classList.add('removeBtn');
          removeButton.innerHTML = '<b>Remove</b>';
          childDiv.appendChild(removeButton);
          bookDiv.appendChild(childDiv);

          document.getElementById('showBooks').appendChild(bookDiv);

          removeButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.remove(index);
          });
        });
      } else {
        document.getElementById('showBooks').innerHTML = '';
      }
    }

    remove(index) {
      this.list.splice(index, 1);
      localStorage.setItem('Books', JSON.stringify(this.list));
      this.render();
    }
}

export { BookList };