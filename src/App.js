import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />  {/* Correct: Now renders Login component */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
