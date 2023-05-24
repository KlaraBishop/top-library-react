import './stylesheets/App.css'
import { useState } from 'react';


function App() {
  const [BookList, setBookList] = useState(
    [
      "Starlover's Log",
      "Daggerfall Convenant Missive",
      "By Command of the Ascendant Order"
    ]
  );

  const [BookName, setBookName] = useState();

  const onSubmit = (e) => {
    e.preventDefault()

    setBookList(() => [...BookList, BookName])
    setBookName('')
  }

  return (
    <>
      <ul>
        {BookList.map(book => {
          return <li key={book}>{book}</li>
        })}
      </ul>

      <form>
        <label>
          Book:
          <input id='bookName' type='text' value={BookName} onChange={e => setBookName(e.target.value)} />
        </label>
        <input id='submit' type='submit' value={'Add Book'} onClick={e => onSubmit(e)}/>
      </form>
    </>
  )
}

export default App