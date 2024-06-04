import { React, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';

import { useParams } from 'react-router-dom';
import { Favorite, Cart, Diamonds } from '/src/components/svgs/InterfaceSvg';

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
                <div key={beverageDetails._id} className="flex mt-2 flex-col w-full mx-auto mb-12 p-3 space-y-4 h-fit transition-all duration-500">
                    <div className="h-fit w-full mx-auto">

                        <div className="flex flex-row space-x-2.5 p-1">

                            <div className="h-96 w-44">
                                <img src={`/assets/img/gallery/meals/beverages/${beverageDetails.img}.webp`} alt='beverage photo' className="w-full h-full object-cover " />
                            </div>

                            <div className="flex flex-col space-y-6 h-fit pb-3 mt-6 items-start justify-center w-48  px-1 ">

                              <div className="flex flex-col space-y-2">
                                <span className="text-default/55 text-base font-medium text-wrap w-full">{beverageDetails.type}</span>
                                <span className="font-bold text-2xl text-wrap w-full">{beverageDetails.name}</span>
                                <span className="text-default/55 font-medium text-sm text-wrap w-full">{beverageDetails.brand}</span>
                                <div className="flex flex-row items-start space-x-1 h-fit w-full">
                                    {beverageDetails.category.flatMap((category, index, array) => {
                                        let elements = [<span key={index}>{category}</span>];
                                        if (index < array.length - 1) {
                                            elements.push(<Diamonds key={`diamond-${index}`} fill="black" height="10" width="10" />);
                                        }
                                        return (
                                            <div key={index} className="flex space-x-1 text-start font-normal text-wrap items-center w-fit text-sm h-fit">
                                                {elements}
                                            </div>
                                        );
                                    })}
                               </div>
                              </div>

                               <div className="flex flex-col w-full space-y-2">
                                    <div className="flex justify-between space-x-12 items-center">
                                        <span className="font-bold text-base text-wrap w-full">TZS {beverageDetails.price}</span>
                                        <div className=" p-1 h-6 w-20"><Favorite fill="gray" height="20" width="20" /></div>
                                    </div>
                                    <span className="font-normal text-sm text-wrap w-full">{beverageDetails.volume}</span>
                                    <div className="w-fit h-fit outline outline-2 outline-light_dark/75 text-default/55 sm:outline-4 text-sm caret-transparent font-bold w-14 p-1.5 sm:h-11 sm:p-2.5 sm:text-base hover:bg- rounded-md">{beverageDetails.size}</div>
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