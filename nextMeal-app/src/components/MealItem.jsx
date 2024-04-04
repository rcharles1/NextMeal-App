import { React, useState } from 'react';
import Header from './Header';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';

function MealItem() {


    return (
        <div className="flex flex-col space-y-2 bg-bg_variant2 mx-auto text-sm font-normal h-screen w-100 space-y-0">
            <div className="p-0">
                <Header />
            </div>
            <div className="px-5 h-fit flex-col space-y-5 ">
                <div className='sticky top-20 sm:top-28 z-10 flex flex-row space-x-3 items-center justify-start caret-bg_variant2 overflow-hidden py-2 border-b-2 border-gray backdrop-blur bg-opacity-70'> 
                    <MenuIcon />
                    <div className="px-2 capitalize h-6 w-72"><Breadcrumbs/></div>
                </div>
                <h1 className="font-bold text-center text-2xl sm:text-3xl">Beef Shawarma</h1>
                <div className="rounded-lg p-1 h-80 sm:h-96 w-92 mx-auto overflow-hidden">
                    <img src='/assets/img/data/beef-shawarma2.png' alt="meal-img" />
                </div>
                <div className="flex flex-col space-y-3 h-32 w-92 mx-auto drop-shadow">
                    <h3 className="font-semibold text-lg text-default/80">Description</h3>
                    <span className="text-start leading-relaxed text-default/75 ">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </span>
                </div>
                <button className="bg-bg_variant1 p-3 w-full text-base font-bold rounded-lg shadow shadow-bg_variant1 active:bg-bg_variant1/80">
                    ADD TO CART
                </button>
                <h2 className="font-semibold text-lg mt-10 text-default/80">Recently Viewed</h2>
                <div id='container' className="flex space-x-2">
                    <div className="bg-pure_white h-24 w-32 drop-shadow-sm rounded-lg overflow-hidden caret-pure_white cursor-pointer">
                        <img src="/assets/img/data/drinks/avocado.webp" className="object-cover h-24 w-32" />
                    </div>
                    <div className="bg-pure_white h-24 w-32 drop-shadow-sm rounded-lg overflow-hidden caret-pure_white cursor-pointer">
                        <img src="/assets/img/data/biryani.jpg" className="object-cover h-24 w-32" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MealItem;