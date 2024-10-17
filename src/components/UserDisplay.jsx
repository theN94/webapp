import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { utils, writeFile } from 'xlsx';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://sih-api.knsrinath.com/get_all_users?key=arebha!')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.log('Error fetching data:', error));
  }, []);

  const downloadExcel = () => {
    const filteredData = data.filter(user => user.type === "usr");
    
    const worksheet = utils.json_to_sheet(filteredData);
    
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Users');
    
    writeFile(workbook, 'users.xlsx');
  };

  return (
    <div className="container mt-5 bg-white p-3 rounded shadow">
      <h2 className="text-center mb-4 text-dark">Users</h2>
      <button 
        className="btn btn-primary mb-3"
        onClick={downloadExcel}
      >
        Download as Excel
      </button>
      <table className="table table-sm table-bordered bg-success text-light">
        <thead className="thead-dark">
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Aadhar Number</th>
            <th>Pan Number</th>
            <th>DL No.</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            user.type === "usr" && (
              <tr key={user.id}>
                <td>{user.username || "not shared"}</td>
                <td>{user.email || "not shared"}</td>
                <td>{user.phone_number || "not shared"}</td>
                <td>{user.aadhaar_number || "not shared"}</td>
                <td>{user.pan_number || "not shared"}</td>
                <td>{user.dl_number || "not shared"}</td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
