import React from 'react';
import '../styles/Header.css';

const styles = {
    headerStyle: {
      background: '#ecff8f',
    },
    headingStyle: {
      fontSize: '75px',
      color: '#8d9e36',
    },
  };

function Header() {
    return (
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>Rachel Gilchrist</h1>
      </header>
    );
  }
  
  export default Header;