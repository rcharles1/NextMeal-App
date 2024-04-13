import { React, useState } from 'react';
import Details from './Details';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menus';
import RestaurantServices from './RestaurantServices';
import Reviews from './Reviews';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';


function RestaurantProfile() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeTab, setActiveTab ] = useState(null);

    const text = `Welcome to Kitisa, your go-to fast-food restaurant in Tanzania! Located in the bustling city of Dar es Salaam, Kitisa offers a delightful blend of speedy service and mouth-watering meals.

        Our menu is a vibrant mix of fast-food favorites and Tanzanian delicacies, all prepared with fresh, locally-sourced ingredients. From juicy burgers and crispy fries to local dishes with a modern twist, there's something for everyone at Kitisa.

        But Kitisa is more than just a fast-food restaurant. With our warm, friendly service and lively, Tanzanian-inspired interiors, we offer a dining experience that's truly unique. 

        So why wait? Visit Kitisa today for a fast, flavorful feast that's sure to leave you coming back for more!`;

    const truncatedText = text.slice(0, 215) + '...';

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
        <div className="mx-auto text-sm font-normal h-screen w-100 "> 
            <div className="sticky top-0 z-10  w-full">
                <Header/>
           </div>
            <div className='sticky top-20 sm:top28 z-100 px-4 flex flex-row space-x-3 items-center justify-start caret-bg_variant2 overflow-hidden py-2 border-b-2 border-gray backdrop-blur bg-opacity-70'> 
                <MenuIcon />
                <div className="px-2 capitalize h-6 w-72"><Breadcrumbs/></div>
            </div>
            <div className="-z-10 mt-3">
                <div className="p-1 h-1/3 rounded overflow-hidden">
                    <img src='/assets/img/data/spicy-biryani.jpg'/>
                </div>
                <div className="flex flex-col p-5 h-2/3">
                    <div className='flex flex-row space-x-7 mt-3 items-center'>
                        <div className="space-y-1">
                            <h2 className="text-2xl font-bold w-72 text-wrap">Kitisa Fast Food</h2>
                            <div className='flex flex-row text-default/60 w-fit space-x-2 text-sm font-normal items-center'>
                                <span>4</span>
                                <div className="flex flex-row space-x-0">
                                    <span className="size-5 object-scale-down"><img src='/assets/icon/star-6.svg' /></span>
                                    <span className="size-5 object-scale-down"><img src='/assets/icon/star-6.svg' /></span>
                                    <span className="size-5 object-scale-down"><img src='/assets/icon/star-6.svg' /></span>
                                    <span className="size-5 object-scale-down"><img src='/assets/icon/star-6.svg' /></span>
                                </div>
                                <span className="text-default/30">(1.2K)</span>
                            </div>
                        </div>
                        <div className='bg-bg_variant1 size-8 items-center justify-center overflow-hidden rounded-full'> 
                            <button className='size-5 mx-1 mt-1.5 rounded-full shadow'>
                                <img src='/assets/icon/navigate.svg' />
                            </button>
                        </div>
                    </div>

                    <p className='leading-relaxed font-medium text-base mt-5 text-default/65'>
                    {isExpanded ? text : truncatedText }
                    </p>
                    <button onClick={() => setIsExpanded(!isExpanded)} className="text-blue ml-72 ">
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>

                    <div className="flex flex-col mt-8 space-y-1">
                        <div className="flex justify-start space-x-8 w-64 items-center  border-b-2 border-faint_default/15 h-8 text-headings/70 font-semibold text- caret-pure_white">
                            <div>
                                <button onClick={() => {
                                        let id = 'detailsTab';
                                        setActiveTab(id);
                                        handleClick(id);
                                    }} className="p-1 h-9 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:text-headings/100 focus:border-b-2 focus:border-bg_variant1"
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
                                    className="p-1 h-9 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:text-headings/100 focus:font-semibold focus:border-b-2 focus:border-bg_variant1"
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
                                    className="p-1 h-9 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:text-headings/100 focus:font-semibold focus:border-b-2 focus:border-bg_variant1"
                                    >
                                        SERVICES
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 h-48 rounded-md divide-y divide-faint_default/15 px-3">
                            { activeTab === 'detailsTab' ? <Details /> : activeTab === 'menusTab' ? <Menu /> : <RestaurantServices />}
                        </div>
                    </div>
                </div>
                <div className="p-5 mb-8 h-64">
                   <h1 className="font-semibold text-lg ">Reviews</h1>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RestaurantProfile;