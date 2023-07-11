import React, { useState } from 'react';
import './guides.css';

function Guides({ onNext }) {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    date: '',
    Table: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(bookingDetails);
  };

  return (
    <div className='guid'>
    <div className="guides-container">
      <h1>Booking</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={bookingDetails.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={bookingDetails.date}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Table:
          <select
            name="service"
            value={bookingDetails.service}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a Table</option>
            <option value="Service 1">Table 1</option>
            <option value="Service 2">Table 2</option>
            <option value="Service 3">Table 3</option>
            <option value="Service 3">Table 4</option>
            <option value="Service 3">Table 5</option>
            <option value="Service 3">Table 6</option>
            <option value="Service 3">Table 7</option>
          </select>
        </label>
        <br />

        <button type="submit">Next</button>
      </form>
    </div>
    </div>
  );
}

export default Guides;
