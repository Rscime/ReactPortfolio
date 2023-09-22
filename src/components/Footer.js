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
        <p style={styles.footerText}><a href="https://github.com/Rscime">Click here for Rachels GitHub</a></p>
      </footer>
    );
  }
  
  export default Footer;