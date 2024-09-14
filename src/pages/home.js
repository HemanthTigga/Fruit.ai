// home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <h1>Fruit.AI</h1>
        <p>"Be Healthy!"</p>
      </div>

      <div className="grid">
        <Link to="/chat" className="grid-item chat">
          <h2>Chat</h2>
        </Link>
        <Link to="/translator" className="grid-item google-translate">
          <i className="fas fa-language"></i>
        </Link>
        <Link to="/faq" className="grid-item faqs">
          <h2>FAQs</h2>
        </Link>
        <Link to="/about" className="grid-item about">
          <h2>About</h2>
        </Link>
      </div>

      <div className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Home;
