import React, { useState } from 'react';

const AddBook = ({ onAddBook, authors }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !year) return;
    onAddBook({ title, author, year: parseInt(year) });
    setTitle('');
    setAuthor('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Book</h3>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <select value={author} onChange={(e) => setAuthor(e.target.value)}>
        <option value="">Select Author</option>
        {authors.map(a => <option key={a.id} value={a.name}>{a.name}</option>)}
      </select>
      <input placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;