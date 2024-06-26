import React, { useState } from 'react';
import Location from './LocationBox';

import Modal from 'react-modal';
import Lottie from 'lottie-react';
import menuAnimation from '/public/assets/lotties/fast-food.json';
import locationAnimation from '/public/assets/lotties/ping.json';
import SearchComponent from './Search';

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

    return (
        <div className="flex flex-col bg-graphicDots caret-transparent h-full bg-no-repeat bg-right-top">
            <div className="flex flex-col justify-center items-center rounded-md md:mt-0 w-100 text-headings/95 h-full px-4 ">
                <div className="w-100 h-fit -mt-20 sm:-mt-10 md:mt-10 md:justify-center p-1">
                   <h1 className="text-5xl sm:text-7xl md:text-6xl md:px-6 mt-36 md:mt-0 font-black sm:font-bold text-center">Discover Restaurants & Delicious Food</h1>
                </div>
                <div className="hidden md:block p-2 h-fit w-fit mx-auto">
                    <SearchComponent />
                </div>
                <div className="cursor-pointer mt-12 rounded-xl md:rounded-md ring-1 ring-pure_white ring-offset-1 p-1 md:h-fit w-fit">
                    <div>
                        {modalIsOpen ? (
                            <div class="fixed inset-0 bg-default opacity-50" style={{ backdropFilter: 'blur(5px)' }}></div>
                        ) : ''}
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Location Modal"
                            className="h-96 md:h-56 w-11/12 md:w-4/12 p-8 md:p-3 bg-pure_white text-center rounded-xl mx-auto text-default text-lg justify-center -mt-0 z-100 mt-56 left-4 mt-20 md:mt-32"
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
                        <div className="flex flex-row items-center space-x-3 md:space-x-2 md:px-3 h-12 w-fit bg-blur sm:h-16 md:h-8 sm:w-fit p-3 md:p-1 border border-slate_white/30 rounded-md drop-shadow">
                            <div className="size-8 sm:size-10 md:size-4 justify-center items center flex">
                            <img src='/assets/icon/location.svg' alt='Location Icon'/>
                            </div>
                            <p className="capitalize text-base font-bold">{locationAddress}</p>
                      </div>
                    ): <div onClick={openModal} ><Location /></div>}
                </div>
                <div className="rounded w-full mt-2 p-1 h-fit sm:w-fit sm:mt-2">
                 <Lottie animationData={menuAnimation} loop={true} speed={0.5}/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;