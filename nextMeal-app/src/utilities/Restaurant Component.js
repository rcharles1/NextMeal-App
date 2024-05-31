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
import { Bookmark, Rating } from './svgs/InterfaceSvg';

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
                <div className="sm:py-2 sm:px-8 flex flex-col md:flex-row md:justify-around">
                    <div className="p-1 h-1/3 sm:rounded-2xl sm:h-80 sm:w-6/12 md:p-0 md:-mt-.5 rounded overflow-hidden">
                        <img src={`/assets/img/gallery/restaurants/${restaurantDoc.gallery.img1}.webp`} alt="restaurant-photo" className="sm:object-cover h-full w-full mx-auto" />
                    </div>
                    <div className="flex flex-col p-5 h-2/3 sm:p-3 md:w-5/12">
                        <div className='flex flex-row space-x-28 justify-around mt-3 md:space-x-0 items-center'>
                            <div className="space-y-0">
                                <h2 className="text-2xl md:text-xl font-bold w-72 md:w-max-72 text-wrap">{restaurantDoc.name}</h2>
                                <div className="flex flex-col md:mt-0.5 md:px-0.5">
                                    <div className='flex flex-row text-default/75 font-semibold w-fit space-x-1 text-xs font-normal items-center'>
                                        <span><Rating fill={favorite ? 'red' : 'none'}  fillStroke={favorite ? 'red' : 'gray'} height="12" width="11" /></span>
                                        <div  className="flex items-center space-x-0.5">
                                            <span className="">{`${restaurantDoc.reviews.length} reviews`}</span>
                                        </div>=
                                    </div>
                                    <div className="flex flex-row items-center space-x-0.5">
                                        <span className="size-3 sm:size-3.5 md:size-3 mt-.5 md:mt-0"><img src='/assets/icon/location-fill.svg' alt='Location icon'/></span>
                                        <span className="text-xs truncate">{restaurantDoc.details.address[0]}</span>
                                    </div>
                                    <span className="md:mt-.5">
                                        <Bookmark fill={favorite ? 'red' : 'none'}  fillStroke={favorite ? 'red' : 'gray'} height="20" width="20" />
                                    </span>
                                </div>
                                    
                            </div>
                            <a href='' className="h-fit w-fit"> 
                               <img src="/assets/icon/navigation.svg" alt="Navigation icon" className="sm:size-16 md:size-12"/>
                            </a>
                        </div>

                        <p className='leading-relaxed font-medium text-base mt-5 text-default/65'>
                            {restaurantDoc.description}
                        </p>

                        <div className="flex flex-col mt-8 space-y-1 z-0">
                            <div className="flex justify-start space-x-8 w-100 items-center sm:w-7/12 md:w-fit mx-auto sm:justify-center sm:items-center border-b-2 border-faint_default/15 h-8 text-headings/70 font-semibold caret-transparent">
                                <div>
                                    <button onClick={() => {
                                            let id = 'detailsTab';
                                            setActiveTab(id);
                                            handleClick(id);
                                        }} className="p-1 h-9 md:w-16 cursor-pointer transition duration-300 ease-in-out focus:text-bg_variant1 font-semibold focus:text-headings/100 focus:font-bold focus:border-b-2 focus:border-bg_variant1"
                                        >
                                            DETAILS
                                    </button>
                                </div>
                                <div>
                                    <button onClick={() => {
                                        let id = 'menusTab';
                                        setActiveTab(id);
                                        handleClick(id);
                                        }} 
                                        className="p-1 h-9 md:w-16 cursor-pointer transition duration-300 ease-in-out focus:text-bg_variant1 font-semibold focus:text-headings/100 focus:font-bold focus:border-b-2 focus:border-bg_variant1"
                                        >
                                            MENU
                                    </button>
                                </div>
                                <div>
                                    <button 
                                        onClick={() => {
                                            let id = 'reviewsTab';
                                            setActiveTab(id);
                                            handleClick(id);
                                        }} 
                                        className="p-1 h-9 md:w-16 cursor-pointer transition duration-300 ease-in-out focus:text-bg_variant1 font-semibold focus:text-headings focus:font-bold focus:border-b-2 focus:border-bg_variant1"
                                        >
                                            SERVICES
                                    </button>
                                </div>
                            </div>
                            <div className="h-fit rounded-md px-3 pb-3 shadow-sm sm:px-1 sm:w-11/12 mx-auto">
                                { activeTab === 'detailsTab' ? <Details  restaurantDoc={restaurantDoc}/> : activeTab === 'menusTab' ? <Menu restaurantDoc={restaurantDoc} /> : <RestaurantServices restaurantDoc={restaurantDoc}/>}
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