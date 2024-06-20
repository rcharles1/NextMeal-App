import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profileLinks } from '../utilities/links'
import { Favorite, Account, CartIcon, SignOut } from '/src/components/svgs/InterfaceSvg';
import useSyncedLocalStorage from '../hooks/useSyncedLocalStorage';

function ProfileIcon({ colorTheme }) {
    const [openProfile, setOpenProfile] = useState(false);
    const location = useLocation();
    const [userData, setUserData] = useSyncedLocalStorage('user', null); 

    const iconComponents = {
        'Account': Account,
        'Favorites': Favorite,
        'Cart': CartIcon,
        'SignOut': SignOut
    };

    const handleClick = () => {
        setOpenProfile(prevValue => !prevValue);
    };
    
    const bg = location.pathname === '/' ? 'bg-pure_white/80' : 'bg-pure_white';
    const marginLeft = location.pathname === '/' ? 'right-56': '';

    return (
        <>
            <div onClick={handleClick} className={`size-8 md:size-5 ${colorTheme === 'pure_white' ? 'bg-pure_white outline outline-pure_white/35': 'shadow-md drop-shadow-sm' } bg-${bg} px-2.5 py-1.5 md:px-1 md:pt-0.5 text-center justify-center items-center font-bold text-base md:text-sm shadow rounded-full`}>
                <span className="uppercase font-bold">{userData.email[0]}</span>
            </div>
            {openProfile ? (
                    <div onClick={handleClick} className="fixed mt-2 ml-8 w-fit h-fit md:-ml-40 md:mt-4 space-y-5">
                        <div className={`${bg} ${marginLeft} relative w-56 sm:w-64 h-56 md:w-48 md:h-fit rounded-md`} style={{ backdropFilter: 'blur(10px)' }}>
                            <div className="h-56 w-full rounded divide divide-y divide-light_dark/55 items-center justify-center md:h-fit pt-3 md:pt-1 px-1 space-y-2 md:space-y-0 text-sm font-medium text-default/75">
                                {profileLinks.map((link, index) => {
                                    const IconComponent = iconComponents[link.img];
                                    return (
                                        <Link key={index} to={link.to} className={`block ${index === 0 ? '' : ''} p-3 hover:text-bg_variant1 hover:border-l-2 hover:border-bg_variant1 flex justify-even space-x-2 md:space-x-1`}>
                                        <IconComponent fill={'black'} height="20" width="40" />
                                        <span>{link.text}</span>
                                    </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
            ) : ''}
        </>
    );
}

export default ProfileIcon;