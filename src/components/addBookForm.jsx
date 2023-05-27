import { useState } from 'react';
import PropTypes from 'prop-types';

const CreateBook = ({BookName, Author, Game}) => {
  return { "name": BookName, "author": Author, "game": Game }
}

const TextInput = (props) => {
  TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  }

  return <>
    <label>
      {props.label}
      <input id={props.id} type='text' value={props.value} onChange={e => props.handleChange(e)} />
    </label>
  </>
}

const AddBookForm = (props) => { 
  AddBookForm.propTypes = {
    addBook: PropTypes.func.isRequired,
  }

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
    <TextInput id='BookName' label='Book: ' value={inputs.BookName} handleChange={handleChange} />
    <TextInput id='Author' label='Author: ' value={inputs.Author} handleChange={handleChange} />
    <TextInput id='Game' label='Game: ' value={inputs.Game} handleChange={handleChange} />
    <input id='submit' type='submit' value={'Add Book'} onClick={e => onSubmit(e)}/>
  </form>
}

export default AddBookForm