import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{padding:'10px',margin:'15px'}}>
      <Link to="/" style={{padding:'10px',margin:'15px'}}>Login</Link>
      <Link to="/dashboard" style={{padding:'10px',margin:'15px'}}>Dashboard</Link>
    </nav>
  );
};

export default Navbar;
