import React from "react";
import '../styles/HomePage.css';
import Menu from "../components/Menu";

function HomePage() {
  return (
    <div className="home-page">
      <div className="menu-container"><Menu/></div>
      <div className="body-container">Body</div>
      <div className="chat-container">Chat</div>
    </div>
  );
}

export default HomePage;