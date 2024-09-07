import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { NextIcon, BreadcrumbIcon } from './svgs/InterfaceSvg';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  let visibility;
  if (location.pathname === '/') {
    visibility = 'hidden';
  } else {
    visibility = 'block';
  }

  return (
    <nav className={`${visibility} px-3 ssm:px-8 lg:px-19 cursor-pointer caret-transparent text-default/80 z-30 py-3 lg:py-2 h-12 lg:h-fit sticky top-12 lg:top-14 xl:top-12 bg-slate_white/55 backdrop-blur`}>
      <ul className="flex capitalize text-base lg:text-sm font-medium p-1 py-1 px-2 ">
        <li className="flex space-x-1.5 items-center">
            <BreadcrumbIcon />
            <div className="flex">
              <Link to="/" className="">Home</Link>
            </div>
            <NextIcon />
        </li>
        {pathnames.map((value, index, array) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const decodedSegment = decodeURIComponent(value);
          const regex = /(listings)/;
          const parts = decodedSegment.split(regex);
        
          return (
            <div key={index} className="flex items-center">
              {index === array.length - 1 ? <NextIcon /> : '' }
              <li key={to}>
                <Link to={to} className="truncate text-bg_variant1">
                    {parts.length > 1 ? (
                        parts.map((part, index) => (
                        <span key={index} className='mr-1'>{part}</span>
                        ))
                    ) : (
                        <span>{decodedSegment}</span>
                    )}
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;