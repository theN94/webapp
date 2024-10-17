import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;

