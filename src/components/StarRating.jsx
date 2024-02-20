import React from "react";
const StarRating = ({ value }) => {

  const roundedValue = Math.round(value * 2) / 2;
  const fullStars = Math.floor(roundedValue);
  const hasHalfStar = roundedValue % 1 !== 0;
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
      } else if (hasHalfStar && i === fullStars) {
        stars.push(<span key={i} className="text-yellow-500">&#9733;&#189;</span>);
      } else {
        stars.push(<span key={i} className="text-gray-400">&#9734;</span>);
      }
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
