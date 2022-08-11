import { useState } from 'react';
import BookForm from './components/BookForm/BookForm';
import BooksList from './components/BooksList/BooksList';
import shortid from 'shortid';

const App = () => {
  return (
    <div>
      <h1>Books App</h1>
      <BooksList />
      <BookForm />
    </div>
  );
};

export default App;
