import React, { useState } from "react";
import "../styles/ReviewPage.css";
import Menu from "../components/Menu";
import Chat from "../components/Chat";
import SearchBar from "../components/SearchBar";

function ReviewPage() {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [searchText, setSearchText] = useState("");

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handlePostReview = () => {
    console.log("Review Posted:", { reviewText, rating });
    setReviewText("");
    setRating(0);
  };

  return (
    <div className="review-page">
      {/* Sidebar */}
      <div className="menu-container"><Menu /></div>

      {/* Main Content */}
      <div className="body-container">
        {/* Search Bar and Create Trip Button */}
        <div className="header">
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          
        </div>

        {/* Review Box */}
        <div className="trips">
        <div className="review-box">
          <h2>Trip Name</h2>
          <textarea
            placeholder="Enter text review here."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= rating ? "star selected" : "star"}
                onClick={() => handleStarClick(star)}
              >
                ★
              </span>
            ))}
          </div>
          <button className="post-review-btn" onClick={handlePostReview}>
            Post Review
          </button>
        </div>
      </div>
      </div>
      {/* Chat Section */}
      <div className="chat-container"><Chat /></div>
    </div>

  );
}

export default ReviewPage;
