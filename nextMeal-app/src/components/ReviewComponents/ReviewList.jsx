import React, {useState, useEffect} from 'react';
import Review from './Review';

import { addReview } from '../../utilities/getData';

 function ReviewList({ comments: reviews }) {
    return reviews.map((review, index) => (
      <Review key={index} author={review.author} content={review.content} />
    ));
  }

export default ReviewList;