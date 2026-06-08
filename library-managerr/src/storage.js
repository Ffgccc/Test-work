export const getBooks = () => {
  const books = localStorage.getItem('books');
  return books ? JSON.parse(books) : [];
};

export const saveBooks = (books) => {
  localStorage.setItem('books', JSON.stringify(books));
};

export const getAuthors = () => {
  const authors = localStorage.getItem('authors');
  return authors ? JSON.parse(authors) : [];
};

export const saveAuthors = (authors) => {
  localStorage.setItem('authors', JSON.stringify(authors));
};

// Initial demo data
export const initData = () => {
  if (!localStorage.getItem('books')) {
    saveBooks([
      { id: 1, title: 'i dont  have mouth and i must scream ', author: 'Harlan Ellison', year: 1967 },
      { id: 2, title: 'the lord of the rings', author: ' John Ronald Reuel Tolkien', year: 1954 }
    ]);
  }
  if (!localStorage.getItem('authors')) {
    saveAuthors([
      { id: 1, name: 'Harlan Ellison' },
      { id: 2, name: ' John Ronald Reuel Tolkien' }
    ]);
  }
};