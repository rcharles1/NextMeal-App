import { React } from 'react';

function Search() {
    return (
        <form>
            <label  htmlFor="search">
                <input placeholder="Search Restaurant or Food" aria-label="Search Restaurant or Food" className="h-12 w-64 p-3 rounded-l-md  text-sm focus:outline-bg_variant1"/>
                <button className='bg-pure_white text-bg_variant1 font-bold w-14 h-12 p-2 focus:bg-pure_white/70 focus:text-pure_white  rounded-r-md' value='submit'>GO</button>
            </label>
        </form>
    );
}

export default Search;