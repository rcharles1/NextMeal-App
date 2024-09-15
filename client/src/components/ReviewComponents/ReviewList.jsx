import { useEffect} from 'react';
import Review from './Review';

 function ReviewList({ reviews, onReviewCount }) {
   const count = reviews.length;
   
   useEffect(() => {
      onReviewCount(count);
   }, [count, onReviewCount]);

   return reviews.map((review, index) => (
      <div key={index}>
         <Review author={review.googleId} content={review.content} />
      </div>
   ));
  }

export default ReviewList;