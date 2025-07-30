import React from 'react';

function Home() {
  // Main container styles
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    minHeight: 'calc(100vh - 160px)' // Accounts for navbar and footer height
  };

  // Hero section styles
  const heroStyle = {
    background: 'linear-gradient(135deg, #3498db, #2c3e50)',
    color: 'white',
    padding: '60px 30px',
    borderRadius: '8px',
    marginBottom: '40px',
    textAlign: 'center'
  };

  // Card container styles
  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    margin: '40px 0'
  };

  // Individual card styles
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '25px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  // Button styles
  const buttonStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    marginTop: '20px',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <div style={heroStyle}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Welcome to MySite</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          Discover amazing features and services designed to help you succeed in the digital world.
        </p>
        <button style={buttonStyle}>Get Started</button>
      </div>

      {/* Features Section */}
      <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
        Our Key Features
      </h2>
      
      <div style={cardContainerStyle}>
        {/* Feature Card 1 */}
        <div style={cardStyle}>
          <h3 style={{ color: '#3498db' }}>🚀 Lightning Fast</h3>
          <p>Our platform is optimized for speed and performance, ensuring you get the best experience possible.</p>
        </div>
        
        {/* Feature Card 2 */}
        <div style={cardStyle}>
          <h3 style={{ color: '#3498db' }}>🔒 Secure & Reliable</h3>
          <p>Your data's security is our top priority with enterprise-grade encryption and protection.</p>
        </div>
        
        {/* Feature Card 3 */}
        <div style={cardStyle}>
          <h3 style={{ color: '#3498db' }}>💡 Easy to Use</h3>
          <p>Intuitive interface designed for users of all skill levels to navigate with ease.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '60px',
        padding: '40px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Ready to Get Started?</h2>
        <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>
          Join thousands of satisfied users who trust our platform for their needs.
        </p>
        <button style={{ 
          ...buttonStyle,
          backgroundColor: '#2c3e50',
          marginRight: '15px'
        }}>
          Learn More
        </button>
        <button style={buttonStyle}>
          Sign Up Now
        </button>
      </div>
    </div>
  );
}

export default Home;
