import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ใช้ useNavigate
import '../styles/LoginPage.css'; // ใช้ CSS เดียวกับ Login

function SignUpPage() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const navigate = useNavigate(); // สร้างตัวแปร navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // ตรวจสอบว่ารหัสผ่านกับการยืนยันรหัสผ่านตรงกัน
    if (password !== rePassword) {
      alert('Passwords do not match!');
      return;
    }
    // เมื่อคลิก sign up จะไปที่หน้า Login
    navigate('/'); // เปลี่ยนเส้นทางไปที่หน้า Login (/)
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className='Logo'>OUTTRIP</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
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
              required
            />
          </div>
          <div>
            <label htmlFor="rePassword">Re-enter Password</label>
            <input
              type="password"
              id="rePassword"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              placeholder="Re-enter your password"
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className="login-link">
          <a href="/">You already have an account? Login here</a>
        </div>
      </div>
      <div className="image-container">
        <img src="your-image-url-here.jpg" alt="Sign Up Background" />
      </div>
    </div>
  );
}

export default SignUpPage;
