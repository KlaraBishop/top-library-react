import PropTypes from 'prop-types';

const BookTable = (props) => {
    BookTable.propTypes = {
      bookList: PropTypes.array.isRequired,
      deleteClick: PropTypes.func.isRequired,
    };

    const onDeleteClick = (id) => {
        props.deleteClick(id)
    }
  
    return <table className='book-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Game</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.bookList.map(book => {
          return <tr key={book.id}> 
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.game}</td>
              <td id="delete-button" onClick={() => onDeleteClick(book.id)}>Delete</td>
            </tr>
        })}
      </tbody>
  </table>
  }

export default BookTable;