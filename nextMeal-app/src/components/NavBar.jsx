import React, {useState} from 'react';
import { navLinks } from '../utilities/links';

import { Link } from 'react-router-dom';

function NavBar({ colorTheme }) {
    const [openNavWidget, setOpenNavWidget] = useState(false);
    const [isActive, setActive] = useState(false);

    const handleHover = () => {
        setOpenNavWidget(prevState => !prevState);
        setActive(!isActive);
    };

    return (
        <>
            <div className="w-fit">
                <div className="flex flex-row space-x-0 text-sm font-medium">
                    {navLinks.map((link, index) => (
                        <Link key={index} to={link.to} onMouseEnter={handleHover} className={`block ${index === 0 ? 'text' : ''} p-1.5 text-${colorTheme} hover:border-b-2 border-${colorTheme}`}>{link.text}</Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NavBar;