import React, { useState } from 'react';
import './UploadForm.css';
import { Link } from 'react-router-dom';

const UploadTextFile = ({ handleTextUpload }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      handleTextUpload(file);
    } else {
      setError('Please select a Text file with .txt extension');
    }
  };

  return (
    <>
      <p className="form-info">When you upload a PDF document, our system automatically scans and extracts key information such as government-issued IDs (Aadhaar, PAN), phone numbers, and other personal details. This helps you quickly gather and review essential identity data from the uploaded file.</p>
      <div className="dropdown mb-5 dropdown-styling">
        <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select conversion
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          <li><Link to="/" className="dropdown-item">PDf Extractor</Link></li>
          <li><Link to="/uploadImage" className="dropdown-item">Image Extractor</Link></li>
          <li><Link to="/uploadTextFile" className="dropdown-item active" href="#">Text file Extractor</Link></li>
        </ul>
      </div>
    <div className="upload-form-container">
      <h1>Upload TextFile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="file"
            className="form-control"
            accept="text/plain"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-danger">Upload</button>
        {error && <p className="text-danger">{error}</p>}
      </form>
    </div>
    </>
  );
};

export default UploadTextFile;
