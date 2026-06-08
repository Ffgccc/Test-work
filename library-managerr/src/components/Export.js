import React from 'react';

const Export = ({ books }) => {
  const handleExport = () => {
    const dataStr = JSON.stringify(books, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'books_export.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return <button onClick={handleExport}>Export Books (JSON)</button>;
};

export default Export;