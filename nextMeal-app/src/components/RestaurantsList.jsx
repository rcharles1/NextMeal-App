import { React } from 'react';
import Header from './Header';
import SearchRestaurant from './SearchRestaurant';
import RestaurantCard from './RestaurantCard';

const moods = [
    {
        image: '/assets/img/data/drinks/p', text: 'Drinks'
    },
    {
        image: '/assets/img/data/', text: 'Quick Eat'
    },
    {
        image: '/assets/img/data/drinks/', text: 'Breakfast'
    },
    {
        image: '/assets/img/data/drinks/pep', text: 'Lunch'
    },
    {
        image: '/assets/img/data/drinks/pepsi', text: 'Pizza'
    },
]

function RestaurantsList() {
    return (
        <div className="flex flex-col space-y-0 h-lvh w-100 bg-bg_variant2 text-sm font-normal"> 
           <div className="sticky top-0 z-10 w-full">
                <Header/>
           </div>
           <div id='container' className="flex flex-col space-y-5 p-5 h-full">
                <div className="flex flex-col space-y-2">
                    <h1 className="w-fit text-2xl font-bold">Restaurants</h1>
                    <SearchRestaurant />
                </div>
                <div className="flex flex-col space-y-2">
                    <h2 className="text-base font-semibold ">What's your mood?</h2>
                    <div className="flex flex-row space-x-2 mx-auto p-3 overflow-hidden">
                        {moods.map((mood, index) => (
                            <div key={index} className=" ">
                                <img src={mood.image} alt="Mood image" className="object-scale-down size-16 rounded-full bg-pure_white" />
                                <p className="text-xs mt-1 font-semibold text-faint_default/60 text-center">{mood.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col space-y-1">
                    <h1 className='text-base font-semibold '>Featured</h1>
                    <div id='container' className='p-3 grid grid-cols-2 gap-4'>
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                    </div>
                    <div className="ml-64 px-3 w-fit">Show More</div>

                </div>
                <div className="flex flex-col space-y-1">
                    <h1 className='text-base font-semibold '>Explore more choices</h1>
                    <div id='container' className='p-3 grid grid-cols-2 gap-4'>
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                    </div>
                </div>

           </div>

        </div>
    );
}

export default RestaurantsList;