import React from 'react';
import './Results.css'; 
import { API_KEY, API_URL } from '../constants';
const Results = ({ data, error, isImageGenerated }) => {
  if (error) {
    return (
      <div className="results-container">
        <h2 className="text-danger">Error</h2>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  if (!data) {
    return <p className="no-data-message">No data to display</p>;
  }
  
  if(isImageGenerated === true){
    const {
      aadhaar_number,
      pan_number,
      dl_number,
    } = data;
    return (
      <div className="results-container">
        <h2 className="results-title">Extracted Information</h2>
        <div className="results-info">
          <p><strong>Aadhaar Numbers:</strong> {aadhaar_number || 'None Found'}</p>
          <p><strong>PAN Numbers:</strong> {pan_number || 'None Found'}</p>
          <p><strong>DL Numbers:</strong> {dl_number || 'None Found'}</p>
        </div>
      </div>
    );
  }else if(isImageGenerated === false){
    const {
      aadhaar_number = "",
      pan_number = "",
      dl_number = "",
    } = data;
    return(
      <>
        <div className="results-container">
          <h2 className="results-title">Extracted Information</h2>
          <div className="results-info">
            <p><strong>Aadhaar Numbers:</strong> {aadhaar_number || 'None Found'}</p>
            <p><strong>PAN Numbers:</strong> {pan_number || 'None Found'}</p>
            <p><strong>DL Numbers:</strong> {dl_number || 'None Found'}</p>
          </div>
        </div>
        
      </>
    );
  }
};

export default Results;
