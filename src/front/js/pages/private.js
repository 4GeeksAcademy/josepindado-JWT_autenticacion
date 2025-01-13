import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles/private.css';

export const Private = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const navigate = useNavigate();

  const handleDateChange = (date) => setSelectedDate(date);

  const handleLogout = () => {

    localStorage.removeItem('token');

    navigate('/login');
  };

  return (
    <div className="home-container justify-content-center">
      <div className="card">
        <h2 className="card-title">Calendar</h2>
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>

      <div className="card">
        <button className="btn btn-signup" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};