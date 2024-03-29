import { React } from 'react';

function SearchRestaurant() {
    const handleSubmit = () => {
        //Logic Upcoming
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-row p-1 w-fit caret-pure_white mx-auto">
           <label>
               <input
                    placeholder="Search a Restaurant" 
                    className="capitalize w-72 p-3 px-5 font-medium rounded-l-md shadow-sm focus:outline-none caret-default cursor-pointer"
                 />
           </label>
           <div className="rounded-r-md h-11 px-2 py-2.5 bg-pure_white caret-pure_white cursor-pointer ">
               <div className="size-6 item">
                   <img src='/assets/icon/search-outline.svg' />
               </div>
           </div>
        </form>
    );
}

export default SearchRestaurant;