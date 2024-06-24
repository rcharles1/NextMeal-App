import React, {useState, useEffect} from 'react';
import Review from './Review';

 function ReviewList({ reviews, onReviewCount }) {
   const count = reviews.length;
   
   useEffect(() => {
      onReviewCount(count);
   }, [count]);

   return reviews.map((review, index) => (
      <div>
         <Review key={index} author={review.googleId} content={review.content} />
      </div>
   ));
  }

export default ReviewList;