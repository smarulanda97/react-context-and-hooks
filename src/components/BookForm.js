import React, { useContext, useState } from  'react';
import { BookContext } from './../context/BookContext'

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle('');
    setAuthor('');
    dispatch({ type: 'ADD_BOOK', book: { author, title }});
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        required
        type="text"
        value={title}
        placeholder="Book title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input 
        required
        type="text"
        value={author}
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="Add Book"/>
    </form>
  )
}

export default BookForm;