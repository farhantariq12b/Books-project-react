import React from 'react';
import SearchBar from './SearchBar';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 justify-content-between" style={{backgroundColor:'white'}}>
        <div className='container '>
      <a className="navbar-brand" href="#">
        Book Shelf
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <SearchBar />
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
