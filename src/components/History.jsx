import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './History.css';
const History = ({data}) => {
  const API_URL = 'https://sih-api.knsrinath.com';
  const API_KEY = 'arebha!';
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  if(!data){
    console.log("There is nothing to show...");
  }

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`https://sih-api.knsrinath.com/pdf_count?key=${API_KEY}`);
        console.log(response.data.count);
        setCount(response.data.count);

        setError('');
      } catch (err) {
        setError('Error fetching history');
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);
  
  if (loading) {
    return <div className="spinner-container"><div className="spinner"></div></div>;
  }
  let a = 1;
  return (
    <div className="history-container m-auto p-5">
      {error && <p className="text-danger">{error}</p>}
      <h3>Recent activities:</h3>
      <p>No.of files: {count}</p>
      <div className="image-container">
        {Array.from({ length: count }).map((_, page) => (

          <a href={`${API_URL}/pdf/${page+1}?key=${API_KEY}`} key={page+1}>
            <img
              key={page}
              src={`${API_URL}/image/${page + 1}/${1}?key=${API_KEY}`}
              alt={`Page ${page + 1}`}
              className="result-image"
            />
          </a>
          
        ))}
      </div>
      
    </div>
  );
};

export default History;
