import React, { useState } from "react";
import "../styles/HomePage.css";
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import TripCard from "../components/TripCard";
import tripData from "../data/tripData";
import Chat from "../components/Chat";
function HomePage() {
  const [searchText, setSearchText] = useState("");

  const filteredTrips = tripData.filter((trip) =>
    (trip.details + trip.location)
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <div className="home-page">
      <div className="menu-container"><Menu /></div>

      <div className="body-container">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <div className="trips">
          {filteredTrips.length > 0 ? (
            filteredTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))
          ) : (
            <p style={{ padding: "2rem", fontSize: "1.2rem" }}>No trips found.</p>
          )}
        </div>
      </div>

      <div className="chat-container"><Chat /></div>
    </div>
  );
}

export default HomePage;
