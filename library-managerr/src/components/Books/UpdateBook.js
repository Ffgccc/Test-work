import React, { useState, useEffect } from 'react';

const UpdateBook = ({ book, onUpdate, onCancel }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setYear(book.year);
    }
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...book, title, author, year: parseInt(year) });
  };

  if (!book) return null;

  return (
    <form onSubmit={handleSubmit}>
      <h3>Update Book</h3>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input value={year} onChange={(e) => setYear(e.target.value)} />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default UpdateBook;