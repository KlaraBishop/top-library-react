import './stylesheets/App.css'
import { useEffect, useState } from 'react';
import BookTable from './components/bookTable';
import AddBookForm from './components/addBookForm';
import axios from 'axios';

function App() {
  const [BookList, setBookList] = useState([]);

  const addBook = (book) => {
    setBookList(() => [...BookList, book])

    axios.post('http://localhost:3000/books', book)
    .then(response => console.log(response))
  }

  useEffect (() => {
    axios.get('http://localhost:3000/books')
    .then(response => setBookList(response.data))
  },[])

  return <>
      <BookTable bookList={BookList} />
      <AddBookForm addBook={addBook} />
    </>
}

export default App