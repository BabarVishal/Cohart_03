import React, { useState } from 'react';

function Data() {
  // Sample data state
  const [activeTab, setActiveTab] = useState('charts');
  const [timeRange, setTimeRange] = useState('monthly');

  // Sample data for charts
  const salesData = {
    monthly: [65, 59, 80, 81, 56, 55, 40],
    quarterly: [120, 190, 150, 210, 180, 150, 200],
    yearly: [500, 600, 750, 800, 700, 900, 1000]
  };

  const userData = {
    monthly: [100, 150, 230, 200, 180, 250, 300],
    quarterly: [400, 500, 600, 550, 700, 650, 800],
    yearly: [2000, 2500, 3000, 3500, 4000, 4500, 5000]
  };

  // Main container styles
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    minHeight: 'calc(100vh - 160px)'
  };

  // Header styles
  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px'
  };

  // Tab styles
  const tabContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
    borderBottom: '1px solid #ddd'
  };

  const tabStyle = {
    padding: '12px 24px',
    cursor: 'pointer',
    borderBottom: '3px solid transparent',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  };

  const activeTabStyle = {
    ...tabStyle,
    color: '#3498db',
    borderBottom: '3px solid #3498db'
  };

  // Time range selector styles
  const timeRangeStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '30px'
  };

  const timeButtonStyle = {
    padding: '8px 16px',
    borderRadius: '4px',
    border: '1px solid #3498db',
    backgroundColor: 'transparent',
    color: '#3498db',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const activeTimeButtonStyle = {
    ...timeButtonStyle,
    backgroundColor: '#3498db',
    color: 'white'
  };

  // Chart container styles
  const chartContainerStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '25px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px'
  };

  // Bar chart styles (simulated with divs)
  const barChartStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    height: '300px',
    gap: '15px',
    marginTop: '30px'
  };

  const barStyle = {
    flex: 1,
    backgroundColor: '#3498db',
    borderRadius: '4px 4px 0 0',
    position: 'relative',
    minWidth: '40px'
  };

  // Table styles
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px'
  };

  const thStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '12px',
    textAlign: 'left'
  };

  const tdStyle = {
    padding: '12px',
    borderBottom: '1px solid #ddd'
  };

  const trEvenStyle = {
    backgroundColor: '#f8f9fa'
  };

  // Sample table data
  const tableData = [
    { id: 1, product: 'Premium Plan', users: 2450, revenue: '$49,000' },
    { id: 2, product: 'Basic Plan', users: 1800, revenue: '$27,000' },
    { id: 3, product: 'Enterprise', users: 42, revenue: '$84,000' },
    { id: 4, product: 'Free Tier', users: 9800, revenue: '$0' }
  ];

  // Generate bars for chart
  const renderBars = (data) => {
    const maxValue = Math.max(...data);
    return data.map((value, index) => {
      const height = (value / maxValue) * 100;
      return (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ ...barStyle, height: `${height}%` }}></div>
          <div style={{ marginTop: '10px', fontWeight: '600' }}>{value}</div>
          <div style={{ marginTop: '5px', color: '#7f8c8d' }}>
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][index]}
          </div>
        </div>
      );
    });
  };

  return (
    <div style={containerStyle}>
      {/* Page Header */}
      <div style={headerStyle}>
        <h1 style={{ 
          color: '#2c3e50', 
          fontSize: '2.5rem',
          marginBottom: '15px'
        }}>
          Data Analytics
        </h1>
        <p style={{
          color: '#7f8c8d',
          fontSize: '1.1rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Explore and analyze your data with our interactive dashboard
        </p>
      </div>

      {/* Tab Navigation */}
      <div style={tabContainerStyle}>
        <div 
          style={activeTab === 'charts' ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab('charts')}
        >
          Charts
        </div>
        <div 
          style={activeTab === 'tables' ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab('tables')}
        >
          Data Tables
        </div>
        <div 
          style={activeTab === 'exports' ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab('exports')}
        >
          Exports
        </div>
      </div>

      {activeTab === 'charts' && (
        <>
          {/* Time Range Selector */}
          <div style={timeRangeStyle}>
            <button
              style={timeRange === 'monthly' ? activeTimeButtonStyle : timeButtonStyle}
              onClick={() => setTimeRange('monthly')}
            >
              Monthly
            </button>
            <button
              style={timeRange === 'quarterly' ? activeTimeButtonStyle : timeButtonStyle}
              onClick={() => setTimeRange('quarterly')}
            >
              Quarterly
            </button>
            <button
              style={timeRange === 'yearly' ? activeTimeButtonStyle : timeButtonStyle}
              onClick={() => setTimeRange('yearly')}
            >
              Yearly
            </button>
          </div>

          {/* Sales Chart */}
          <div style={chartContainerStyle}>
            <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>Sales Performance</h2>
            <div style={barChartStyle}>
              {renderBars(salesData[timeRange])}
            </div>
          </div>

          {/* User Growth Chart */}
          <div style={chartContainerStyle}>
            <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>User Growth</h2>
            <div style={barChartStyle}>
              {renderBars(userData[timeRange])}
            </div>
          </div>
        </>
      )}

      {activeTab === 'tables' && (
        <div style={chartContainerStyle}>
          <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Product Performance</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Product</th>
                <th style={thStyle}>Users</th>
                <th style={thStyle}>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={row.id} style={index % 2 === 0 ? trEvenStyle : {}}>
                  <td style={tdStyle}>{row.id}</td>
                  <td style={tdStyle}>{row.product}</td>
                  <td style={tdStyle}>{row.users.toLocaleString()}</td>
                  <td style={tdStyle}>{row.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'exports' && (
        <div style={chartContainerStyle}>
          <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Data Exports</h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {/* Export Option 1 */}
            <div style={{ 
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#3498db', marginBottom: '15px' }}>CSV Export</h3>
              <p style={{ marginBottom: '20px' }}>Export your data as CSV files for spreadsheet analysis</p>
              <button style={{
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Download CSV
              </button>
            </div>
            
            {/* Export Option 2 */}
            <div style={{ 
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#3498db', marginBottom: '15px' }}>PDF Report</h3>
              <p style={{ marginBottom: '20px' }}>Generate comprehensive PDF reports with charts and analysis</p>
              <button style={{
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Generate PDF
              </button>
            </div>
            
            {/* Export Option 3 */}
            <div style={{ 
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#3498db', marginBottom: '15px' }}>API Access</h3>
              <p style={{ marginBottom: '20px' }}>Connect directly to our API for real-time data access</p>
              <button style={{
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                API Documentation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Data;
