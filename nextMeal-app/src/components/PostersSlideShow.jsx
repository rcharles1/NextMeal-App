import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Lottie from 'lottie-react';
import poster3Animation from '/public/assets/lotties/poster3.json';

import { posters } from '../utilities/carouselItems';

function PosterCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateActiveIndex = (index) => {
        setActiveIndex(index);
    };

    // Function to render the indicator bars
    const renderIndicatorDots = () => {
        return (
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-1">
                {posters.map((_, index) => (
                    <span
                        key={index}
                        className={`inline-block mx-1 mb-1 h-1 w-20 rounded  cursor-pointer ${index === activeIndex ? 'bg-bg_variant1' : 'bg-gray/80'}`}
                        onClick={() => updateActiveIndex(index)}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="relative">
            <Carousel 
                autoPlay
                interval={5000}
                className="h-full bg-default"
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop
                onChange={(index) => updateActiveIndex(index)}
            >
                {posters ? (posters.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div key={index} className={`h-full w-full object-cover z-10`}>
                            {index === 2 ? (
                                <div>
                                    <div className="absolute top-3 right-4 text-pure_white"><img src={`/assets/img/next-meal-white.png`} alt="logo" className="size-6"/></div>
                                    <div className="absolute top-20 left-8 text-pure_white text-start text-lg font-extrabold w-20 items-center justify-center"><span className="text-xl font-black">Discover</span> spots for what you crave most</div>
                                    <div className="w-64 h-full mx-auto"><Lottie animationData={poster3Animation} speed={2}/></div>
                                </div>
                            ) : (
                                <img src={`/assets/img/posters/${item}.jpg`} alt={`Poster ${index}`} />
                            )}
                        </div>
                    );
                })) : ''}
            </Carousel>
            {renderIndicatorDots()}
        </div>
    );
}

export default PosterCarousel;

// Add some styles for the indicator dots
// You can include these styles in your CSS file

