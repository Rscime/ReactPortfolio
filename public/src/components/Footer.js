import React from 'react';
import '../styles/Footer.css';

const styles = {
    footerText: {
        fontSize: '25px',
        marginLeft: '44%', 
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