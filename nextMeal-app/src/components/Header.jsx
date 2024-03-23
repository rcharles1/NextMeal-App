import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Menu from './Menu.jsx';

function Header() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    
    const handleClick = (e) => {
        
        console.log('CLICKED!');
    }

    return (
        <div className="p-3">
            <div className="h-20 w-full p-3 rounded-md flex flex-row justify-between caret-bg_variant1 cursor-pointer">
                <div className="w-40 ">
                    <img src='/assets/img/next-meal-white.png' />
                </div>
                <div className="w-fit">
                    {isAuthenticated === false ? <Link href='' className=' w-fit outline outline-1 mt-2 text-pure_white font-bold w-14 h-12 p-2 focus:bg-pure_white/70 focus: rounded-md'>Sign in</Link> : <Menu /> }
                </div>
            </div>
        </div>
    );
}

export default Header;