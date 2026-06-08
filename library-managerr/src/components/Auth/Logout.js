import React from 'react';

const Logout = ({ setLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;