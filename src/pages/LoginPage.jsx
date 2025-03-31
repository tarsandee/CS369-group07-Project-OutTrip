import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate
import '../styles/LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // สร้างตัวแปร navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // ไม่ต้องสนใจข้อมูลที่กรอก ให้ไปหน้า Home ทันที
    navigate('/home'); // เปลี่ยนเส้นทางไปที่หน้า Home
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className='Logo'>OutTrip</h1> {/* OUTTRIP อยู่ใน box เดียวกับช่องกรอกข้อมูล */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="login-link">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <div className="sign-up">
          <a href="/sign-up">Don't have an account? Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
