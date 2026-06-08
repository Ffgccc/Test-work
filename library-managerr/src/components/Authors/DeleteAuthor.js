import React from 'react';

const DeleteAuthor = ({ authors, onDeleteAuthor }) => {
  return (
    <div>
      <h3>Delete Author (and their books)</h3>
      <select onChange={(e) => {
        const authorId = parseInt(e.target.value);
        if (authorId) onDeleteAuthor(authorId);
      }}>
        <option value="">Select Author</option>
        {authors.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
      </select>
    </div>
  );
};

export default DeleteAuthor;