import {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profileLinks } from '../../utilities/links'
import { Bookmark, Account, CartIcon, SignOut } from '/src/components/svgs/InterfaceSvg';
import useSyncedLocalStorage from '../../hooks/useSyncedLocalStorage';

function ProfileIcon() {
    const [openProfile, setOpenProfile] = useState(false);
    const location = useLocation();
    const [userData, setUserData] = useSyncedLocalStorage('user', null); 
    const googleId = userData.googleId;
    const [userDetails, setUserDetails] = useState({});

    const iconComponents = {
        'Account': Account,
        'Favorites': Bookmark,
        'Cart': CartIcon,
        'SignOut': SignOut
    };

    useEffect(() => {
        const getUserDetails = async () => {
          try {
            const response = await fetch(`https://nextmeal-server.onrender.com/userDetails/${googleId}`);
            if (response.ok) {
              const data = await response.json();
              setUserDetails(data);
            } else {
              console.log('Non-200 status received:', response.status);
              // Handle other non-200 statuses if needed
            }
          } catch (error) {
            console.log('Error fetching author details:', error);
          }
        };
        getUserDetails();
      }, [googleId]);

    const handleClick = () => {
        setOpenProfile(prevValue => !prevValue);
    };
    
    const bg = location.pathname === '/' ? 'bg-pure_white/80' : 'bg-pure_white';
    const marginLeft = location.pathname === '/' ? 'right-56': '';

    return (
      <>
        <div onClick={handleClick} className={`size-8 md:size-6 rounded-full ring-1 ring-silver/25 ring-offset-2 overflow-hidden`}>
          <img src={`${userDetails.picture}`} className="object-fit"/>
        </div>
        {openProfile ? (
          <div onClick={handleClick} className="fixed mt-2 ml-16 w-fit h-fit md:mt-4 md:-ml-32 space-y-5  ">
            <div className={`${bg} ${marginLeft} relative w-48 sm:w-64 h-fit md:w-40 md:h-fit rounded-md`} style={{ backdropFilter: 'blur(15px)' }}>
              <div className="h-full w-full rounded-lg divide divide-y divide-silver/35 items-center justify-center md:h-fit py-1 md:pt-1 px-1 space-y-0.5 md:space-y-0 text-base md:text-ssm font-semibold text-default/75">
                  {profileLinks.map((link, index) => {
                    const IconComponent = iconComponents[link.img];
                    return (
                      <Link key={index} to={link.to} className={`block ${index === 0 ? '' : ''} p-2 px-1 hover:text-bg_variant1 hover:border-l-2 hover:border-bg_variant1 md:p-1 md:px-3 flex items-center justify-left space-x-2 md:space-x-1.5`}>
                        <IconComponent fill={'black'}  />
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