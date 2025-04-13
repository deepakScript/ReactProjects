import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import React from 'react'

const router = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default router

