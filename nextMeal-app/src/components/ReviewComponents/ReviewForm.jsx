import React, { useState } from 'react';// Import your RatingInput component

const ReviewForm = ({ onSubmit }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ comment: review, rating });
    setReview('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} className="outline ">
      <textarea
        value={review}
        onChange={(event) => setReview(event.target.value)}
        placeholder="Write a review..."
      />
      <RatingInput initialRating={rating} onRate={setRating} />
      <button type="submit">Post</button>
    </form>
  );
};

export default ReviewForm;
