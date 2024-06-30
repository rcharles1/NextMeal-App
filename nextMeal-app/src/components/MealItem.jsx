import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import Footer from './Footer';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';
import CollapsibleList from './CollapsibleList';
import ReviewList from './ReviewComponents/ReviewList';

import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getListingReviews } from '../utilities/getData';
import { Share, Bookmark,  RatingBubble, CircleHalfFull } from '/src/components/svgs/InterfaceSvg';
import { getMyFavorites } from '../features/wishlist/wishlistSlice';

function MealItem() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [mealDetails, setMealDetails] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const wishlist = useSelector(state => state.wishlist);
    const [favorite, setFavorite] = useState(false);
    const [googleId, setGoogleId] = useState(null);
    const [postedReviews, setPostedReviews] = useState([]);
    const [reviewsCount, setReviewsCount] = useState(0);
    const itemType = 'meal';
    const listingId = id;

    useEffect(() => {
        const fetchMealDoc = async () => {
            try {
                const response = await fetch(`http://localhost:3000/meals//${id}`);
                const data = await response.json();
                setMealDetails(data);
            } catch (error) {
                console.error('Error fetching meal document:', error);
            }
        };
        fetchMealDoc();
    }, [ id ]);

    useEffect(() => {
        dispatch(getMyFavorites());
    }, [dispatch]);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        setGoogleId(userData?.googleId);
    
        if (mealDetails) {
            const targetMealId = mealDetails._id;
            
            const isFavorite = wishlist.some(item => item.id === targetMealId);
            setFavorite(isFavorite);
        }
    }, [mealDetails]);
    

    const handleFavoriteClick = useCallback(
        async () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            if (!userData) {
                // Redirect to sign-in page if user is not logged in
                navigate('/signin');
                return;
            }
        
            // Toggle the favorite status
            setFavorite(prevState => !prevState);
        
            // Update database with latest changes
            const itemId = meal._id;
        
            try {
                const response = await updateFavoritesList(googleId, itemId, itemType);
                console.log('Favorites updated successfully:', response);
        
                // Update local storage
                const updatedWishlist = JSON.parse(localStorage.getItem('wishlist')) || {};
        
                if (favorite) {
                    //Remove from favorites
                    delete updatedWishlist[itemId];
                } else {
                    // Add to favorites
                    updatedWishlist[itemId] = true;
                }
        
                localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            } catch (error) {
                console.error('Error updating wishlist:', error);
            }
        },[favorite]
    ); 

    // Fetch reviews by listing id
    useEffect(() => {
        const postedListingReviews = async () => {
            try {
                const listingId = id;

                const data = await getListingReviews(listingId);
                setPostedReviews(data);
            } catch (error) {
                console.error('Error getting reviews for this listing:', error);
            }
        };
        postedListingReviews();
    }, [listingId]);

    const handleReviewsCount = useCallback((count) => {
        setReviewsCount(count);
    }, []);

    // Rating implementation
    const totalBubbles = 5;

    let rating = mealDetails ? mealDetails.rating : 0;
    let filledBubbles = Math.floor(rating);
    let halfFilled = rating % 1 !== 0;

    return (
        <div className="flex flex-col antialiased text-default/75 bg-bg_variant2 mx-auto text-base caret-transparent font-normal h-screen w-100 space-y-0">
            <div className="sticky top-0 z-50 w-full">
                <Header />
            </div>
            <div className='sticky w-full md:hidden caret-transparent top-20 sm:top-28 z-50 px-1 flex flex-row space-x-14 items-center justify-start caret-pure_white overflow-visible py-2 border-b-2 border-bg_variant2 backdrop-blur bg-opacity-70'> 
                <div className="ml-3 sticky"><MenuIcon /></div>
                <div className="capitalize font-base h-6 w-fit"><Breadcrumbs/></div>
            </div>
           {mealDetails ? (
                <div key={mealDetails._id} className="flex flex-col px-5 py-1 h-fit transition-all sm:px-16 md:px-20 duration-500">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold w-full text-xl md:text-lg text-wrap">{mealDetails.name}</h1>
                        <div className="flex space-x-1.5 mt-0.5">
                            <Bookmark fill={favorite ? 'red' : 'none'}  stroke={favorite ? 'red' : 'gray'} height="25" width="25" />
                            <Share fill={'gray'} height={25} width={25} />
                        </div>
                    </div>
                    <div className='flex flex-row text-default/75 font-bold w-fit space-x-1 text-base md:text-ssm items-center'>
                        <div className="flex -space-x-0.5">
                            {[...new Array(totalBubbles)].map((_, index) => {
                                if (index < filledBubbles) {
                                    // Full circle for filled ratings
                                    return (
                                        <div key={index} className="flex ">
                                            <RatingBubble  fill={'red'} stroke={'red'} height={15} width={15} />
                                        </div>
                                    );
                                } else if (index === filledBubbles && halfFilled) {
                                    // Half circle for decimal ratings
                                    return (
                                        <div key={index} className="flex ">
                                            <CircleHalfFull fill={'red'} height={15} width={15}/>
                                        </div>
                                    );
                                } else {
                                    // Empty circle for remaining ratings
                                    return (
                                        <div key={index} className="flex " >
                                            <RatingBubble fill={'none'} stroke={'red'} height={15} width={15}/>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                    <div className="hidden md:block border-r border-light_dark h-3"></div>
                    <div className="flex space-x-1 text-ssm">
                        {mealDetails.category.map((item, index, array) => {
                            return (
                            <p key={index}>
                                {item}
                                {index !== array.length - 1 ? ',' : ''}
                            </p>
                            );
                        })}
                    </div>

                    <div className="h-64 sm:h-96 sm:mt-2 sm:rounded-none md:px-8 md:w-8/12 mx-auto rounded">
                        <img src={`/assets/img/gallery/meals/food/${mealDetails.img}.webp`} alt="meal-photo" className="object-cover object-fill h-full w-full mx-auto" />
                    </div>

                    <div className="flex flex-col w-full sm:flex-row sm:mt-4 sm:p-2 sm:space-x-4 md:p-0 md:w-10/12 mx-auto">
                        <div className="h-fit pb-6 sm:pb-0 p-5 bg-pure_white sm:rounded-lg md:rounded-xl sm:h-80 sm:w-6/12 md:h-64 flex flex-col sm:justify-top">
                            <h4 className="font-bold text-lg md:text-base">Ratings and reviews</h4>
                            <div className="max-h-56 md:max-h-32 p-1"> 
                                {postedReviews.length === 0 ? <p className="text-base md:text-sm sm:mt-4">There are no reviews for {`${mealDetails.name}`}. Be the first to write one!</p> : <ReviewList reviews={postedReviews}  onReviewCount={handleReviewsCount} />  }
                            </div>
                            <a href='#allReviews'className="md:mt-6 underline font-semibold" >Read all reviews</a>
                            <NavLink to={`/review/${mealDetails._id}`} className="bg-bg_variant1 p-2 w-11/12 md:w-full mx-auto mt-2 sm:mt-32 md:my-auto text-base text-center md:text-sm text-pure_white font-bold rounded-lg shadow shadow-sm active:bg-bg_variant1/80">Write a Review</NavLink>
                        </div>
                        <div className="sm:hidden h-fit pb-6 p-5 bg-gray/35 sm:h-80 sm:w-6/12 flex flex-col space-y-2">
                            <h4 className="font-semibold text-center text-base">Ad Here</h4>
                        </div>
                        <div className="h-fit pb-6 p-5 text-sm w-full mx-auto bg-pure_white sm:h-80 sm:w-6/12 md:w-4/12 sm:rounded-lg md:h-64 md:rounded-xl flex flex-col sm:justify-top">
                            <h4 className="font-bold text-lg md:text-base">Details</h4>
                            <div className="text-base md:text-ssm mt-2 md:mt-4 pb-10 space-y-0.5 md:space-y-1 font-medium">
                                <p><span className="font-bold  md:text-ssm">Type:</span> {mealDetails.type}</p>
                                <p><span className="font-bold md:text-ssm">Course:</span> {mealDetails.course}</p>
                                <p><span className="font-bold md:text-ssm">Calories:</span> {mealDetails.nutritionalInfo.calories}</p>
                                <div className="flex space-x-1 text-wrap h-fit">
                                    <p className="font-bold md:text-ssm">Category:</p>
                                    <div className="category-list md:w-28 flex flex-wrap">
                                        {mealDetails.category.map((item, index, array) => {
                                            return (
                                                <div key={index} className="category-item w-fit">
                                                    <p>{item}{index !== array.length - 1 && ','}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <a href='#allDetails'className="underline font-semibold md:font-bold text-base md:text-ssm" >View all details</a>
                        </div>
                        <div className="sm:hidden h-fit pb-6 p-5 bg-gray/35 sm:h-80 sm:w-6/12 flex flex-col space-y-2">
                            <h4 className="font-semibold text-center text-base">Ad Here</h4>
                        </div>
                        <div className="h-fit pb-6 p-5 bg-pure_white sm:h-80 sm:w-6/12 sm:rounded-lg md:rounded-xl md:w-6/12 md:pb-5 md:h-64 flex flex-col space-y-2 sm:space-y-4 sm:justify-top">
                            <h4 className="font-bold text-lg md:text-base">Common Pairings</h4>
                            <div id='container' className="p-1 grid grid-cols-2 md:grid-cols-1 gap-y-2.5 gap-x-0 md:h-48 sm:mx-auto sm:px-12 md:px-2 overflow-y-auto scroll-smooth snap-center overflow-hidden">
                                {mealDetails.SpecialNotes.pairings.slice(0, showMore ? mealDetails.SpecialNotes.pairings.length : 2).map(dish => {
                                    return (
                                        <div className="h-40 w-36 sm:h-44 sm:w-32 md:h-24 md:w-32 drop-shadow-sm rounded-lg overflow-hidden caret-transparent cursor-pointer relative">
                                            <img 
                                                src={`/assets/img/gallery/meals/covers/${dish.image}.webp`} 
                                                className="object-cover h-full w-full hover:scale-110 transition-transform duration-200 ease-in-out" 
                                            />
                                            <div className="bg-gradient-to-t from-default to-default/5 h-7 sm:h-10 md:h-6 p-1 text-wrap text-center w-full absolute bottom-0 bg-blur">
                                                <p className="text-slate_white font-medium text-sm">{dish.pairingDish}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex justify-end md:hidden">
                                {mealDetails.SpecialNotes.pairings.length > 2 && (
                                    <button onClick={() => setShowMore(!showMore)} className="w-fit mr-6 md:text-ssm underline text-sm font-medium md:font-semibold active:text-bg_variant1">
                                        {showMore ? 'Show Less' : 'Show More'}
                                    </button>
                                )}
                            </div>
                            <a href='#common-pairings'className="hidden md:block underline text-ssm ml-28 font-semibold md:font-bold" >View all</a>
                        </div>
                    </div>

                    <div className="h-fit w-full pb-6 bg-pure_white sm:rounded-lg md:rounded-xl md:w-10/12 md:mt-4 mx-auto flex flex-col space-y-2">
                        <h4 className="font-semibold p-5 text-lg md:text-base" >Best nearby restaurants in {`${mealDetails.name}`}</h4>
                        <div className="bg-gray sm:bg-pure_white px-3 pb-3 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 p-1 sm:px-2">
                            
                        </div>
                    </div>

                    <div id="allDetails" className="h-fit pb-6 p-5 bg-pure_white mt-2 sm:mt-6 sm:rounded-lg md:rounded-xl sm:h-80 md:h-fit mb-8 md:w-10/12 mx-auto flex flex-col space-y-3 sm:space-y-4">
                        <h4 className="font-semibold text-lg md:text-base">Details and common pairings</h4>
                        <hr className="text-light_dark/35"></hr>
                        <div className="w-full h-fit sm:w-fit sm:flex">
                            <div className="sm:w-5/12 p-1">
                                <h5 className="font-semibold text-sm">ABOUT</h5>
                                <p className="px-1 text-sm text-justify sm:text-start mt-0.5">{mealDetails.description}</p>
                            </div>
                            <div className="p-2 text-sm">
                                <CollapsibleList mealDetails={mealDetails} />
                            </div>
                        </div>
                        <div id="common-pairings" className="hidden md:block">
                            <h4 className="font-semibold text-sm uppercase">Common Pairings</h4>
                            <div id='container' className="p-1 px-4 grid grid-cols-4 gap-x-0 gap-y-4">
                                {mealDetails.SpecialNotes.pairings.slice(0, showMore ? mealDetails.SpecialNotes.pairings.length : 4).map(dish => {
                                    return (
                                        <div className="h-40 w-36 sm:h-44 sm:w-32 md:h-24 md:w-32 drop-shadow-sm rounded-lg overflow-hidden caret-transparent cursor-pointer relative">
                                            <img 
                                                src={`/assets/img/gallery/meals/covers/${dish.image}.webp`} 
                                                className="object-cover h-full w-full hover:scale-110 transition-transform duration-200 ease-in-out" 
                                            />
                                            <div className="bg-gradient-to-t from-default to-default/5 h-7 sm:h-10 md:h-6 p-1 text-wrap text-center w-full absolute bottom-0 bg-blur">
                                                <p className="text-slate_white font-medium text-sm">{dish.pairingDish}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex justify-end">
                                {mealDetails.SpecialNotes.pairings.length > 4 && (
                                    <button onClick={() => setShowMore(!showMore)} className="w-fit mr-10 text-ssm underline text-sm font-semibold active:text-bg_variant1">
                                        {showMore ? 'Show Less' : 'Show More'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
           ) : <p>Fetching Data. Please wait...</p>}
           <Footer />
        </div>
    );
}

export default MealItem;