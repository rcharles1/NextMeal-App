import { React, useState, useEffect } from 'react';
import Details from './Details';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menus';
import RestaurantServices from './RestaurantServices';
import Reviews from './Reviews';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';

import { useParams } from 'react-router-dom';
import Loading from './Loading';

function RestaurantProfile() {
    const [activeTab, setActiveTab ] = useState(null);
    const { id } = useParams();
    const [restaurantDoc, setRestaurantDoc] = useState(null);

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
    }

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
                <div className="">
                    <div className="p-1 h-1/3 sm:rounded-none sm:h-72  md:p-0 md:-mt-.5 rounded overflow-hidden">
                        <img src={`/assets/img/gallery/restaurants/${restaurantDoc.gallery.img1}.webp`} alt="restaurant-photo" className="sm:object-cover h-full w-full mx-auto" />
                    </div>
                    <div className="flex flex-col p-5 h-2/3 sm:p-3 md:mt-1 md:px-24">
                        <div className='flex flex-row space-x-28 justify-around mt-3 items-center'>
                            <div className="space-y-1">
                                <h2 className="text-2xl font-bold w-72 text-wrap">{restaurantDoc.name}</h2>
                                <div className='flex flex-row text-default/60 w-fit space-x-2 text-sm font-normal items-center'>
                                    <span>{restaurantDoc.rating}</span>
                                    <div className="flex flex-row space-x-0">
                                        <span className="size-5 object-scale-down"><img src='/assets/icon/star-6.svg' /></span>
                                    </div>
                                    <span className="text-default/30">{`(${restaurantDoc.reviews.length}) Reviews`}</span>
                                </div>
                            </div>
                            <a href=''> 
                               <img src="/assets/icon/navigation.svg" alt="Navigation icon" className="sm:size-16"/>
                            </a>
                        </div>

                        <p className='leading-relaxed font-medium text-base mt-5 text-default/65'>
                            {restaurantDoc.description}
                        </p>

                        <div className="flex flex-col mt-8 space-y-1 z-0">
                            <div className="flex justify-start space-x-8 w-100 items-center sm:w-7/12 mx-auto sm:justify-center sm:items-center border-b-2 border-faint_default/15 h-8 text-headings/70 font-semibold caret-transparent">
                                <div>
                                    <button onClick={() => {
                                            let id = 'detailsTab';
                                            setActiveTab(id);
                                            handleClick(id);
                                        }} className="p-1 h-9 md:w-16 cursor-pointer transition duration-300 ease-in-out focus:text-bg_variant1 focus:text-headings/100 focus:font-bold focus:border-b-2 focus:border-bg_variant1"
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
                                        className="p-1 h-9 md:w-16 cursor-pointer transition duration-300 ease-in-out focus:text-bg_variant1 focus:text-headings/100 focus:font-bold focus:border-b-2 focus:border-bg_variant1"
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
                                        className="p-1 h-9 md:w-16 cursor-pointer transition duration-300 ease-in-out focus:text-bg_variant1 focus:text-headings/100 focus:font-bold focus:border-b-2 focus:border-bg_variant1"
                                        >
                                            SERVICES
                                    </button>
                                </div>
                            </div>
                            <div className="h-fit rounded-md px-3 pb-3 shadow-sm sm:px-10 sm:w-8/12 mx-auto">
                                { activeTab === 'detailsTab' ? <Details  restaurantDoc={restaurantDoc}/> : activeTab === 'menusTab' ? <Menu restaurantDoc={restaurantDoc} /> : <RestaurantServices restaurantDoc={restaurantDoc}/>}
                            </div>
                        </div>
                    </div>
                    <div className="p-5 mb-8 h-64 -z-10">
                        <h1 className="font-semibold text-lg ">Reviews</h1>
                    </div>
                </div>
            ) : <Loading />}
            <Footer />
        </div>
    );
}

export default RestaurantProfile;