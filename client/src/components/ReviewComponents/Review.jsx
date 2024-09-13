import React, { useState, useEffect } from 'react';

function Review({ author, content }) {
  const [authorDetails, setAuthorDetails] = useState({});
  
  useEffect(() => {
    const getAuthorDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/userDetails/${author}`);
        if (response.ok) {
          const data = await response.json();
          setAuthorDetails(data);
        } else {
          console.log('Non-200 status received:', response.status);
          // Handle other non-200 statuses if needed
        }
      } catch (error) {
        console.log('Error fetching author details:', error);
      }
    };
    getAuthorDetails();
  }, [author]);

  return (
    <div className="flex flex-row space-x-3 max-h-20 md:items-top border-b-2 border-silver/10 py-3 p-2 px-3 md:px-0 md:py-2  text-default/75">
      <div id="image" className="size-12 md:size-5 rounded-full overflow-hidden">
        <img src={`${authorDetails.picture}`} className="object-cover sm:object-contain"/>
      </div>
      <div id="body" className="w-10/12">
        <h3 className="max-w-32 font-bold text-base md:text-ssm">{authorDetails.name}</h3>
        <p className="text-sm md:text-ssm lineclamp-2">{content[0].reviewBody}</p>
      </div>
    </div>
    );
  }
  
export default Review;