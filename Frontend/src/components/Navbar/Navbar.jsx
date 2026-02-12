import React from 'react';
import SearchBar from '../Searchbar/SearchBar'; // Import your functional SearchBar
const Navbar = ({ view, setView, searchTerm, onSearchChange }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/bookcygnus.png" alt="Cygnus Logo" className="nav-logo" onClick={() => setView("Jobs")} style={{cursor: 'pointer'}} />
        <ul className="nav-links">
          <li className={view === "Jobs" ? "active" : ""} onClick={() => setView("Jobs")}>Jobs</li>
          <li className={view === "Companies" ? "active" : ""} onClick={() => setView("Companies")}>Companies</li>
          <li className={view === "Services" ? "active" : ""} onClick={() => setView("Services")}>Services</li>
        </ul>
      </div>

      <div className="nav-right">
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;