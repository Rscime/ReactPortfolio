import React from 'react';
import '../styles/Footer.css';

const styles = {
    footerStyle: {
      background: '#ecff8f',
    },
    footerText: {
        fontSize: '10px',
    }
  };

function Footer() {
    return (
      <footer style={styles.footerStyle} className="footer">
        <p style={styles.footerText}>Thanks for visiting!</p>
      </footer>
    );
  }
  
  export default Footer;