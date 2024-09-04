import React, { useState } from 'react';
import Location from '../LocationComponents/LocationBox';
import QuickLinksComponent from '../ComplementaryComponents/QuickLinks';
import Services from '../ServicesComponents/Services';
import Restaurants from '../RestaurantComponents/Restaurants';
import Meals from '../MealComponents/Meals';
import Beverages from '../BeverageComponents/Beverages';

import Modal from 'react-modal';
import Lottie from 'lottie-react';
import locationAnimation from '/public/assets/lotties/ping.json';
import poster3Animation from '/public/assets/lotties/poster3.json';
import SearchComponent from '../SearchComponents/Search';

// Binding modal to root component to prevent screen readers when modal is opened. 
// From index.html
Modal.setAppElement('#root')

function HomePage() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [locationAddress, setLocationAddress] = useState('');

    const handleChange = (event) => {
        setLocationAddress(event.target.value);
    };

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleSubmit(event) {
        event.preventDefault()
        closeModal()
    };

    const scrollTop = () =>{
        window.scrollTo({top: 72, behavior: 'smooth'});
    };

    return (
        <div className="flex flex-col bg-graphicDots caret-transparent h-full md:pb-12 bg-no-repeat bg-right-top">
            <div className="flex flex-col md:flex-row md:justify-left items-center rounded-md md:mt-0 w-full h-full px-4 md:px-1 lg:w-11/12 lg:mx-auto lg:justify-between xl:h-lvh xl:items-center">
                <div className="md:w-7/12 h-fit p-1">
                    <div className="w-full h-fit ssm:mt-8 lg:mt-10 md:justify-center p-1 text-headings">
                        <h1 className="text-6xl ssm:text-5xl lg:text-6xl md:px-6 mt-16 md:mt-0 font-black text-center md:text-start xl:text-7xl"><span className='text-bg_variant1'>Discover</span> Restaurants & Delicious Food</h1>
                        <h1 className="text-xl xl:text-2xl md:px-6 mt-4 ssm:mt-3 font-extrabold text-center ssm:text-start">Unveil your next delicious adventure!</h1>
                    </div>
                    <div className="hidden md:block p-2 h-fit w-fit mx-auto xl:p-0 ssm:mt-4 md:ml-6">
                        <SearchComponent onClick={scrollTop}/>
                    </div>
                    <div className="cursor-pointer mt-4 mx-auto md:ml-7 rounded-xl ring-1 ring-pure_white ring-offset-1 p-1 md:h-fit w-fit">
                        <div>
                            {modalIsOpen ? (
                                <div class="fixed inset-0 bg-default opacity-50" style={{ backdropFilter: 'blur(5px)' }}></div>
                            ) : ''}
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Location Modal"
                                className="h-96 md:h-56 w-11/12 md:w-4/12 p-8 md:p-3 bg-pure_white text-center rounded-xl mx-auto text-default text-lg justify-center z-100  left-4 mt-20 md:mt-32"
                            >
                                <div className="z-1000">
                                    <h2 className="text-2xl font-medium md:text-base md:font-semibold text-default/90">Save Your Location</h2>
                                    <div className="mx-auto w-24 md:w-10">
                                    <Lottie animationData={locationAnimation} loop={true} speed={1}/>
                                    </div>
                                    <p className="mt-2 md:mt-1 md:text-sm">We need to know your location to suggest nearby spots</p>
                                    <form onSubmit={handleSubmit} className="flex flex-col mt-2">
                                        <input 
                                        value={locationAddress}
                                        onChange={handleChange}
                                        type="text"
                                        required
                                        name="location"
                                        placeholder="Enter region" 
                                        className="bg-gray/40 capitalize rounded-md p-2 text-base px-3 md:p-1 md:px-2 md:text-sm w-8/12 mx-auto focus:bg-silver/20 focus:outline-bg_variant1"
                                        />
                                        <button type="submit"className="bg-bg_variant1 p-2 md:p-1 w-8/12 mt-6 md:mt-4 mx-auto rounded-md md:text-sm text-pure_white font-medium">Save</button>
                                    </form>
                                    <div>
                                        <button onClick={closeModal} className="focus:bg-bg_variant1 p-2 md:p-1 w-8/12 mx-auto rounded-md md:text-sm text-bg_variant1/90 focus:text-pure_white font-medium">Use Default</button>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                        {locationAddress ? (
                            <div className="flex flex-row items-center space-x-3 md:space-x-2 md:px-3 h-12 w-fit outline sm:h-16 md:h-8 sm:w-fit p-3 md:p-1 border border-slate_white/30 rounded-md drop-shadow">
                                <div className="size-8 sm:size-10 md:size-4 justify-center items center flex">
                                <img src='/assets/icon/location.svg' alt='Location Icon'/>
                                </div>
                                <p className="capitalize text-base font-bold">{locationAddress}</p>
                        </div>
                        ): <div onClick={openModal} className="hidden" ><Location /></div>}
                    </div>
                </div>
                <div className="rounded w-64 p-1 h-fit ssm:w-56 lg:w-80">
                    <Lottie animationData={poster3Animation} speed={0.5}/>
                </div>
            </div>
            <div className="mt-16 md:-mt-6 bg-pure_white shadow-2xl shadow-silver rounded-lg w-9/12 mx-auto"><QuickLinksComponent /></div>
            <div className="flex flex-col mt-16 space-y-16 h-fit py-6 w-full">
                <Services />
                <Restaurants />
                <Meals />
                <Beverages />
            </div>
        </div>
    );
}

export default HomePage;