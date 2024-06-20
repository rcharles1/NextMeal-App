import React, { useState } from 'react';
import Header from '../Header';
import MenuIcon from '../MenuIcon';
import Breadcrumbs from '../BreadCrumbs';
import RatingInput from '../RatingComponents/RatingInput';
import CuisineDropdown from './CuisineDropdown';

import { ArrowUpIcon, ArrowDownIcon } from '../svgs/InterfaceSvg';

const reviewOptions = [
  { text: 'Business' },
  { text: 'Couples' },
  { text: 'Family' },
  { text: 'Friends' },
  { text: 'Solo' },
];

const cuisineOptions = [
  { text: 'Select one' },
  { text: 'Breakfast' },
  { text: 'Beer' },
  { text: 'Lunch' },
  { text: 'Dinner' },
  { text: 'Dessert' },
  { text: 'Coffee or tea' },
  { text: 'Wine' },
  { text: 'Spirits' },
  { text: 'Other' },
];

const ReviewForm = ({ onSubmit }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [selectedReviewOption, setSelectedReviewOption] = useState([]);
  const [activeOption, setActiveOption] = useState('');
  const [IsVisible, setIsVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ comment: review, rating });
    setReview('');
    setRating(0);
  };

  const handleClick = (reviewOption) => {
    setSelectedReviewOption(prevReviewOption => {
      return [ ...prevReviewOption, reviewOption]
    });
  };

  const onClose = (item) => {
    setActiveOption(item);
    setIsVisible(false);
  }

  return (
   <div className="h-screen caret-transparent">
      <div className="sticky top-0 z-50 w-full">
          <Header />
      </div>
      <div className='sticky w-full md:hidden caret-transparent top-20 sm:top-28 z-50 px-1 flex flex-row space-x-14 items-center justify-start caret-pure_white overflow-visible py-2 border-b-2 border-bg_variant2 backdrop-blur bg-opacity-70'> 
          <div className="ml-3 sticky"><MenuIcon /></div>
          <div className="capitalize font-base h-6 w-fit"><Breadcrumbs/></div>
      </div>
      <div id='content' className="p-2 sm:px-20 space-y-1 md:px-32 md:items-top md:flex md:justify-even md:space-x-10">
        <div className="h-fit p-5 md:p-1 md:w-3/12 md:mt-4 md:sticky md:top-24">
          <div className="h-28 md:h-fit w-full md:space-y-1.5 p-3 border border-silver/30 items-center rounded-md flex flex-row space-x-2 md:space-x-0  md:flex-col md:py-1.5 md:p-0">
            <div className="size-24 md:size-40 bg-gray"><img /></div>
            <div className="md:w-40 px-1">
              <p className="font-semibold text-lg text-wrap w-fit">Restaurant Name</p>
              <p className="font-medium text-base">Location</p>
            </div>
          </div>
        </div>
        <div className="hidden md:block border border-silver/30 h-72"></div>
        <div className="p-5 h-fit md:p-2 md:w-9/12 md:h-fit overflow-hidden">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6 py-1">
            <div className="space-y-2">
              <h3 className="font-semibold text-xl sm:text-lg md:text-base">How would you rate your experience?</h3>
              <RatingInput initialRating={rating} onRate={setRating} />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-xl sm:text-lg md:text-base">What did you go for?</h3>
              <button 
                onClick={() => setIsVisible(!IsVisible)}
                className="p-1 border-2 sm:border w-fit rounded-lg mb-2 flex space-x-2 items-center"
              >
               <span className="font-medium sm:text-sm">{activeOption ? `${activeOption.text}` : `Select one`}</span>
               <span>{IsVisible ? <ArrowUpIcon  height='20' width='20' fill='black'/> : <ArrowDownIcon height='20' width='20' fill='black'/> } </span>
              </button>
              {IsVisible ? <CuisineDropdown cuisineOptions={cuisineOptions} onSelect={onClose} /> : ''}
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-xl sm:text-lg md:text-base">Who did you go with?</h3>
              <div className="flex flex-wrap md:flex-nowrap px-1 p-1 sm:text-base md:text-sm font-medium">
                {reviewOptions.map((item, index) => {
                  const isSelected = selectedReviewOption[reviewOptions.text] && selectedReviewOption[reviewOptions.text].includes(item.text);
                  return(
                    <div 
                      key={index} 
                      onClick={() => handleClick(reviewOptions.item)} 
                      className={`border border-silver/35 justify-center mr-2 cursor-pointer rounded-md sm:h-8 sm:p-1 sm:px-1.5 md:p-2 md:py-2 h-fit w-fit p-0.5 px-1 ${isSelected ? 'bg-bg_variant1 text-pure_white' : 'bg-none text-default/75'}`}
                    >
                      {item.text}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-xl sm:text-lg md:text-base">Write your review</h3>
                <textarea
                  value={review}
                  onChange={(event) => setReview(event.target.value)}
                  placeholder="Write a review..."
                  className="w-full h-28 p-2 sm:text-base md:text-sm outline outline-2 outline-silver/30 rounded caret-default "
                />
            </div>
            <div className="flex">
              <input 
                type="checkbox"
                checked={isSelected}
                onChange={() => handleFilterClick(filterOption.type, value.value)}
                className="form-checkbox accent-bg_variant1"
              />
              <p className="text-ssm">
                I certify that this review is based on my own experience and is my genuine opinion of this listing, 
                and that i have no personal or business relationship with this establishment, and have not been offered 
                any incentive or payment originating from the establishment to write this review.
              </p>
            </div>
            <button type="submit" className="bg-bg_variant1 w-full sm:w-96 mx-auto sm:p-1.5 sm:text-sm p-2 text-pure_white font-semibold rounded-lg">Continue</button>
        </form>
        </div>
      </div>
   </div>
  );
};

export default ReviewForm;