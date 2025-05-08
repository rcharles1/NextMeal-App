import Lottie from 'lottie-react';
import menuAnimation from '/public/assets/lotties/fast-food.json';
import { services } from '../../utilities/services';

function Services() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 caret-transparent">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center mb-12 lg:mb-16">
                {/* Lottie Animation */}
                <div className="w-full lg:w-1/2 xl:w-2/5 max-w-lg mx-auto lg:mx-0">
                    <Lottie 
                        animationData={menuAnimation} 
                        loop={true} 
                        speed={0.5}
                        className="w-full h-auto"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        What is NextMeal, and how can it help?
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Imagine a world where finding your next meal is effortless—just a few taps on your phone. NextMeal is your compassionate guide, connecting you to nearby food and support services with ease. Whether you&apos;re in need or eager to lend a helping hand, NextMeal bridges the gap, ensuring no one goes hungry. Join a community where every shared meal brings us closer to a brighter, more connected future.                    
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {services.map((service, index) => (
                    <div 
                        key={index}
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group hover:-translate-y-1.5"
                    >
                        {/* Service Image */}
                        <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                            <img 
                                src={service.imageSRC} 
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Service Content */}
                        <div className="p-5 md:p-6 space-y-3">
                            <h3 className="text-lg font-bold text-gray-900">
                                <span className="text-bg_variant1">{index + 1}.</span> {service.title}
                            </h3>
                            <p className="text-gray-600 line-clamp-3 text-base">
                                {service.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;