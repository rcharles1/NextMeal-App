import React, { useState, useEffect } from 'react';
import Header from '../Header';
import MenuIcon from '../MenuIcon';
import Breadcrumbs from '../BreadCrumbs';
import RatingInput from '../RatingComponents/RatingInput';
import Loading from '../Loading';

import { fetchRestaurantDoc, addReview } from '../../utilities/getData';
import { reviewOptions, cuisineOptions } from '../../utilities/preferences';

import { useParams, useNavigate } from 'react-router-dom';

import { ArrowUpIcon, ArrowDownIcon } from '../svgs/InterfaceSvg';
import UploadAndDisplayImage from '../UploadandDisplayImage';

const CartForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [restaurantDoc, setRestaurantDoc] = useState(null);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [selectedReviewOption, setSelectedReviewOption] = useState([]);
  const [activeOption, setActiveOption] = useState('');
  const [IsVisible, setIsVisible] = useState(false);  
  const [content, setContent] = useState({
    reviewBody: '',
    rating: 1,
    visitCompany: '',
    visitReason: '',
  });
  const size = 'sm'; // Controls icon size

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const response = await fetchRestaurantDoc(id);
        setRestaurantDoc(response);
      } catch (error) {
        console.error('Error fetching restaurant document:', error);
      }
    };

    fetchRestaurantDetails();
  }, [ id ]);
  
  useEffect(() => {
    const postReview = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('user'));
        const googleId = userData?.googleId;
        const listingId = id;
        const createdAt = new Date();

        await addReview(createdAt, googleId, listingId, content);
        console.log('Posted successfully');
      } catch (error) {
        console.error('Error posting review:', error);
      }
    };

    postReview();
  }, [content]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setContent({ reviewBody: review, rating: rating, visitCompany: selectedReviewOption, visitReason: activeOption});
    setReview('');
    setRating(0);
    handleGoBack();
  };

  const handleClick = (reviewOption) => {
    const data = reviewOption.text;
    setSelectedReviewOption(prevData => {
      return [ ...prevData, data];
    });
  };

  const onClose = (item) => {
    const data = item.text;
    setActiveOption(data);
    setIsVisible(false);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
   <div className="h-fit outline caret-transparent sm:text-ssm">
      <div id='content' className="p-2 sm:px-20 space-y-1 md:px-32 md:items-top md:flex md:justify-even md:space-x-10">
        <div className="p-5 h-fit md:p-2 md:w-9/12 md:h-fit overflow-hidden">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6 py-1">
        <div className="space-y-2">
          <h3 className="font-bold text-xl sm:text-lg md:text-base">How would you rate your experience?</h3>
          <RatingInput onRate={setRating} />
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-xl sm:text-lg md:text-base">What did you go for?</h3>
          <a 
            onClick={() => setIsVisible(!IsVisible)}
            className="p-1 border-2 sm:border w-fit rounded-lg mb-2 flex space-x-2 items-center"
          >
            <span className="font-medium sm:text-sm">{activeOption ? `${activeOption}` : `Select one`}</span>
            <span>{IsVisible ? <ArrowUpIcon  height='20' width='20' fill='black'/> : <ArrowDownIcon height={`${size === 'sm' ? '10' : '20'}`} width={`${size === 'sm' ? '10' : '20'}`} fill='black'/> } </span>
          </a>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-xl sm:text-lg md:text-base">Who did you go with?</h3>
          <div className="flex flex-wrap md:flex-nowrap px-1 p-1 sm:text-base md:text-sm font-medium">
            {reviewOptions.map((item, index) => {
            const isSelected = selectedReviewOption?.includes(item.text);
              return(
                <div 
                  key={index} 
                  onClick={() => handleClick(item)} 
                  className={`border border-silver/35 justify-center mr-2 cursor-pointer rounded-lg sm:h-8 sm:p-1 sm:px-1.5 md:p-2 md:py-2 h-fit w-fit p-0.5 px-1 ${isSelected ? 'bg-bg_variant1 text-pure_white' : 'bg-none text-default/75'}`}
                >
                  {item.text}
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-xl sm:text-lg md:text-base">Write your review</h3>
          <textarea
            value={review}
            onChange={(event) => setReview(event.target.value)}
            placeholder="Write a review..."
            className="w-full h-28 p-2 sm:text-base md:text-sm border border-silver/20 rounded caret-default active:border-bg_variant1"
          />
        </div>

        <button type="submit" className="bg-bg_variant1 w-full sm:w-96 md:w-full mx-auto sm:p-1.5 sm:text-sm p-2 text-pure_white font-semibold rounded-lg">Share your experience</button>
    </form>
    </div>
      </div>
   </div>
  );
};

export default CartForm;