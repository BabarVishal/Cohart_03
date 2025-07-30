import React from 'react';

function Footer() {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Footer styles
  const footerStyles = {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '40px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px'
  };

  const sectionStyles = {
    marginBottom: '20px'
  };

  const headingStyles = {
    color: '#3498db',
    borderBottom: '2px solid #3498db',
    paddingBottom: '10px',
    marginBottom: '20px'
  };

  const linkStyles = {
    color: '#bdc3c7',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '8px',
    transition: 'color 0.3s'
  };

  const socialIcons = {
    display: 'flex',
    gap: '15px',
    marginTop: '15px'
  };

  const iconStyles = {
    color: '#ecf0f1',
    fontSize: '20px'
  };

  const copyrightStyles = {
    textAlign: 'center',
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '1px solid #34495e',
    color: '#bdc3c7'
  };

  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        {/* About Section */}
        <div style={sectionStyles}>
          <h3 style={headingStyles}>About Us</h3>
          <p>We are a passionate team dedicated to creating amazing web experiences with React and modern technologies.</p>
          <div style={socialIcons}>
            <a href="#" style={iconStyles}>📘</a>
            <a href="#" style={iconStyles}>📸</a>
            <a href="#" style={iconStyles}>🐦</a>
            <a href="#" style={iconStyles}>💼</a>
          </div>
        </div>

        {/* Quick Links */}
        <div style={sectionStyles}>
          <h3 style={headingStyles}>Quick Links</h3>
          <a href="#" style={linkStyles}>Home</a>
          <a href="#" style={linkStyles}>About Us</a>
          <a href="#" style={linkStyles}>Services</a>
          <a href="#" style={linkStyles}>Portfolio</a>
          <a href="#" style={linkStyles}>Contact</a>
        </div>

        {/* Contact Info */}
        <div style={sectionStyles}>
          <h3 style={headingStyles}>Contact Us</h3>
          <p>📧 email@example.com</p>
          <p>📞 +1 (123) 456-7890</p>
          <p>🏢 123 React Street, Component City</p>
        </div>

        {/* Newsletter */}
        <div style={sectionStyles}>
          <h3 style={headingStyles}>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <input 
            type="email" 
            placeholder="Your email address" 
            style={{
              padding: '10px',
              width: '100%',
              marginBottom: '10px',
              borderRadius: '4px',
              border: 'none'
            }}
          />
          <button
            style={{
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div style={copyrightStyles}>
        © {currentYear} My React App. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
