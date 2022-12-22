import React from 'react';
import './navbar.css';

import { useState } from 'react';
import {GiHamburgerMenu}from 'react-icons/gi';

const Navbar = () => {
 
    return (
        
            <nav className= 'navbar  nav-2 navbar-expand-lg border-bottom border-secondary'>
  <a className="navbar-brand" href="/"><i></i>Calcul</a>
 
  <button className="navbar-toggler navbar-dark pull-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <GiHamburgerMenu/>
  </button>
 
  <div className=" collapse navbar-collapse" id="navbarNavDropdown">
    <div className="navbar-nav">
    <a className="nav-item nav-link" href="/">Home</a>
      <a className="nav-item nav-link" href="/Calcul">Calculator</a>
      <a className="nav-item nav-link" href="/PeterNumber">PeterNumber</a>
      <a className="nav-item nav-link" href="/Graph">Graph</a>
    </div>
    
  </div>
  
</nav>
      
    );
}

export default Navbar;