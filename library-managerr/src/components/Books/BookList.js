import React from 'react';

const BookList = ({ books, onDeleteBook, onUpdateBook }) => {
  return (
    <div>
      <h3>Book List</h3>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author} ({book.year})
            <button onClick={() => onUpdateBook(book)}>Edit</button>
            <button onClick={() => onDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;