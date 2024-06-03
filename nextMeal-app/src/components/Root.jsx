import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Restaurants from './Restaurants';
import Meals from './Meals';
import Services from './Services';
import Beverages from './Beverages';
import HomePage from './HomePage';

import { ArrowUp } from '/src/components/svgs/InterfaceSvg';

function Root() {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.scrollY > document.documentElement.clientHeight){
            setShowScroll(true)
        } else if (showScroll && window.scrollY <= document.documentElement.clientHeight){
            setShowScroll(false)
        }
    };
    
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
        setTimeout(checkScrollTop, 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => window.removeEventListener('scroll', checkScrollTop)
    }, []);

    return (
        <div className="h-lvh w-100 flex flex-col space-y-0 ">
            <main className="h-fit w-100">
                <div className="sticky top-0 z-10">
                    <Header />
                </div>
                <div className="h-screen bg-bg_variant1 p-1 md:h-fit">
                    <HomePage />
                </div>
                <div className="flex flex-col mt-16 space-y-16 bg-bg_variant2 h-fit py-6 w-full">
                    <Restaurants />
                    <Meals />
                    <Beverages />
                    <Services />
                </div>
                <div className="p-0 mt-16">
                    <Footer />
                </div>
                <button className={`fixed bottom-10 right-7 rounded-full bg-pure_white h-fit w-fit animate-bounc ${showScroll ? 'visible' : 'invisible'}`} onClick={scrollTop}><ArrowUp fill="red" height="30" width="30" /></button>
            </main>
        </div>
    );
}

export default Root;
