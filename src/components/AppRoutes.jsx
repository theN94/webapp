import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UploadForm from './UploadForm';
import Results from './Results';
import About from './About';
import History from './History';
import UploadImage from './UploadImage';
import UploadTextFile from './UploadText';
import CompanyDetailsForm from './AdminPage';
import LoginSignUpPage from './LoginandSignup';
import Profile from './Profile';
import DataTable from './UserDisplay';
const AppRoutes = ({ handleUpload, results, error, handleTextUpload, handleImageUpload, isImageGenerated, handleAdminPart, detailsAdded, handleLogin, handleSignUp, data, handleProfile}) => {
  return (
    <Routes>
      <Route 
        path="/company"
        element={<CompanyDetailsForm handleAdminPart={handleAdminPart} />}
      />

      <Route 
        path="/login"
        element={<LoginSignUpPage handleLogin={handleLogin} handleSignUp = {handleSignUp}/>}
      />
      <Route
        path="/"
        element={<UploadForm handleUpload={handleUpload} detailsAdded={detailsAdded} />}
      />
      <Route
        path="/home"
        element={<UploadForm handleUpload={handleUpload} />}
      />
      <Route
        path="/results"
        element={<Results data={results} error={error} isImageGenerated = {isImageGenerated} />}
      />
      <Route
        path="/history"
        element={<History data={results} />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route path="/uploadImage" element={<UploadImage handleImageUpload={handleImageUpload}/>}/>
      <Route
        path="/uploadTextFile"
        element={<UploadTextFile handleTextUpload={handleTextUpload}/>}
      />
      <Route 
        path="/profile"
        element={<Profile data={data} handleProfile={handleProfile}/>}
      />
      <Route 
        path="/displayUser"
        element={<DataTable />}
      />
    </Routes>
  );
};

export default AppRoutes;

