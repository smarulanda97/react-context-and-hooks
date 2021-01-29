import React,{ useContext } from 'react';
import { BookContext } from './../context/BookContext';

const BookDetail = ({ book }) => {
  const { dispatch } = useContext(BookContext);

  return (
    <li onClick={() => dispatch({ type: 'REMOVE_BOOK', book })}>
      <div className="title">{ book.title }</div>
      <div className="author">{ book.author }</div>
    </li>
  )
}

export default BookDetail;