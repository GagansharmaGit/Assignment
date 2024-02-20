import React, { useState } from 'react';
import ReviewList from './ReviewList';
import StarRating from './StarRating';
import ReviewHeader from './ReviewHeader';
import { sentimentColors } from './ReviewList';

function ReviewHighlighter() {
  const [tooltipContent, setTooltipContent] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const highlightContent = (content, highlightIndices, sentiment, topic) => {
    let highlightedContent = [];
    let currentIndex = 0;
    highlightIndices.forEach(([startIdx, endIdx, text]) => {
      highlightedContent.push(content.substring(currentIndex, startIdx));
      highlightedContent.push(
        <span
          key={`${startIdx}-${endIdx}`}
          className="highlighted-text"
          style={{ backgroundColor: sentimentColors[sentiment] }}
          onMouseEnter={(e) => handleMouseEnter(e, topic)}
          onMouseLeave={() => handleMouseLeave()}
        >
          {content.substring(startIdx, endIdx)}
        </span>
      );
      currentIndex = endIdx;
    });
    highlightedContent.push(content.substring(currentIndex));
    return highlightedContent;
  };

  const handleMouseEnter = (e, topic) => {
    setTooltipContent(topic);
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setTooltipContent(null);
  };

  return (
    <div className="flex flex-col justify-start h-[300px] w-[800px] p-4" onMouseMove={(e) => setTooltipPosition({ x: e.clientX, y: e.clientY })}>
      {ReviewList.map((review) => (
        <div key={review.review_id} className="flex flex-col justify-center p-5">
          <ReviewHeader reviewer_name={review.reviewer_name} />
          <div className="flex">
            <StarRating value={review.rating_review_score} />
            <div className="pl-2 text-xs flex justify-center items-center">{review.date}</div>
          </div>
          {review.analytics.map((analytics, idx) => (
            <div key={idx}>
              {highlightContent(review.content, analytics.highlight_indices, analytics.sentiment, analytics.topic)}
            </div>
          ))}
        </div>
      ))}
      {tooltipContent && (
        <div className="fixed bg-black bg-opacity-70 text-white p-5 rounded" style={{ top: tooltipPosition.y, left: tooltipPosition.x }}>
          {tooltipContent}
        </div>
      )}
    </div>
  );
}

export default ReviewHighlighter;
