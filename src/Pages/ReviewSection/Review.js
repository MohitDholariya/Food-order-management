import React, { useState } from 'react';
import '../../Assets/css/review.css'

const ReviewForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [taste, setTaste] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    setContact(value.slice(0, 10)); // Limit to 10 digits
  };

  const handleTasteChange = (value) => {
    setTaste(value);
  };

  const handleTemperatureChange = (value) => {
    setTemperature(value);
  };

  const handleAccuracyChange = (value) => {
    setAccuracy(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && contact && taste && temperature && accuracy) {
      setSubmitted(true);
    } else {
      alert('Please fill in all required fields and select all options before submitting');
    }
  };

  const totalProgress = (taste + temperature + accuracy) / 3;
  let totalEmoji = '';
  if (totalProgress >= 80) totalEmoji = '😍';
  else if (totalProgress >= 60) totalEmoji = '😊';
  else totalEmoji = '😐';

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h2 className='text-center mb-5' style={{ color: '#fac564' }}>Personal Information</h2>
          <div className="d-flex mb-3">
            <input type="text" className="form-control me-2" placeholder="First Name" value={firstName} onChange={handleFirstNameChange} required />
            <input type="text" className="form-control" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} required />
          </div>
          <div className="d-flex mb-3">
            <input type="email" className="form-control me-2" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={email} onChange={handleEmailChange} required />
            <input type="tel" className="form-control" placeholder="Contact" pattern="[0-9]{10}" maxLength="10" value={contact} onChange={handleContactChange} required />
          </div>

          <h2 className='text-center mt-5 mb-5' style={{ color: '#fac564' }}>Restaurant Review</h2>
          <table className='table table-bordered border-dark'>
            <thead>
              <tr>
                <th>Question</th>
                <th className='text-center'>Excellent</th>
                <th className='text-center'>Outstanding</th>
                <th className='text-center'>Very Good</th>
                <th className='text-center'>Good</th>
                <th className='text-center'>Normal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >1. Taste of Food</td>
                <td className='text-center'><input type="radio" name="taste" value={100} onChange={(e) => handleTasteChange(Number(e.target.value))} /></td>
                <td className='text-center'><input type="radio" name="taste" value={80} onChange={(e) => handleTasteChange(Number(e.target.value))} /></td>
                <td className='text-center'><input type="radio" name="taste" value={60} onChange={(e) => handleTasteChange(Number(e.target.value))} /></td>
                <td className='text-center'><input type="radio" name="taste" value={40} onChange={(e) => handleTasteChange(Number(e.target.value))} /></td>
                <td className='text-center'><input type="radio" name="taste" value={20} onChange={(e) => handleTasteChange(Number(e.target.value))} /></td>
              </tr>
              <tr>
                <td>2.Temperature of Food</td>
                <td className='text-center'><input type="radio" name="temperature" value={100} onChange={(e) => handleTemperatureChange(Number(e.target.value))} /></td>
                <td className='text-center'><input type="radio" name="temperature" value={80} onChange={(e) => handleTemperatureChange(Number(e.target.value))} /></td>
                <td className='text-center'><input type="radio" name="temperature" value={60} onChange={(e) => handleTemperatureChange(Number(e.target.value))} /></td>
                <td className='text-center'><input type="radio" name="temperature" value={40} onChange={(e) => handleTemperatureChange(Number(e.target.value))} /></td>
                <td className='text-center'><input type="radio" name="temperature" value={20} onChange={(e) => handleTemperatureChange(Number(e.target.value))} /></td>
              </tr>
              <tr>
                <td>3.Accuracy of Your Order</td>
                <td className='text-center'><input type="radio" name="accuracy" value={100} onChange={(e) => handleAccuracyChange(Number(e.target.value))} /></td>
                <td className='text-center'><input type="radio" name="accuracy" value={80} onChange={(e) => handleAccuracyChange(Number(e.target.value))} /></td>
                <td className='text-center'><input type="radio" name="accuracy" value={60} onChange={(e) => handleAccuracyChange(Number(e.target.value))} /></td>
                <td className='text-center'><input type="radio" name="accuracy" value={40} onChange={(e) => handleAccuracyChange(Number(e.target.value))} /></td>
                <td className='text-center'><input type="radio" name="accuracy" value={20} onChange={(e) => handleAccuracyChange(Number(e.target.value))} /></td>
              </tr>
            </tbody>
          </table>

          <div className='text-center'>
            <button type="submit" className="submit_btn">Submit Review</button>
          </div>
        </form>
      ) : (
        <div>
          <h2 className='mb-3' style={{ color: '#fac564' }}>Review Summary</h2>
          <p className='text-white'><strong>First Name:</strong> {firstName}</p>
          <p className='text-white'><strong>Last Name:</strong> {lastName}</p>
          <p className='text-white'><strong>Email:</strong> {email}</p>
          <p className='text-white'><strong>Contact:</strong> {contact}</p>
          <h3 className='mb-1' style={{ color: '#fac564' }}>Restaurant Review</h3>
          <p className='text-white'>Total: {totalProgress.toFixed(2)} {totalEmoji}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
