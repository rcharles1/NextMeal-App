import { React, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';

import { useParams } from 'react-router-dom';
import { Favorite, Cart } from '/src/components/svgs/InterfaceSvg';

function BeverageItem() {
    const { id } = useParams();
    const [beverageDetails, setBeverageDetails] = useState(null);

    useEffect(() => {
        const fetchBeverageDoc = async () => {
            try {
                const response = await fetch(`http://localhost:3000/beverages//${id}`);
                const data = await response.json();
                setBeverageDetails(data);
            } catch (error) {
                console.error('Error fetching Brverage document:', error);
            }
        };
        fetchBeverageDoc();
    }, [ id ])

    return (
        <div className="flex flex-col antialiased text-default/75 bg-bg_variant2 mx-auto text-base font-normal h-screen w-100 ">
            <div className="sticky top-0 z-50 w-full">
                <Header />
            </div>
            <div className='sticky w-full caret-transparent top-20 sm:top-28 z-50 px-1 flex flex-row space-x-14 items-center justify-start caret-pure_white overflow-visible py-2 border-b-2 border-bg_variant2 backdrop-blur bg-opacity-70'> 
                <div className="ml-3 sticky"><MenuIcon /></div>
                <div className="capitalize font-base h-6 w-fit"><Breadcrumbs/></div>
            </div>
           {beverageDetails ? (
                <div key={beverageDetails._id} className="flex mt-2 flex-col w-full mx-auto mb-12 p-3 space-y-0 h-fit transition-all duration-500">
                    <div className="h-fit w-full bg-graphicDots bg-cover bg-opacity-10 mx-auto">
                        <div className="flex flex-row space-x-2 p-3">
                            <div className="h-72 w-44">
                                <img src={`/assets/img/gallery/meals/beverages/${beverageDetails.img}.webp`} alt='beverage photo' className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col space-y-8 h-64 items-start w-48 pt-6 px-1 ">
                              <div className="flex flex-col space-y-2">
                                <span className="font-bold text-2xl text-wrap w-full">{beverageDetails.name}</span>
                                <div className=" p-1 h-6 w-20"><Favorite fill="gray"  height="20" width="20" /></div>
                                <button className="w-fit h-fit border-2 border-default/55 text-default/55 sm:border-4 text-sm caret-transparent font-bold w-14 h-12 p-1.5 sm:h-11 sm:p-2.5 sm:text-base focus:bg-bg_variant1 active:bg-bg_variant1 focus:outline-none focus:text-pure_white/75  rounded-md">TZS {beverageDetails.price}</button>
                              </div>
                               <div className="flex flex-row space-x-3">
                                    <button className="w-fit h-fit border-2 border-default/55 text-default/55 sm:outline-4 text-sm caret-transparent font-bold w-14 h-12 p-1.5 sm:h-11 sm:p-2.5 sm:text-base focus:bg-bg_variant1 focus:outline-none focus:text-pure_white/75 hover:bg- rounded-md">{beverageDetails.size}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div className="flex flex-row space-x-2 px-3 caret-transparent" >
                       <button className="flex space-x-2 items-center justify-center bg-bg_variant1 p-3 w-96 h-12 mx-auto text-pure_white/80 font-bold rounded-md shadow shadow-bg_variant1 active:bg-bg_variant1/80">
                           <span> ADD TO CART</span>
                           <Cart fill="white"  height="30" width="30" />
                        </button>
                    </div>
                </div>
           ) : <p>Fetching Data. Please wait...</p>}
           <Footer />
        </div>
    );
}

export default BeverageItem;