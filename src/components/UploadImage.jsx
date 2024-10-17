import React, { useState } from 'react';
import './UploadForm.css';
import { Link } from 'react-router-dom';

const UploadImage = ({ handleImageUpload }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      handleImageUpload(file);
    } else {
      setError('Please select a PDF file.');
    }
  };

  return (
    <>
      
      <div className="dropdown mb-5 dropdown-styling">
        <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select conversion
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          <li><Link to="/" className="dropdown-item">PDf Extractor</Link></li>
          <li><Link to="/uploadImage" className="dropdown-item active">Image Extractor</Link></li>
        </ul>
      </div>
    <div className="upload-form-container">
      <h1>Upload Image</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="file"
            className="form-control"
            accept="image/*"
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

export default UploadImage;
