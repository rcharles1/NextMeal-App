import { React } from 'react';
import Header from './Header';
import Footer from './Footer';
import Restaurants from './Restaurants';
import Meals from './Meals';
import Services from './Services';
import Beverages from './Beverages';
import HomePage from './HomePage';

function Root() {
    return (
        <div className="h-lvh w-100 flex flex-col space-y-0 ">
            <main className="h-fit w-100">
                <div className="sticky top-0 z-10">
                    <Header />
                </div>
                <div className="h-screen bg-bg_variant1">
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
            </main>
        </div>
    );
}

export default Root;