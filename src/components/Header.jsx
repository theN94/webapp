import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import './Header.css'
function Header({mail, handleSignOut, handleProfile, usrOrg}) {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); 
  };
  return (
    <>
    <header className="p-2 border-0 fixed-top bg-danger bg-opacity-25 hd-sih-header rounded-pill shadow">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link to = "/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="40"><use xlinkHref="#bootstrap"></use></svg>
            <span className="navbar-brand project-name"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"/>
              </svg>  IdentiDocx
            </span>
        </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 button-container">
            {usrOrg && <Link 
            to="/home" 
            className = {`nav-link pl-0 px-2 text-white nav-names ${activeButton === 'Home' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Home')}
            >Home</Link>}
            {!usrOrg && <Link to="/company" className = {`nav-link pl-0 px-2 text-white nav-names ${activeButton === 'Company' ? 'active' : ''}`} onClick={() => handleButtonClick('Company')}>Company</Link>}
            {!usrOrg && <Link to="/displayUser" className = {`nav-link pl-0 px-2 text-white nav-names ${activeButton === 'Company' ? 'active' : ''}`}>Users</Link>}
            {usrOrg && <Link to="/results" className = {`nav-link pl-0 px-2 text-white nav-names ${activeButton === 'Results' ? 'active' : ''}`} onClick={() => handleButtonClick('Results')}>Results</Link>}
            {/* {usrOrg && <Link to="/history" className="nav-link px-2 text-white nav-names">History</Link>} */}
            <Link to="/about" className="nav-link px-2 text-white nav-names">About</Link>
          </ul>

          <div className="dropdown text-end">
            <Link to="/home" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="73869693.jpeg" alt="mdo" width="32" height="32" className="rounded-circle"/>
            </Link>
            <ul className="dropdown-menu text-small">
              <li><a className="dropdown-item" href="#">{mail}</a></li>
              <li><Link to="/profile" className="dropdown-item" onClick={handleProfile}>Profile</Link></li>
              <li><a className="dropdown-item" href="#" onClick={handleSignOut}>Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header
