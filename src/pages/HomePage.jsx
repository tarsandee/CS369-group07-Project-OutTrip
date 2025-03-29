import React from "react";
import '../styles/HomePage.css';
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import TripCard from "../components/TripCard";

function HomePage() {
  return (
    <div className="home-page">
      <div className="menu-container"><Menu/></div>
      <div className="body-container">
        <SearchBar/>
        <div className="trips">
          <div className="trip-card">
            <h2>Trip 1</h2>
            <p>Details about Trip 1</p>
          </div>
          <TripCard/>
        </div>
        </div>
      <div className="chat-container">Chat</div>
    </div>
  );
}

export default HomePage;