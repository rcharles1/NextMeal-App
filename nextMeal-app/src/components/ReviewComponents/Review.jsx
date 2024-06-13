import React from 'react';

function Review({ author, content }) {
    return (
      <div>
        <h4>{author}</h4>
        <p>{content}</p>
      </div>
    );
  }
  
export default Review;