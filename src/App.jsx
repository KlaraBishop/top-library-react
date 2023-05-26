import './stylesheets/App.css'
import { useEffect, useState } from 'react';
import BookTable from './components/bookTable';
import AddBookForm from './components/addBookForm';

function App() {
  const [BookList, setBookList] = useState([]);

  const addBook = (book) => {
    setBookList(() => [...BookList, book])
  }

  useEffect (() => {
    fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(data => setBookList(data))
  },[])

  return <>
      <BookTable bookList={BookList} />
      <AddBookForm addBook={addBook} />
    </>
}

export default App