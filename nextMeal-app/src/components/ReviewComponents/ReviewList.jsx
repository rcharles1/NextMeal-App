import React from 'react';

import Review from './Review';

 function ReviewList({ comments: reviews }) {
    return reviews.map((review, index) => (
      <Review key={index} author={review.author} content={review.content} />
    ));
  }

export default ReviewList;