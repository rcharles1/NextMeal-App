import { React, useState, useEffect, useCallback } from 'react';
import Details from './Details';
import Header from './Header';
import Footer from './Footer';
import RestaurantServices from './RestaurantServices';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';
import Loading from './Loading';

import { getMyFavorites } from '../features/wishlist/wishlistSlice';
import { fetchRestaurantDoc, fetchAllNearbyRestaurants } from '../utilities/getData';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { Bookmark, RatingBubble, CircleHalfFull, Share } from './svgs/InterfaceSvg';
import RestaurantAmenities from './RestaurantAmenities';
import NearbyRestaurantCard from './NearbyRestaurantCard';
import MapComponent from './MapComponent';

function RestaurantProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [restaurantDoc, setRestaurantDoc] = useState(null);
    const [page, setPage] = useState(0);
    const [nearbyRestaurants, setNearbyRestaurants] = useState(null)
    const wishlist = useSelector(state => state.wishlist);
    const [favorite, setFavorite] = useState(false);
    const [googleId, setGoogleId] = useState(null);
    const [error, setError] = useState('');
    const itemType = 'restaurant';

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
        const fetchNearbyRestaurants = async () => {
            if (restaurantDoc && restaurantDoc.locationData) {
                const district = restaurantDoc.locationData.district;
                const region = restaurantDoc.locationData.region;
                try {
                    const data = await fetchAllNearbyRestaurants(page, district, region);
                    if (!Array.isArray(data)) {
                        throw new Error('Unexpected data');
                    }
                    if (data.length === 0) {
                        setError('No nearby restaurants found');
                        return;
                    }
                    setNearbyRestaurants(prevRestaurants => {
                        const combinedRestaurants = page > 1 ? [...prevRestaurants, ...data] : [...data];
                        const uniqueRestaurants = Array.from(new Set(combinedRestaurants.map(item => item._id)))
                            .map(id => combinedRestaurants.find(item => item._id === id));
                        return uniqueRestaurants;
                    });
                } catch (error) {
                    setError('Could not fetch data. Check your connection and try again');
                }
            }
        };
        if (page === 1) {
            setNearbyRestaurants([]);
        }
        fetchNearbyRestaurants();
    }, [page, restaurantDoc]);
    
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
    
    // Rating implementation
    const totalBubbles = 5;

    let rating = restaurantDoc ? restaurantDoc.rating : 0;
    let filledBubbles = Math.floor(rating);
    let halfFilled = rating % 1 !== 0;

    return (
        <div className="mx-auto text-base font-normal h-screen w-100 text-sm antialiased "> 
            <div className="sticky top-0 z-10 w-full">
                <Header/>
           </div>
            <div className='sticky top-20 sm:top28 md:hidden md:top-14 z-10 px-4 flex flex-row space-x-3 items-center justify-start caret-bg_variant2 py-2 border-b-2 border-gray backdrop-blur bg-opacity-70'> 
                <div className="z-0"><MenuIcon /></div>
                <div className="capitalize h-6 items-center text-sm flex w-full"><Breadcrumbs restaurantDoc={restaurantDoc}/></div>
            </div>
            { restaurantDoc ? (
                <div className="sm:py-2 sm:px-4 flex flex-col bg-gray/35 caret-transparent">
                    <div className="p-1 px-4 sm:px-1 space-y-1 md:px-20 md:text-ssm">
                        <div className="flex justify-between items-center">
                            <h2 className="font-bold w-full text-xl md:text-lg text-wrap">{restaurantDoc.name}</h2>
                            <div className="flex space-x-1.5 mt-0.5">
                                <Bookmark fill={favorite ? 'red' : 'none'}  stroke={favorite ? 'red' : 'gray'} height="25" width="25" />
                                <Share fill={'gray'} height={25} width={25} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row space-x-1.5 items-left md:font-medium">
                            <div className='flex flex-row text-default/75 font-bold w-fit space-x-1 text-base md:text-ssm items-center'>
                                <div className="flex -space-x-0.5">
                                    {[...new Array(totalBubbles)].map((_, index) => {
                                        if (index < filledBubbles) {
                                            // Full circle for filled ratings
                                            return (
                                                <div key={index} className="flex ">
                                                    <RatingBubble key={index} fill={'red'} stroke={'red'} height={15} width={15} />
                                                </div>
                                            );
                                        } else if (index === filledBubbles && halfFilled) {
                                            // Half circle for decimal ratings
                                            return (
                                                <div key={index} className="flex ">
                                                    <CircleHalfFull  key={index} fill={'red'} height={15} width={15}/>
                                                </div>
                                            );
                                        } else {
                                            // Empty circle for remaining ratings
                                            return (
                                                <div key={index} className="flex " >
                                                    <RatingBubble  key={index} fill={'none'} stroke={'red'} height={15} width={15}/>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="flex items-center space-x-0.5">
                                    <span className="">{`${restaurantDoc.reviews.length} reviews`}</span>
                                </div>
                            </div>
                            <div className="hidden md:block border-r border-light_dark h-3"></div>
                            <div className="flex space-x-1 text-ssm">
                                {restaurantDoc.cuisine.map((item, index, array) => {
                                    return (
                                    <p key={index}>
                                        {item}
                                        {index !== array.length - 1 ? ',' : ''}
                                    </p>
                                    );
                                })}
                            </div>
                        </div>
                        <p className="md:font-medium">{restaurantDoc.details.hours.opendays} from {restaurantDoc.details.hours.openhours}</p>
                    </div>
                    
                    <div className="h-64 sm:h-96 sm:mt-2 sm:rounded-none md: md:w-10/12 mx-auto rounded">
                        <img src={`/assets/img/gallery/restaurants/${restaurantDoc.gallery.img1}.webp`} alt="restaurant-photo" className="object-cover object-fill h-full w-full mx-auto" />
                    </div>

                    <div className="flex flex-col w-full sm:flex-row sm:mt-4 md:mt-6 sm:p-2 sm:space-x-4 md:p-0 md:w-10/12 mx-auto">
                        <div className="h-fit pb-6 sm:pb-0 p-5 bg-pure_white sm:rounded-lg md:rounded-xl sm:h-80 md:h-64 sm:w-6/12 flex flex-col sm:justify-top">
                            <h4 className="font-semibold text-lg md:text-base">Ratings and reviews</h4>
                            <div className="outline h-64 p-2"> 
                             gh
                            </div>
                            <p className="text-base md:text-sm mt-2 sm:mt-4">There are no reviews for {`${restaurantDoc.name}`}. Be the first to write one!</p>
                            <NavLink to={`/review/${restaurantDoc._id}`} className="bg-bg_variant1 p-2 w-11/12 mx-auto mt-2 sm:mt-32 md:mt-24 text-base text-center md:text-sm text-pure_white font-bold rounded-lg shadow shadow-sm active:bg-bg_variant1/80">Write a Review</NavLink>
                        </div>
                        <div className="sm:hidden h-fit pb-6 p-5 bg-gray/35 sm:h-80 sm:w-6/12 flex flex-col space-y-2">
                            <h4 className="font-semibold text-center text-base">Ad Here</h4>
                        </div>
                        <div className="h-fit pb-6 p-5 w-full mx-auto bg-pure_white sm:h-80 md:h-64 sm:w-6/12 sm:rounded-lg md:rounded-xl flex flex-col space-y-2 sm:space-y-4 sm:justify-top">
                            <h4 className="font-semibold text-lg md:text-base">Details</h4>
                            <Details restaurantDoc={restaurantDoc}/>
                            <a href='#allDetails'className="underline font-semibold" >View all details</a>
                        </div>
                        <div className="sm:hidden h-fit pb-6 p-5 bg-gray/35 sm:h-80 sm:w-6/12 flex flex-col space-y-2">
                            <h4 className="font-semibold text-center text-base">Ad Here</h4>
                        </div>
                        <div className="h-fit pb-6 p-5 bg-pure_white sm:h-80 md:h-64 sm:w-6/12 sm:rounded-lg md:rounded-xl flex flex-col space-y-2 sm:space-y-4 sm:justify-top">
                            <h4 className="font-semibold text-lg md:text-base">Services and features</h4>
                            <RestaurantServices restaurantDoc={restaurantDoc}/>
                        </div>
                    </div>

                    <div className="h-2 pb-6 p-5 bg-gray/35 sm:bg-pure sm:h-1 sm:pb-0 flex flex-col space-y-2"></div>

                    <div className="h-fit w-full pb-6 bg-pure_white sm:rounded-lg md:rounded-xl md:mt-2 md:w-10/12 mx-auto flex flex-col space-y-2">
                        <h4 className="font-semibold p-5 text-lg" >Best nearby restaurants in {`${restaurantDoc.locationData.district}`}</h4>
                        <div className="bg-gray sm:bg-pure_white px-3 pb-3 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 p-1 sm:px-2">
                            {nearbyRestaurants ? nearbyRestaurants.map(nearbyRestaurant => {
                                return(
                                    <NearbyRestaurantCard key={nearbyRestaurant._id} nearbyRestaurant={nearbyRestaurant} />
                                );
                            }) : '...'}  
                        </div>
                    </div>

                    <div id="allDetails" className="h-fit pb-6 p-5 bg-pure_white mt-2 sm:mt-6 sm:rounded-lg md:rounded-xl sm:h-80 md:h-fit mb-8 md:w-10/12 mx-auto flex flex-col space-y-3 sm:space-y-4">
                        <h4 className="font-semibold text-lg">Details and amenities</h4>
                        <hr className="text-silver/30"></hr>
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
                                <div className="h-24 sm:32 rounded-2xl">
                                    <MapComponent restaurantDoc={restaurantDoc}/>
                                </div>
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