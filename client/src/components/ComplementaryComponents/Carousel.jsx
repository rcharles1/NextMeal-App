import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import { carouselItems } from '../../utilities/carouselItems';

function RestaurantCarousel() {
    const [displayCaption, setDisplayCaption] = useState(false);

    const handleClick = () => {
        setDisplayCaption(!displayCaption);
    }

    return (
        <Carousel 
            autoPlay
            interval={5000}
            className="h-60 p-1 sm:h-fit md:h-80 md:w-8/12 mx-auto caret-transparent w-full overflow-hidden"
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop
        >
            {carouselItems ? (carouselItems.map((item, index) => {
                return (
                    <div key={index} onClick={handleClick} className={`h-56 sm:h-96 w-full rounded-xl mx-auto overflow-hidden relative`}>
                        <img src={`${item.imageSrc}`} className="h-full w-full object-cover" />
                        {displayCaption && (
                            <div className="absolute inset-0 outline flex flex-col space-y-1 items-center justify-center backdrop-blur-sm backdrop-opacity-90">
                                <p className="w-fit h-fit text-wrap text-xl font-bold text-pure_white/85 border-b-4 border-pure_white/85">{item.text}</p>
                            </div>
                        )}
                    </div>
                );
            })) : ''}
        </Carousel>
    );
}

export default RestaurantCarousel;
