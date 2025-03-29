import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
<<<<<<< HEAD
import './App.css';
=======
import ChatPage from './pages/ChatPage';
import './App.css'
>>>>>>> 6cba46312f340dd7c05e067261381677ae1ebdb8

function App() {
  return (
    <div className='app'>
<<<<<<< HEAD
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* เพิ่มหน้าอื่นได้ตรงนี้ */}
      </Routes>
=======
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ChatPage' element={<ChatPage />} />
        </Routes>
      </Router>
>>>>>>> 6cba46312f340dd7c05e067261381677ae1ebdb8
    </div>
  );
}

export default App;
