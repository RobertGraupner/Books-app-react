import { useState } from 'react';
import BookForm from './components/BookForm/BookForm';
import BooksList from './components/BooksList/BooksList';
import shortid from 'shortid';

const App = () => {

  const [books, setBooks] = useState([
    { id: 1, title: 'Harry Potter i kamień filozoficzny', author: 'J. K. Rowling' },
    { id: 2, title: 'Anioły i Demony', author: 'Dan Brown' }
  ]);

  const removeBook = bookId => {
    setBooks(books.filter(book => book.id !== bookId));
  };

  const addBook = newBook => {
    setBooks([...books, { id: shortid(), title: newBook.title, author: newBook.author }]);
  };

  return (
    <div>
      <h1>Books App</h1>
      <BooksList books={books} removeBook={removeBook} />
      <BookForm addBook={addBook} />
    </div>
  );
};

export default App;
