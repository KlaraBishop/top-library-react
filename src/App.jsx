import './stylesheets/App.css'
import { useEffect, useState } from 'react';
import BookTable from './components/bookTable';
import AddBookForm from './components/addBookForm';
import axios from 'axios';

function App() {
  const [BookList, setBookList] = useState([]);

  const addBook = (book) => {
    const lastBook = BookList.slice(-1)
    
    setBookList(() => [...BookList, {...book, "id": lastBook[0].id++}])

    axios.post('http://localhost:3000/books', book)
  }

  const deleteBook = (id) => {
    setBookList(() => BookList.filter(book => book.id !== id))

    axios.delete(`http://localhost:3000/books/${id}`)
  }

  useEffect (() => {
    axios.get('http://localhost:3000/books')
    .then(response => setBookList(response.data))
  },[])

  return <>
      <BookTable bookList={BookList} deleteClick={deleteBook} />
      <AddBookForm addBook={addBook} />
    </>
}

export default App