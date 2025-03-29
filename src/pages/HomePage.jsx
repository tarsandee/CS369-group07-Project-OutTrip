import React from "react";
import '../styles/HomePage.css';
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";

function HomePage() {
  return (
    <div className="home-page">
      <div className="menu-container"><Menu/></div>
      <div className="body-container"><SearchBar/></div>
      <div className="chat-container">Chat</div>
    </div>
  );
}

export default HomePage;