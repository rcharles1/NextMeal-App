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
    <nav className={`${visibility} px-3 ssm:px-8 lg:px-12 cursor-pointer caret-transparent z-30  py-3 h-12 sticky top-12 lg:top-16 bg-slate_white/55 backdrop-blur`}>
      <ul className="flex capitalize text-base font-medium p-1 py-1 px-2 ">
        <li className="flex space-x-1.5 items-center">
            <BreadcrumbIcon />
            <div className="flex">
              <Link to="/" className="">Home</Link>
            </div>
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