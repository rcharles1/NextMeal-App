import React, {useState} from 'react';
import { navLinks } from '../utilities/links';

import { Link, useLocation } from 'react-router-dom';

function NavBar({ colorTheme }) {
    const [openNavWidget, setOpenNavWidget] = useState(false);
    const [isActive, setActive] = useState(false);

    const handleHover = () => {
        setOpenNavWidget(prevState => !prevState);
        setActive(!isActive);
    };

    return (
        <>
            <div className="w-fit h-10">
                <div className="flex flex-row space-x-3">
                    {navLinks.map((link, index) => (
                        <Link key={index} to={link.to} onMouseEnter={handleHover} className={`block ${index === 0 ? 'text' : ''} p-2 text-${colorTheme}`}>{link.text}</Link>
                    ))}
                </div>
            </div>
            {openNavWidget ? (
               <div className="flex -ml-56 z-50 mt-2 bg-pure_white/85 rounded-md" style={{ backdropFilter: 'blur(5px)' }}>
                    <div className="h-96 bg-blur text-headings/75 text-base font-semibold p-4">
                        MEALS
                    </div>
               </div>
            ) : ''}
        </>
    )
}

export default NavBar;