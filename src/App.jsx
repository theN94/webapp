import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from './components/LoadingSpinner';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './components/AppRoutes';
import './App.css';
// import LandingPage from './components/LandingPage';
import { API_KEY, API_URL } from './constants';
import CompanyDetailsForm from './components/AdminPage';
import LoginSignUpPage from './components/LoginandSignup';


const App = () => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isImageGenerated, setIsImageGenerated] = useState(true);
  const [detailsAdded, setDetailsAdded] = useState(false);
  const [isUserLogin, setUserLogin] = useState(false);
  const [mail, setMail] = useState(null);
  const [usrOrg, setUsrOrg] = useState(false);
  const [type, setType] = useState(null);
  const [data, setData] = useState({
    username : "",
    email : "",
    pan : "",
    aadhar: "",
    dlno : "",
    phonenumber : "",
    type: ""
  })
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem('username');
    const ty = localStorage.getItem('usrOrorg');
    if (username) {
      setUserLogin(true);
      setMail(username);
      setType(ty);
    } else {
      setUserLogin(false);
    }
  }, []);
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      setData(JSON.parse(userData));
    }
  }, []);
  const handleSignOut  = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('userData');
    navigate("/login");
    setUserLogin(false);
  }

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('key', API_KEY);
    formData.append('email', mail);
  
    try {
      setLoading(true);
  
      const response = await axios.post(`${API_URL}/upload_pdf_new`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response && response.data) {
        setResults(response.data);
        setIsImageGenerated(true);
        setLoading(false);
        setError(null);
  
        const { aadhaar_number, pan_number, dl_number } = response.data;
  
        const existingUserData = JSON.parse(localStorage.getItem('userData')) || {};
  
        const updatedUserData = {
          ...existingUserData, 
          aadhar: aadhaar_number || existingUserData.aadhar,
          pan: pan_number || existingUserData.pan,           
          dlno: dl_number || existingUserData.dlno           
        };
  
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
  
        setData(updatedUserData);
  
        navigate("/results"); 
      } else {
        throw new Error("Invalid response format");
      }
  
    } catch (err) {
      setError(err.response ? err.response.data.error : 'Error processing PDF');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  
  const handleTextUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('key', API_KEY);
    try{
      setLoading(true);
      const response = await axios.post(`${API_URL}/upload_text`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResults(response.data);
      setIsImageGenerated(false);
      console.log(response);
      setLoading(false);
      setError(null);
      navigate("/results");
    }catch(err) {
      setError(err.response ? err.response.data.error : 'Error Processing Textfile');
      setLoading(false);
    }
  };
  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('key', API_KEY);
    try{
      setLoading(true);
      const response = await axios.post(`${API_URL}/upload_image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResults(response.data);
      setIsImageGenerated(false);
      console.log(response.data);
      setLoading(false);
      setError(null);
      navigate("/results");
    }catch(err) {
      setError(err.response ? err.response.data.error : 'Error Processing Textfile');
      setLoading(false);
    }
  };
  const handleAdminPart = async (dataToSubmit) => {
    const formData = new FormData();
    formData.append('is_aadhaar', dataToSubmit.is_aadhaar);
    formData.append('is_phone', dataToSubmit.is_phone);
    formData.append('is_dlno', dataToSubmit.is_dlno);
    formData.append('is_pan', dataToSubmit.is_pan);
    formData.append('is_mail', dataToSubmit.is_email);
    formData.append('company_name', dataToSubmit.companyName);
    formData.append('key', API_KEY);
    console.log('Form data to be sent:', {
      is_aadhaar: dataToSubmit.is_aadhaar,
      is_phone: dataToSubmit.is_phone,
      is_dlno: dataToSubmit.is_dlno,
      is_pan: dataToSubmit.is_pan,
      is_email: dataToSubmit.is_email,
      company_name: dataToSubmit.companyName
    });
  
    try{
      setLoading(true);
      const response = await axios.post(`${API_URL}/create_company`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setDetailsAdded(true);
      setLoading(false);
      setError(null);
      alert("Your Choices Successfully saved");
      navigate("/company");
    }catch(err){
      setError(err.response ? err.response.data.error : "Error Submitting the data");
    }
  };


  const handleLogin = async (data) => {
    const formData = new FormData();
    formData.append('email', data.usernameOrEmail);
    formData.append('password', data.password);
    formData.append('key', API_KEY);
    try{
      const response = await axios.post(`${API_URL}/signin`, formData, {
        headers:{
          'Content-Type': 'multipart/form-data',
        }
      });
      console.log(response.data);
      if(response.data.is_user === "true" && response.data.type === "usr"){
        setUsrOrg(true);
        navigate("/");
      }else if(response.data.is_user === "true" && response.data.type === "org"){
        setUsrOrg(false);
        navigate("/company");
      }
      else{
        alert("You are not a user");
        setUserLogin(false);
      }
      localStorage.setItem('username', response.data.email);
      localStorage.setItem('usrOrorg', response.data.type);
      setUserLogin(true);
    }catch(err){
      setError(err.response ? err.response.data.error : "Error Submitting the data");
      setUserLogin(false);
    }
  };
  const handleSignUp = async (data) => {
    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('email', data.email);
    formData.append('phone',data.phoneNumber);
    formData.append('password',data.password);
    formData.append('type', data.type);
    formData.append('key', API_KEY);
    try{
      const response = await axios.post(`${API_URL}/signup`, formData, {
        headers:{
          'Content-Type': 'multipart/form-data',
        }
      });
      console.log(response.data);
      if(response.data.message === "User created successfully!"){
        alert('User Created Successfully!! Login now...');
      }
    }catch(err){
      setError(err.response ? err.response.data.error : "Error Submitting the data");
      setUserLogin(false);
    }
  };
  const handleProfile = async () => {
    try{
      const response = await axios.get(`${API_URL}/get_user_data`, 
        {
          params : {
            key: `${API_KEY}`,
            email: `${mail}`
          },
        }
      );
      console.log(response.data);
      localStorage.setItem('userData', JSON.stringify(response.data));
      setData({
        username : response.data.username || "No data",
        email : response.data.email || "No data",
        pan : response.data.pan_number || "No data",
        aadhar: response.data.aadhar_number || "No data",
        dlno : response.data.dl_number || "No data",
        phonenumber : response.data.phone_number || "No data",
        type: response.data.type || "No data"
      });
    }catch (err){
      setError("Error fetching user data");
    }
  }

  return (
    <div className="app-container">

      {isUserLogin && 
      <div className="content-container d-flex flex-column justify-content-center">
        <Header mail = {mail} handleSignOut={handleSignOut} handleProfile={handleProfile} usrOrg = {usrOrg} />
        <div className="content-body">
          <div>
            {loading ? <LoadingSpinner /> : (
              <AppRoutes handleUpload={handleUpload} results={results} error={error} isImageGenerated={isImageGenerated} handleTextUpload = {handleTextUpload} handleImageUpload={handleImageUpload} handleAdminPart = {handleAdminPart} detailsAdded={detailsAdded} data={data} handleProfile={handleProfile}/>
            )}
          </div>
        </div>
        <Footer/>
      </div>}
      {!isUserLogin && 
      <div className="content-container d-flex flex-column justify-content-center">
        <LoginSignUpPage handleLogin={handleLogin} handleSignUp = {handleSignUp} />
      </div>}
    </div>
  );
};

export default App;
