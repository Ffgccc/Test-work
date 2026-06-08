import React, { useState, useEffect } from 'react';
import { getBooks, saveBooks, getAuthors, saveAuthors, initData } from './storage';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import BookList from './components/Books/BookList';
import AddBook from './components/Books/AddBook';
import UpdateBook from './components/Books/UpdateBook';
import FilterBooks from './components/Books/FilterBooks';
import AddAuthor from './components/Authors/AddAuthor';
import DeleteAuthor from './components/Authors/DeleteAuthor';
import Export from './components/Export';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    initData();
    setBooks(getBooks());
    setAuthors(getAuthors());
    setFilteredBooks(getBooks());
    const isLogged = localStorage.getItem('loggedIn') === 'true';
    setLoggedIn(isLogged);
  }, []);

  useEffect(() => {
    if (loggedIn) {
      saveBooks(books);
      saveAuthors(authors);
      setFilteredBooks(books);
    }
  }, [books, authors, loggedIn]);

  const addBook = (book) => {
    const newId = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
    setBooks([...books, { ...book, id: newId }]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map(b => b.id === updatedBook.id ? updatedBook : b));
    setEditingBook(null);
  };

  const deleteBook = (id) => {
    setBooks(books.filter(b => b.id !== id));
  };

  const addAuthor = (author) => {
    const newId = authors.length ? Math.max(...authors.map(a => a.id)) + 1 : 1;
    setAuthors([...authors, { ...author, id: newId }]);
  };

  const deleteAuthor = (authorId) => {
    const authorToDelete = authors.find(a => a.id === authorId);
    if (authorToDelete) {
      setAuthors(authors.filter(a => a.id !== authorId));
      setBooks(books.filter(b => b.author !== authorToDelete.name));
    }
  };

  if (!loggedIn) return <Login setLoggedIn={setLoggedIn} />;

  return (
    <div className="container">
      <h1>Library Manager</h1>
      <Logout setLoggedIn={setLoggedIn} />
      <hr />
      <FilterBooks books={books} setFilteredBooks={setFilteredBooks} />
      <BookList books={filteredBooks} onDeleteBook={deleteBook} onUpdateBook={setEditingBook} />
      <AddBook onAddBook={addBook} authors={authors} />
      <AddAuthor onAddAuthor={addAuthor} />
      <DeleteAuthor authors={authors} onDeleteAuthor={deleteAuthor} />
      <Export books={books} />
      {editingBook && <UpdateBook book={editingBook} onUpdate={updateBook} onCancel={() => setEditingBook(null)} />}
    </div>
  );
}

export default App;