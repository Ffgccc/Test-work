import React, { useState } from 'react';

const AddAuthor = ({ onAddAuthor }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    onAddAuthor({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Author</h3>
      <input placeholder="Author name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Add Author</button>
    </form>
  );
};

export default AddAuthor;