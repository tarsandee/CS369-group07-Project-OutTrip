import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* เพิ่มหน้าอื่นได้ตรงนี้ */}
      </Routes>
    </div>
  );
}

export default App;
