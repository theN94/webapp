import React, { createContext, useState } from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from '../constants';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (file, navigate) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('key', API_KEY);

    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/upload_pdf`, formData, {
        headers: { 
          'Content-Type': 'multipart/form-data',
        },
      });
      setResults(response.data);
      setError(null);
      navigate("/results");
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

    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/upload_text`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.error : 'Error Processing Textfile');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider value={{ results, error, loading, handleUpload, handleTextUpload }}>
      {children}
    </AppContext.Provider>
  );
};
