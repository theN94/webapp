import React from 'react'

function Profile({data}) {
  const userData = data || {
    username: 'Not saved',
    email: 'Not saved',
    phonenumber: 'Not saved',
    pan: 'Not saved',
    aadhar: 'Not saved',
    dlno: 'Not saved'
  };
  return (
    <div className="text-secondary p-4 rounded card-container-for-profile">
      <div>
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <p>User name: {userData.username || "Not saved"}</p>
        <p>Email: {userData.email || "Not saved"}</p>
        <p>Phone Number: {userData.phonenumber || "not saved"}</p>
        <p>Pan Number: {userData.pan || "not saved"}</p>
        <p>Aadhar Number: {userData.aadhar || "not saved"}</p>
        <p>Driving License: {userData.dlno || "not saved"}</p>
      </div>
    </div>
  )
}

export default Profile
