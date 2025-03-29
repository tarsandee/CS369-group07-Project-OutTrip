import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';  // รวม ChatPage ด้วย
import ReviewPage from './pages/ReviewPage'; // รวม ReviewPage ด้วย
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat" element={<ChatPage />} />  {/* เพิ่ม Route สำหรับ ChatPage */}
      <Route path="/review" element={<ReviewPage />} />  {/* เพิ่ม Route สำหรับ ReviewPage */}
    </Routes>
  );
}

export default App;
