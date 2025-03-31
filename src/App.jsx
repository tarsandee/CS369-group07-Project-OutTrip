import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';  
import ReviewPage from './pages/ReviewPage'; 
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} /> 
      <Route path="/home" element={<HomePage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/chat" element={<ChatPage />} />  
      <Route path="/review" element={<ReviewPage />} />  
    </Routes>
  );
}

export default App;
