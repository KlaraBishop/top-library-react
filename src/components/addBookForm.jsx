import { useState } from 'react';
import PropTypes from 'prop-types';

const CreateBook = (name, author, game) => {
  return { name, author, game }
}

const AddBookForm = (props) => { 
  AddBookForm.propTypes = {
    addBook: PropTypes.func.isRequired,
  };

  const [BookName, setBookName] = useState('');
  const [Author, setAuthor] = useState('');
  const [Game, setGame] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()

    const newBook = CreateBook(BookName, Author, Game)
    props.addBook(newBook)

    setBookName('')
    setAuthor('')
    setGame('')
  }

  return <form>
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
}

export default AddBookForm