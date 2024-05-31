import { React, useState, useEffect, useCallback } from 'react';
import Details from './Details';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menus';
import RestaurantServices from './RestaurantServices';
import Reviews from './Reviews';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';
import Loading from './Loading';

import { getMyFavorites } from '../features/wishlist/wishlistSlice';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Bookmark, Circle, CircleHalfFull, Share } from './svgs/InterfaceSvg';
import RestaurantAmenities from './RestaurantAmenities';

function RestaurantProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [activeTab, setActiveTab ] = useState(null);
    const { id } = useParams();
    const [restaurantDoc, setRestaurantDoc] = useState(null);
    const wishlist = useSelector(state => state.wishlist);
    const [favorite, setFavorite] = useState(false);
    const [googleId, setGoogleId] = useState(null);
    const itemType = 'restaurant';

    useEffect(() => {
        const fetchRestaurantDoc = async () => {
            try {
                const response = await fetch(`http://localhost:3000/restaurants//${id}`);
                const data = await response.json();
                setRestaurantDoc(data);
            } catch (error) {
                console.error('Error fetching restaurant document:', error);
            }
        };

        fetchRestaurantDoc();
    }, [ id ])

    const handleClick = (id) => {
        let displayTab;
        switch (id) {
            case 'detailsTab':
                displayTab = 'details';
                break;
            case 'menusTab':
                displayTab = 'menus';
                break;
            case 'reviewsTab':
                displayTab = 'reviews';
                break;
            default:
                displayTab = 'details';
                break;
        }
    };
    
    useEffect(() => {
        dispatch(getMyFavorites());
    }, [dispatch]);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        setGoogleId(userData?.googleId);

        const targetRestaurantId = id;
        
        const isFavorite = wishlist.some(item => item.id === targetRestaurantId);
        setFavorite(isFavorite);
    }, [id]);

    const handleWishlistClick = useCallback(
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
            const itemId = id;
        
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

    const totalBubbles = 5;

    let rating = restaurantDoc ? restaurantDoc.rating : 0;
    let filledBubbles = Math.floor(rating);
    let halfFilled = rating % 1 !== 0;


    return (
        <div className="mx-auto text-base font-normal h-screen w-100 text-sm antialiased "> 
            <div className="sticky top-0 z-10 w-full">
                <Header/>
           </div>
            <div className='sticky top-20 sm:top28 md:top-14 z-10 px-4 flex flex-row space-x-3 items-center justify-start caret-bg_variant2 py-2 border-b-2 border-gray backdrop-blur bg-opacity-70'> 
                <div className="z-0"><MenuIcon /></div>
                <div className="capitalize h-6 items-center text-sm flex w-full"><Breadcrumbs restaurantDoc={restaurantDoc}/></div>
            </div>
            { restaurantDoc ? (
                <div className="sm:py-2 sm:px-4 flex flex-col ng-gray/35 caret-transparent">
                    <div className="p-1 px-4 sm:px-1 space-y-1">
                        <div className="flex justify-between items-center">
                            <h2 className="font-bold w-full text-xl text-wrap">{restaurantDoc.name}</h2>
                            <div className="flex space-x-1.5 mt-0.5">
                                <Bookmark fill={favorite ? 'red' : 'none'}  stroke={favorite ? 'red' : 'gray'} height="25" width="25" />
                                <Share fill={'gray'} height={25} width={25} />
                            </div>
                        </div>
                        <div className='flex flex-row text-default/75 font-semibold w-fit space-x-1 text-base font-normal items-center'>
                            {[...new Array(totalBubbles)].map((_, index) => {
                                if (index < filledBubbles) {
                                    // Full circle for filled ratings
                                    return <Circle key={index} fill={'red'} stroke={'red'} height={15} width={15} />;
                                } else if (index === filledBubbles && halfFilled) {
                                    // Half circle for decimal ratings
                                    return <CircleHalfFull  key={index} fill={'red'} height={15} width={15} />;
                                } else {
                                    // Empty circle for remaining ratings
                                    return <Circle  key={index} fill={'none'} stroke={'silver'} height={15} width={15} />;
                                }
                            })}
                            <div className="flex items-center space-x-0.5">
                                <span className="">{`${restaurantDoc.reviews.length} reviews`}</span>
                            </div>
                        </div>
                        <div className="flex space-x-1">
                            {restaurantDoc.cuisine.map((item, index, array) => {
                                return (
                                <p key={index}>
                                    {item}
                                    {index !== array.length - 1 ? ',' : ''}
                                </p>
                                );
                            })}
                        </div>
                        <p>{restaurantDoc.details.hours.openhours}</p>
                    </div>
                    
                    <div className="h-64 sm:h-96 sm:mt-2 sm:rounded-none rounded">
                        <img src={`/assets/img/gallery/restaurants/${restaurantDoc.gallery.img1}.webp`} alt="restaurant-photo" className="object-cover h-full w-full mx-auto" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:mt-4 sm:p-2 space-x-4">
                        <div className="h-fit pb-6 sm:pb-0 p-5 bg-pure_white sm:h-80 sm:w-6/12 flex flex-col sm:justify-top">
                            <h4 className="font-semibold text-lg">Ratings and reviews</h4>
                            <p className="text-base mt-2 sm:mt-4">There are no reviews for {`${restaurantDoc.name}`}. Be the first to write one!</p>
                            <button className="bg-bg_variant1 w-11/12 mx-auto h-10 mt-2 sm:mt-32 text-base text-pure_white font-bold rounded-lg shadow shadow-bg_variant1 active:bg-bg_variant1/80">Write a Review</button>
                        </div>
                        <div className="sm:hidden h-fit pb-6 p-5 bg-gray/35 sm:h-80 sm:w-6/12 flex flex-col space-y-2">
                            <h4 className="font-semibold text-center text-base">Ad Here</h4>
                        </div>
                        <div className="h-fit pb-6 p-5 bg-pure_white sm:h-80 sm:w-6/12 flex flex-col space-y-2 sm:space-y-4 sm:justify-top">
                            <h4 className="font-semibold text-lg">Details</h4>
                            <Details restaurantDoc={restaurantDoc}/>
                            <a href='#allDetails'className="underline" >View all details</a>
                        </div>
                        <div className="sm:hidden h-fit pb-6 p-5 bg-gray/35 sm:h-80 sm:w-6/12 flex flex-col space-y-2">
                            <h4 className="font-semibold text-center text-base">Ad Here</h4>
                        </div>
                        <div className="h-fit pb-6 p-5 bg-pure_white sm:h-80 sm:w-6/12 flex flex-col space-y-2 sm:space-y-4 sm:justify-top">
                            <h4 className="font-semibold text-lg">Services and features</h4>
                            <RestaurantServices restaurantDoc={restaurantDoc}/>
                        </div>
                    </div>

                    <div className="h-2 pb-6 p-5 bg-gray/35 sm:rounded sm:h-1 sm:pb-0 flex flex-col space-y-2"></div>

                    <div className="h-fit pb-6 p-5 bg-pure_white sm:rounded sm:h-80 flex flex-col space-y-2">
                        <h4 className="font-semibold text-lg">See all restaurants in {`${restaurantDoc.locationData.district}`}</h4>
                    </div>

                    <div id="allDetails" className="h-fit pb-6 p-5 bg-pure_white mt-2 sm:mt-6 sm:rounded sm:h-80 flex flex-col space-y-3 sm:space-y-4">
                        <h4 className="font-semibold text-lg">Details and amenities</h4>
                        <hr className="text-light_dark/35"></hr>
                        <div className="w-full h-fit sm:w-fit sm:flex">
                            <div className="sm:w-5/12 p-1">
                                <h5 className="font-semibold">ABOUT</h5>
                                <p className="px-1 text-justify sm:text-start mt-0.5">{restaurantDoc.description}</p>
                            </div>
                            <div className="p-2">
                                <h5 className="font-semibold">AMENITIES</h5>
                                <RestaurantAmenities restaurantDoc={restaurantDoc} />
                            </div>
                            <div className="sm:w-5/12 px-4 p-1">
                                <h5 className="font-semibold">LOCATION</h5>
                                <div className="h-20 rounded-lg bg-gray"></div>
                                <p className="px-1 mt-1 text-start">{restaurantDoc.locationData.district}</p>
                                <p className="px-1 mt-1 text-start">{restaurantDoc.locationData.region}, {restaurantDoc.locationData.country}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <Loading />}
            <Footer />
        </div>
    );
}

export default RestaurantProfile;