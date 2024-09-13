import React, { useState, useEffect, useCallback } from 'react';
import CollapsibleList from '../ComplementaryComponents/CollapsibleList';
import ReviewList from '../ReviewComponents/ReviewList';
import Cart from '../CartComponents/Cart';

import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getListingReviews } from '../../utilities/getData';
import { Share, Bookmark,  RatingBubble, CircleHalfFull } from '/src/components/svgs/InterfaceSvg';
import { getMyFavorites } from '../../features/wishlist/wishlistSlice';
import { Diamonds } from '../svgs/InterfaceSvg';

function MealListing() {
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
        <div className="flex flex-col antialiased text-default/75 bg-bg_variant2 mx-auto text-base caret-transparent font-normal h-fit w-100 space-y-0">
           {mealDetails ? (
                <div key={mealDetails._id} className="flex flex-col px-5 py-1 h-fit transition-all ssm:px-10 duration-500">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold w-full text-xl md:text-lg text-wrap">{mealDetails.name}</h1>
                        <div className="flex space-x-1.5 mt-0.5 items-center">
                            <Bookmark fill={favorite ? 'red' : 'none'}  stroke={favorite ? 'red' : 'black'} height="25" width="25" />
                            <Share fill={''} height={25} width={25} />
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
                    <div className="flex space-x-1 text-sm text-default/90">
                        {mealDetails.category?.map((item, index, array) => {
                            return (
                            <div key={index} className='flex space-x-0.5 items-center'>
                                <p>{item}</p>
                                {index !== array.length - 1 ? <Diamonds fill="black"/> : ''}
                            </div>
                            );
                        })}
                    </div>

                    <div className="h-64 ssm:h-48 sm:mt-2 sm:rounded-none md:px-8 ssm:w-8/12 mx-auto rounded">
                        <img src={`/assets/img/gallery/meals/food/${mealDetails.gallery?.[0]}.webp`} alt="meal-photo" className="object-cover ssm:object-contain h-full w-full mx-auto" />
                    </div>

                    <div className="flex flex-col w-full sm:flex-row sm:mt-4 sm:p-2 sm:space-x-4 md:p-0 lg:w-11/12 mx-auto">
                        <div className="h-fit pb-6 sm:pb-0 p-5 bg-pure_white sm:rounded-lg md:rounded-xl sm:h-80 ssm:w-4/12 md:h-64 flex flex-col sm:justify-top">
                            <h4 className="font-bold text-lg">Ratings and reviews</h4>
                            <div className="max-h-56 md:max-h-32 p-1"> 
                                {postedReviews?.length === 0 ? <p className="text-base sm:mt-2">There are no reviews for {`${mealDetails.name}`}. Be the first to write one!</p> : <ReviewList reviews={postedReviews}  onReviewCount={handleReviewsCount} />  }
                            </div>
                            <a href='#allReviews'className="md:mt-6 hidden underline font-semibold" >Read all reviews</a>
                            <NavLink to={`/review/${mealDetails._id}`} className="bg-bg_variant1 p-2 w-11/12 ssm:w-10/12 ssm:p-2.5 mx-auto mt-2 ssm:mt-16 text-base text-center text-slate_white font-bold rounded-xl shadow-sm active:bg-bg_variant1/80">Write a review</NavLink>
                        </div>
                        <div className="sm:hidden h-fit pb-6 p-5 bg-gray/35 sm:h-80 sm:w-6/12 flex flex-col space-y-2">
                            <h4 className="font-semibold text-center text-base">Ad Here</h4>
                        </div>
                        <div className="h-fit pb-6 p-5 w-full mx-auto bg-pure_white ssm:w-4/12 sm:rounded-lg ssm:h-64 md:rounded-xl flex flex-col sm:justify-top relative">
                            <h4 className="font-bold text-lg">Details</h4>
                            <div className="text-base mt-2 md:mt-3 space-y-0.5 ssm:px-2">
                                <p><span className="font-semibold ">Type:</span> {mealDetails.type}</p>
                                <p><span className="font-semibold ">Course:</span> {mealDetails.course}</p>
                                <p><span className="font-semibold">Calories:</span> {mealDetails.nutritionalInfo?.calories}</p>
                                <div className="flex space-x-1 text-wrap h-fit">
                                    <p className="font-semibold">Category:</p>
                                    <div className="flex truncate">
                                        {mealDetails.category.map((item, index, array) => {
                                            return (
                                                <div key={index} className="flex space-x-1 ">
                                                    <p>{item}</p>
                                                    {index !== array.length - 1 && ' , '}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <a href='#allDetails'className="p-2.5 bg-bg_variant1 mt-12 rounded-xl outline text-slate_white text-center font-semibold md:font-bold text-base ssm:w-8/12 mx-auto" >See every detail</a>
                        </div>
                        <div className="sm:hidden h-fit pb-6 p-5 bg-gray/35 sm:h-80 sm:w-6/12 flex flex-col space-y-2">
                            <h4 className="font-semibold text-center text-base">Ad Here</h4>
                        </div>
                        <div className="h-fit pb-6 p-5 px-2 bg-pure_white ssm:rounded-xl ssm:w-4/12 ssm:pb-5 ssm:h-64 flex flex-col space-y-2 ssm:space-y-4 ssm:justify-top relative">
                            <h4 className="font-bold text-lg">Common Pairings</h4>
                            <div id='container' className={`relative p-1 flex justify-center ssm:h-36 overflow-hidden transition-all duration-300 ease-in-out ${showMore ? 'h-fit': 'h-48'}`}>
                                <div className={`absolute inset-0 bg-gradient-to-t from-slate_white to-transparent z-10 ${showMore ? 'hidden' : 'visible'}`}></div>
                                <div className="grid grid-cols-2 ssm:grid-cols-1 items-center ssm:gap-y-0 gap-y-2.5 gap-x-3 h-full ssm:h-56 ssm:p-0 ssm:mx-auto">
                                    {mealDetails.SpecialNotes.pairings.slice(0, showMore ? mealDetails.SpecialNotes.pairings.length : 4).map((dish, index) => {
                                    return (
                                        <div key={index} className="h-32 w-40 sm:h-28 ssm:w-48 drop-shadow-sm rounded-lg overflow-hidden caret-transparent cursor-pointer relative">
                                            <img 
                                                src={`/assets/img/gallery/meals/covers/${dish.image}.webp`} 
                                                className="object-cover h-full w-full hover:scale-110 transition-transform duration-200 ease-in-out" 
                                            />
                                            <div className="bg-gradient-to-t from-default to-transparent h-7 sm:h-10 md:h-6 p-1 text-wrap text-center w-full absolute bottom-0 bg-blur z-10">
                                                <p className="text-slate_white font-semibold text-base">{dish.pairingDish}</p>
                                            </div>
                                        </div>
                                    );
                                    })}
                                </div>
                            </div>
                            <div className="absolute bottom-0 inset-x-0 z-10 px-4 flex bg-bg_variant1/90 rounded-3xl w-fit mx-auto ssm:hidden">
                                {mealDetails.SpecialNotes.pairings.length > 2 && (
                                    <button onClick={() => setShowMore(!showMore)} className="w-fit p-3 text-slate_white text-base tracking-wide font-semibold">
                                        {showMore ? 'See Less ' : 'See All'}
                                    </button>
                                )}
                            </div>
                            <a href='#common-pairings'className="hidden md:block p-2.5 mx-auto bg-bg_variant1 w-8/12 rounded-xl outline text-slate_white text-center font-semibold md:font-bold text-base" >See every dish</a>
                        </div>
                    </div>

                    <div className="h-fit w-full pb-6 bg-pure_white sm:rounded-lg md:rounded-xl mt-3 md:mt-4 mx-auto flex flex-col space-y-2">
                        <h4 className="font-bold p-5 text-lg" >Availability in nearby restaurants</h4>
                        <div className="bg-gray sm:bg-pure_white px-3 pb-3 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 p-1 sm:px-2">
                            
                        </div>
                    </div>

                    <div className="h-fit pb-6 p-5 px-1.5 bg-pure_white mt-2 sm:mt-6 sm:rounded-lg md:rounded-xl sm:h-80 md:h-fit mb-8  mx-auto flex flex-col space-y-3 sm:space-y-4">
                        <h4 id="allDetails" className="font-bold text-lg">Details and common pairings</h4>
                        <hr className="text-light_dark/35"></hr>
                        <div className="w-full h-fit sm:flex">
                            <div className="sm:w-6/12 p-1">
                                <h5 className="font-bold text-base">ABOUT</h5>
                                <p className="px-1 text-base text-start mt-2">{mealDetails.description}</p>
                            </div>
                            <div className="ssm:p-2 ssm:w-7/12">
                                <CollapsibleList mealDetails={mealDetails} />
                            </div>
                        </div>
                        <div id="common-pairings" className="hidden md:block">
                            <h4 className="font-semibold text-base uppercase">Common Pairings</h4>
                            <div id='container' className="p-1 px-2 mt-2 grid grid-cols-4 gap-x-4 gap-y-4">
                                {mealDetails.SpecialNotes.pairings.slice(0, showMore ? mealDetails.SpecialNotes.pairings.length : 4).map(dish => {
                                    return (
                                        <div className="h-40 w-36 sm:h-44 sm:w-48 drop-shadow-sm rounded-lg overflow-hidden caret-transparent cursor-pointer relative">
                                            <img 
                                                src={`/assets/img/gallery/meals/covers/${dish.image}.webp`} 
                                                className="object-cover h-full w-full hover:scale-110 transition-transform duration-200 ease-in-out" 
                                            />
                                            <div className="bg-gradient-to-t from-default to-transparent h-7 ssm:h-12 p-1 text-wrap text-center w-full absolute bottom-0 bg-blur">
                                                <p className="text-slate_white font-medium text-sm ssm:text-base">{dish.pairingDish}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex justify-end">
                                {mealDetails.SpecialNotes.pairings.length > 4 && (
                                    <button onClick={() => setShowMore(!showMore)} className="w-fit mr-10 underline text-base font-semibold active:text-bg_variant1">
                                        {showMore ? 'See Less' : 'See More'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
           ) : <p>Fetching Data. Please wait...</p>}
        </div>
    );
}

export default MealListing;