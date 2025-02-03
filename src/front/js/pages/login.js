import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/home.css";

export const Login=()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        localStorage.setItem('token', data.access_token);
        navigate('/private');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="home-container justify-content-center">
      <div className="card">
        <h2 className="card-title">Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="card-buttons">
            <button className="btn btn-secondary mb-3" type="submit">Login</button>
          </div>
        </form>
        <p>
          ¿Todavia no tienes una cuenta? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}