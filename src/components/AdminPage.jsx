import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CompanyDetailsForm = ({ handleAdminPart }) => {
  const [companyName, setCompanyName] = useState('');
  const [details, setDetails] = useState({
    is_aadhaar: 0,
    is_pan: 0,
    is_phone: 0,
    is_email: 0,
    is_dlno: 0,
  });

  const handleCheckboxChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.checked ? 1 : 0, // Use the correct key names
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      companyName,
      is_aadhaar: details.is_aadhaar,
      is_pan: details.is_pan,
      is_phone: details.is_phone,
      is_email: details.is_email,
      is_dlno: details.is_dlno,
    };
    handleAdminPart(dataToSubmit); // Send data to parent handler
  };

  return (
    <div className="container mt-5 d-flex flex-row justify-content-center shadow w-50 p-5 bg-white rounded shadow">
      <div>
      <h2 className="text-center mb-4">Submit Company Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>

        <h4 className="mt-4">Select the details you want to submit:</h4>

        <div className="d-flex flex-row justify-content-between">
          <div className="admin-card-con">
            <div className="form-check d-flex flex-row justify-content-center">
            <div className='pr-2'>
            <input
              type="checkbox"
              className="form-check-input"
              id="is_aadhaar"
              name="is_aadhaar"
              checked={details.is_aadhaar === 1}
              onChange={handleCheckboxChange}
            />
            </div>
            <label className="form-check-label" htmlFor="is_aadhaar">Aadhar Number</label>
          </div>

          <div className="form-check mt-3 d-flex flex-row justify-content-center">
            <div className='pr-2'>
            <input
              type="checkbox"
              className="form-check-input"
              id="is_pan"
              name="is_pan"
              checked={details.is_pan === 1}
              onChange={handleCheckboxChange}
            />
            </div>
            <label className="form-check-label" htmlFor="is_pan">PAN Number</label>
          </div>

          <div className="form-check mt-3 d-flex flex-row justify-content-center">
            <div className='pr-2'>
            <input
              type="checkbox"
              className="form-check-input"
              id="is_phone"
              name="is_phone"
              checked={details.is_phone === 1}
              onChange={handleCheckboxChange}
            />
            </div>
            <label className="form-check-label" htmlFor="is_phone">Phone Number</label>
          </div>
          </div>

          <div className='ml-auto'>
          <div className="form-check mt-3 d-flex flex-row justify-content-center">
            <div className='pr-2'>
            <input
              type="checkbox"
              className="form-check-input"
              id="is_email"
              name="is_email"
              checked={details.is_email === 1}
              onChange={handleCheckboxChange}
            />
            </div>
            <label className="form-check-label" htmlFor="is_email">Email Addres</label>
          </div>

          <div className="form-check mt-3 d-flex flex-row justify-content-center">
            <div className='pr-2'>
            <input
              type="checkbox"
              className="form-check-input"
              id="is_dlno"
              name="is_dlno"
              checked={details.is_dlno === 1}
              onChange={handleCheckboxChange}
            />
            </div>
            <label className="form-check-label" htmlFor="is_dlno">Driving License</label>
          </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-4">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default CompanyDetailsForm;
