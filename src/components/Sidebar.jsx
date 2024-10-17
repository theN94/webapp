import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidenav">
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: 250 }}>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">Upload PDF</Link>
          </li>
          <li className="nav-item">
            <Link to="/uploadImage" className="nav-link text-white">Upload Image</Link>
          </li>
          <li className="nav-item"  >
            <Link to="/uploadTextFile" className="nav-link text-white">Upload TextFile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
