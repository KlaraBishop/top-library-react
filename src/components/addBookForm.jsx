import { useState } from 'react';
import PropTypes from 'prop-types';

const CreateBook = ({BookName, Author, Game}) => {
  return { "name": BookName, "author": Author, "game": Game }
}

const AddBookForm = (props) => { 
  AddBookForm.propTypes = {
    addBook: PropTypes.func.isRequired,
  };

  const [inputs, setInputs] = useState(() => ({ "BookName": '', "Author": '', "Game": ''}))
  
  const handleChange = (event) => {
    const name = event.target.id
    const value = event.target.value

    setInputs(inputs => ({...inputs, [name]: value}))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const newBook = CreateBook(inputs)
    props.addBook(newBook)
  }

  return <form>
    <label>
      Book:
      <input id='BookName' type='text' value={inputs.BookName} onChange={handleChange} />
    </label>
    <label>
      Author:
      <input id='Author' type='text' value={inputs.Author} onChange={handleChange} />
    </label>
    <label>
      Game:
      <input id='Game' type='text' value={inputs.Game} onChange={handleChange} />
    </label>
    <input id='submit' type='submit' value={'Add Book'} onClick={e => onSubmit(e)}/>
  </form>
}

export default AddBookForm