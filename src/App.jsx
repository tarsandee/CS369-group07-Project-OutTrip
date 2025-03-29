import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import './App.css'

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ChatPage' element={<ChatPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
