import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Reservations</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
