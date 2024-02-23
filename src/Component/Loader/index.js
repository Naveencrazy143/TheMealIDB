import React from 'react';

const spinnerStyle = {
  border: '3px solid rgba(0, 0, 0, 0.1)',
  borderTop: '3px solid #007bff',
  borderRadius: '50%',
  width: '50px', 
  height: '50px', 
  animation: 'spin 1s linear infinite',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', 
};

function Loader() {
  return (
    <div style={containerStyle}>
      <div style={spinnerStyle}></div>
    </div>
  );
}

export { Loader };
