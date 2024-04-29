import { React, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';
import CollapsibleList from './CollapsibleList';

import { useParams } from 'react-router-dom';

function MealItem() {
    const { id } = useParams();
    const [mealDetails, setMealDetails] = useState(null);

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
        <div className="flex flex-col antialiased text-default/75 bg-bg_variant2 mx-auto text-base font-normal h-screen w-100 space-y-0">
            <div className="sticky top-0 z-50 w-full">
                <Header />
            </div>
            <div className='sticky w-full caret-transparent top-20 sm:top-28 z-50 px-1 flex flex-row space-x-14 items-center justify-start caret-pure_white overflow-visible py-2 border-b-2 border-bg_variant2 backdrop-blur bg-opacity-70'> 
                <div className="ml-3 sticky"><MenuIcon /></div>
                <div className="capitalize font-base h-6 w-fit"><Breadcrumbs/></div>
            </div>
           {mealDetails ? (
                <div className="flex flex-col px-5 py-1 h-fit transition-all duration-500">
                    <h1 className="font-bold text-center text-3xl sm:text-3xl">{mealDetails.name}</h1>
                    <h3 className="font-bold text-center text-xl text-default/70 sm:text-2xl">{mealDetails.course}</h3>
                    <div className="rounded-lg p-1 h-80 sm:h-96 w-92 mx-auto overflow-hidden">
                        <img src={`/assets/img/gallery/meals/food/${mealDetails.img}.webp`} alt="meal-img" />
                    </div>
                    <div className="flex flex-col mt-8 h-32 w-92 mx-auto drop-shadow">
                        <h2 className="font-bold text-xl text-default/75">Description</h2>
                        <span className="flex space-x-3 mt-2 px-2 font-semibold text-bg_variant1/45 text-sm">
                            <p>{mealDetails.rating}</p>
                            <ol className="list-disc flex space-x-1.5">{mealDetails.category.map(item => {
                                return <li>{item}</li>
                            })}</ol>
                        </span>
                        <span className="text-left p-2 leading-relaxed text-default/75 font-normal indent-4 antialiased">{mealDetails.description}</span>
                    </div>
                    <button className="bg-bg_variant1 mt-24 -ml-1.5 p-3 w-full text-pure_white/80 font-bold rounded-lg shadow shadow-bg_variant1 active:bg-bg_variant1/80">
                        ADD TO CART
                    </button>
                   <div className="flex flex-col mb-10 mt-8 space-y-4">
                        <h2 className="font-bold text-xl text-default/80">Common Pairings</h2>
                        <div id='container' className="p-1 grid grid-cols-3 gap-y-3">
                            {mealDetails.SpecialNotes.pairings.map(dish => {
                                return (
                                    <div className="bg-pure_white h-40 w-28 drop-shadow-sm rounded-lg overflow-hidden caret-pure_white cursor-pointer">
                                        <img src={`/assets/img/gallery/meals/covers/${dish.image}.webp`} className="object-cover h-full w-full" />
                                    </div>
                                )
                            })}
                        </div>
                        <CollapsibleList mealDetails={mealDetails} />
                   </div>
                </div>
           ) : <p>Fetching Data. Please wait...</p>}
           <Footer />
        </div>
    );
}

export default MealItem;