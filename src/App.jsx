import './stylesheets/App.css'
import library from './data/library.json'
import { useState } from 'react';
import BookTable from './components/bookTable';

const CreateBook = (name, author, game) => {
  return { name, author, game }
}

function App() {
  const [BookList, setBookList] = useState(library);

  const [BookName, setBookName] = useState('');
  const [Author, setAuthor] = useState('');
  const [Game, setGame] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()

    setBookList(() => [...BookList, CreateBook(BookName, Author, Game)])
    setBookName('')
    setAuthor('')
    setGame('')
  }

  return (
    <>
      <BookTable bookList={BookList} />
      <form>
        <label>
          Book:
          <input id='bookName' type='text' value={BookName} onChange={e => setBookName(e.target.value)} />
        </label>
        <label>
          Author:
          <input id='author' type='text' value={Author} onChange={e => setAuthor(e.target.value)} />
        </label>
        <label>
          Book:
          <input id='game' type='text' value={Game} onChange={e => setGame(e.target.value)} />
        </label>
        <input id='submit' type='submit' value={'Add Book'} onClick={e => onSubmit(e)}/>
      </form>
    </>
  )
}

export default App