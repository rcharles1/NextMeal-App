import { React } from 'react';

function Search() {
    return (
        <form>
            <label>
                <input type='search' className="h-12 w-64 text-sm px-4  focus:outline-bg_variant1 rounded-md " placeholder='Search Restaurant or Food'/>
                <button className='border border-pure_white w-10 h-12' value='submit'>GO!</button>
            </label>
        </form>
    );
}

export default Search;