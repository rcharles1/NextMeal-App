import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Breadcrumbs from '../BreadCrumbs';
import { Outlet } from "react-router-dom";

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
        <>
            <div className="sticky top-0 z-50"><Header /></div>
            <main className="h-fit">
                <Breadcrumbs />
                <Outlet />
                <button className={`fixed bottom-10 right-7 rounded-full bg-pure_white h-fit w-fit ${showScroll ? 'visible' : 'invisible'}`} onClick={scrollTop}><ArrowUp fill="red" /></button>
            </main>
            <div><Footer /></div>
        </>
    );
}

export default Root;