import './stylesheets/App.css'
import library from './data/library.json'
import { useState } from 'react';
import BookTable from './components/bookTable';
import AddBookForm from './components/addBookForm';

function App() {
  const [BookList, setBookList] = useState(library);

  const addBook = (book) => {
    setBookList(() => [...BookList, book])
  }

  return <>
      <BookTable bookList={BookList} />
      <AddBookForm addBook={addBook} />
    </>
}

export default App