import { React, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';
import CollapsibleList from './CollapsibleList';

import { useParams } from 'react-router-dom';

import { Favorite, Rating, Bookmark, Diamonds } from '/src/components/svgs/InterfaceSvg';

function MealItem() {
    const { id } = useParams();
    const [mealDetails, setMealDetails] = useState(null);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const fetchMealDoc = async () => {
            try {
                const response = await fetch(`http://localhost:3000/meals//${id}`);
                const data = await response.json();
                setMealDetails(data);
            } catch (error) {
                console.error('Error fetching meal document:', error);
            }
        };
        fetchMealDoc();
    }, [ id ])

    return (
        <div className="flex flex-col antialiased text-default/75 bg-bg_variant2 mx-auto text-base caret-transparent font-normal h-screen w-100 space-y-0">
            <div className="sticky top-0 z-50 w-full">
                <Header />
            </div>
            <div className='sticky w-full md:hidden caret-transparent top-20 sm:top-28 z-50 px-1 flex flex-row space-x-14 items-center justify-start caret-pure_white overflow-visible py-2 border-b-2 border-bg_variant2 backdrop-blur bg-opacity-70'> 
                <div className="ml-3 sticky"><MenuIcon /></div>
                <div className="capitalize font-base h-6 w-fit"><Breadcrumbs/></div>
            </div>
           {mealDetails ? (
                <div key={mealDetails._id} className="flex flex-col px-5 py-1 h-fit transition-all sm:px-16 md:px-20 duration-500">

                    <div className="rounded-lg p-1 h-fit sm:h-96 w-92 md:w-80 md:h-fit mx-auto overflow-hidden">
                        <img src={`/assets/img/gallery/meals/food/${mealDetails.img}.webp`} alt="meal-cover" />
                    </div>
                    <div className="flex flex-col  mt-6 h-fit w-92 mx-auto drop-shadow">
                        <h1 className="font-semibold text-start text-2xl sm:text-3xl">{mealDetails.name}</h1>
                        <div className="flex justify-between p-1">
                            <div className="flex items-center space-x-2">
                                <h3 className="font-bold text-sm text-center text-default/55 sm:text-2xl">{mealDetails.rating}</h3>
                                <div className="h-fit w-fit"><Rating fill="gray" height="20" width="20" /></div>
                            </div>
                            <div className="mt-1 mr-2 h-fit w-fit"><Bookmark fill="none" fillStroke="gray" height="24" width="24" /></div>
                        </div>
                        <span className="flex space-x-1 px-2 font-semibold">
                            {mealDetails.category.flatMap((category, index, array) => {
                                let elements = [<span key={index}>{category}</span>];
                                if (index < array.length - 1) {
                                    elements.push(<Diamonds key={`diamond-${index}`} fill="red" height="10" width="10" />);
                                }
                                return (
                                    <div key={index} className="flex space-x-1 text-start font-normal text-wrap items-center w-fit text-xs h-fit">
                                        {elements}
                                    </div>
                                );
                            })}
                        </span>
                        <h2 className="font-medium text-lg mt-5 mb-0.5 text-default/75">Description</h2>
                        <span className="text-left px-2 leading-relaxed text-default/75 font-normal indent-4 whitespace-normal antialiased">
                            {showMore ? mealDetails.description : mealDetails.description.substring(0, 100)}
                        </span>
                        {mealDetails.description.length > 100 && (
                            <button onClick={() => setShowMore(!showMore)} className="ml-72 sm:ml-64 w-fit font-medium text-sm rounded-sm active:text-bg_variant1">
                                {showMore ? 'Show Less' : 'Show More'}
                            </button>
                        )}

                    </div>
                    <button className="bg-bg_variant1 mt-6 -ml-1.5 p-3 w-full sm:max-w-80 sm:mx-auto text-pure_white/80 font-bold rounded-lg shadow shadow-bg_variant1 active:bg-bg_variant1/80">
                        ADD TO CART
                    </button>
                   <div className="flex flex-col mb-10 mt-8 space-y-4">
                        <h2 className="font-semibold text-lg text-default/80">Common Pairings</h2>
                        <div id='container' className="p-1 grid grid-cols-3 gap-y-2.5 px- sm:mx-auto sm:px-12 md:px-10">
                            {mealDetails.SpecialNotes.pairings.slice(0, showMore ? mealDetails.SpecialNotes.pairings.length : 3).map(dish => {
                                return (
                                    <div className="h-40 w-28 sm:h-44 sm:w-32 md:h-48 md:w-40 drop-shadow-sm rounded-lg overflow-hidden caret-transparent cursor-pointer relative">
                                        <img src={`/assets/img/gallery/meals/covers/${dish.image}.webp`} className="object-cover h-full w-full" />
                                        <div className="bg-default/55 h-12 sm:h-10 p-1 text-wrap w-full absolute bottom-0 bg-blur"><p className="text-pure_white/85 font-medium text-sm">{dish.pairingDish}</p></div>
                                    </div>
                                )
                            })}
                            {mealDetails.SpecialNotes.pairings.length > 3 && (
                                <button onClick={() => setShowMore(!showMore)} className="w-32 ml-64 sm:ml-80 text-sm font-medium active:text-bg_variant1">
                                    {showMore ? 'Show Less' : 'Show More'}
                                </button>
                            )}
                        </div>
                        <div className="w-fit">
                            <CollapsibleList mealDetails={mealDetails} />
                        </div>
                   </div>
                </div>
           ) : <p>Fetching Data. Please wait...</p>}
           <Footer />
        </div>
    );
}

export default MealItem;