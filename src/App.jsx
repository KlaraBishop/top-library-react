import './stylesheets/App.css'
import library from './data/library.json'
import { useState } from 'react';

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
      <table className='book-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Game</th>
          </tr>
        </thead>
        <tbody>
          {BookList.map(book => {
            return <tr key={book.name}> 
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.game}</td>
              </tr>
          })}
        </tbody>
      </table>

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