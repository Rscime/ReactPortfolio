import React from 'react';
import '../styles/Navbar.css';

const styles = {
    navbarStyle: {
      background: '#93ab1b',
      justifyContent: 'flex-end',
    },
    navbarTitle: {
      listStyleType: 'none',
      display: 'flex',
      marginLeft: '50%', 
      justifyContent: 'space-between',
    },
    navbarLinks: {
      textDecoration: 'none',
      fontWeight: '500',
    }
  };

function Navbar() {
    return (
      <nav style={styles.navbarStyle} className="navbar">
        <ul style={styles.navbarTitle}>
                <li><a href="#section-1">About Me</a></li>
                <li><a href="#section-2">Portfolio</a></li>
                <li><a href="#section-3">Contact</a></li>
                <li><a href="#section-4">Resume</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;