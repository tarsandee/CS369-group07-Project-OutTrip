import React from "react";
import '../styles/HomePage.css';
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import TripCard from "../components/TripCard";
import tripData from "../data/tripData";
import Chat from "../components/Chat";

function HomePage() {
  return (
    <div className="home-page">
      <div className="menu-container"><Menu/></div>
      <div className="body-container">
        <SearchBar/>
        <div className="trips">
          {tripData.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
      <div className="chat-container"><Chat/></div>
    </div>
  );
}

export default HomePage;