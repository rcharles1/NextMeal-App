import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { profileLinks } from '../utilities/links'

function ProfileIcon() {
    const [openProfile, setOpenProfile] = useState(false);
    const location = useLocation();

    const handleClick = () => {
        setOpenProfile(prevValue => !prevValue);
    };
    
    const bg = location.pathname === '/' ? 'bg-pure_white/80' : 'bg-pure_white';
    const marginLeft = location.pathname === '/' ? 'right-56': '';

    return (
        <>
            <div onClick={handleClick} className="size-10 -mt-1 bg-bg_variant1/40 px-3.5 py-2 font-bold text-base shadow outline outline-pure_white/35 bg-pure_white rounded-full">
                R
            </div>
            {openProfile ? (
                    <div onClick={handleClick} className="fixed mt-56 pt-16 w-8 h-fit space-y-5">
                        <div className={`${bg} ${marginLeft} relative w-64 h-56 rounded-md`} style={{ backdropFilter: 'blur(5px)' }}>
                            <div className="h-lvh w-80 items-center justify-center pt-3 px-4 space-y-2 font-semibold text-default/70 text-lg">
                                {profileLinks.map((link, index) => (
                                    <Link key={index} to={link.to} className={`block ${index === 0 ? 'border-l-4 border-gray/90' : ''} p-2 hover:text-bg_variant1 hover:border-l-2 hover:border-bg_variant1 `}>{link.text}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : ''}
        </>
    );
}

export default ProfileIcon;