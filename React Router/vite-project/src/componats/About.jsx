import React from 'react';

function About() {
  // Main container styles
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    minHeight: 'calc(100vh - 160px)' // Accounts for navbar and footer
  };

  // Header styles
  const headerStyle = {
    textAlign: 'center',
    marginBottom: '50px'
  };

  // Section styles
  const sectionStyle = {
    marginBottom: '50px'
  };

  // Team member card styles
  const teamContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '30px'
  };

  const memberCardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '25px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  };

  const memberImageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    margin: '0 auto 20px',
    border: '3px solid #3498db'
  };

  // Timeline styles
  const timelineStyle = {
    position: 'relative',
    maxWidth: '800px',
    margin: '0 auto',
    paddingLeft: '50px'
  };

  const timelineItemStyle = {
    position: 'relative',
    marginBottom: '40px',
    paddingLeft: '30px'
  };

  return (
    <div style={containerStyle}>
      {/* Page Header */}
      <div style={headerStyle}>
        <h1 style={{ 
          color: '#2c3e50', 
          fontSize: '2.5rem',
          marginBottom: '20px'
        }}>
          About Our Company
        </h1>
        <p style={{
          color: '#7f8c8d',
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          We're dedicated to creating innovative solutions that make a difference in people's lives.
        </p>
      </div>

      {/* Our Story Section */}
      <div style={sectionStyle}>
        <h2 style={{
          color: '#3498db',
          borderBottom: '2px solid #3498db',
          paddingBottom: '10px',
          marginBottom: '20px'
        }}>
          Our Story
        </h2>
        <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
          Founded in 2015, we started as a small team of passionate developers working out of a garage. 
          Today, we've grown into a leading technology company serving clients worldwide.
        </p>
        <p style={{ lineHeight: '1.6' }}>
          Our journey has been marked by innovation, dedication, and a relentless focus on customer 
          satisfaction. Every product we build reflects our core values of quality and integrity.
        </p>
      </div>

      {/* Our Mission Section */}
      <div style={sectionStyle}>
        <h2 style={{
          color: '#3498db',
          borderBottom: '2px solid #3498db',
          paddingBottom: '10px',
          marginBottom: '20px'
        }}>
          Our Mission
        </h2>
        <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
          To empower businesses and individuals through cutting-edge technology solutions that are 
          accessible, intuitive, and transformative.
        </p>
      </div>

      {/* Our Team Section */}
      <div style={sectionStyle}>
        <h2 style={{
          color: '#3498db',
          borderBottom: '2px solid #3498db',
          paddingBottom: '10px',
          marginBottom: '20px'
        }}>
          Meet Our Team
        </h2>
        <div style={teamContainerStyle}>
          {/* Team Member 1 */}
          <div style={memberCardStyle}>
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Team Member" 
              style={memberImageStyle}
            />
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>John Smith</h3>
            <p style={{ color: '#3498db', fontWeight: '600' }}>CEO & Founder</p>
            <p style={{ marginTop: '10px' }}>
              Visionary leader with 15+ years of experience in tech innovation.
            </p>
          </div>
          
          {/* Team Member 2 */}
          <div style={memberCardStyle}>
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Team Member" 
              style={memberImageStyle}
            />
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Sarah Johnson</h3>
            <p style={{ color: '#3498db', fontWeight: '600' }}>CTO</p>
            <p style={{ marginTop: '10px' }}>
              Technical expert specializing in scalable architecture.
            </p>
          </div>
          
          {/* Team Member 3 */}
          <div style={memberCardStyle}>
            <img 
              src="https://randomuser.me/api/portraits/men/75.jpg" 
              alt="Team Member" 
              style={memberImageStyle}
            />
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Michael Chen</h3>
            <p style={{ color: '#3498db', fontWeight: '600' }}>Lead Developer</p>
            <p style={{ marginTop: '10px' }}>
              Full-stack wizard passionate about clean code.
            </p>
          </div>
        </div>
      </div>

      {/* Company Timeline */}
      <div style={sectionStyle}>
        <h2 style={{
          color: '#3498db',
          borderBottom: '2px solid #3498db',
          paddingBottom: '10px',
          marginBottom: '20px'
        }}>
          Our Journey
        </h2>
        <div style={timelineStyle}>
          <div style={timelineItemStyle}>
            <h3 style={{ color: '#2c3e50' }}>2015 - Foundation</h3>
            <p>Company founded with just 3 team members</p>
          </div>
          <div style={timelineItemStyle}>
            <h3 style={{ color: '#2c3e50' }}>2017 - First Product</h3>
            <p>Launched our flagship product to market</p>
          </div>
          <div style={timelineItemStyle}>
            <h3 style={{ color: '#2c3e50' }}>2019 - Expansion</h3>
            <p>Opened international offices in 3 countries</p>
          </div>
          <div style={timelineItemStyle}>
            <h3 style={{ color: '#2c3e50' }}>2022 - Recognition</h3>
            <p>Named "Most Innovative Company" by Tech Magazine</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
