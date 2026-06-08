import React, { useState } from 'react';

const FilterBooks = ({ books, setFilteredBooks }) => {
  const [query, setQuery] = useState('');

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(value) ||
      book.author.toLowerCase().includes(value)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by title or author"
        value={query}
        onChange={handleFilter}
      />
    </div>
  );
};

export default FilterBooks;