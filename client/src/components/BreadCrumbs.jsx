import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ObjectId } from 'mongodb';

import { BreadcrumbIcon, NextIcon,  } from './svgs/InterfaceSvg';

const Breadcrumbs = () => {
    const location = useLocation();
    const [pathnames, setPathnames] = useState([]);
    const [names, setNames] = useState({});

    useEffect(() => {
        const paths = location.pathname.split('/').filter(x => x);
        setPathnames(paths);

        const fetchNames = async () => {
            const newNames = {};
            for (const path of paths) {
                if (ObjectId.isValid(path)) {
                    try {
                        const response = await fetch(`/api/getNameById/${path}`);
                        const data = await response.json();
                        newNames[path] = data.name || path;
                    } catch (error) {
                        console.error('Error fetching name:', error);
                        newNames[path] = path;
                    }
                } else {
                    newNames[path] = path;
                }
            }
            setNames(newNames);
        };

        fetchNames();
    }, [location]);

    return (
        <div className={`px-3 lg:px-19 cursor-pointer caret-transparent text-default/80 z-30 py-3 lg:py-2 h-12 lg:h-fit sticky top-12 lg:top-14 xl:top-12 bg-slate_white/55 backdrop-blur`}>
            <ul className="flex capitalize text-base lg:text-sm font-medium p-1 py-1 px-2 overflow-hidden">
                <li className="flex ssm:space-x-1.5 items-center">
                    <BreadcrumbIcon />
                    <div className="flex">
                        <Link to="/" className="">Home</Link>
                    </div>
                    <NextIcon />
                </li>
                {pathnames.map((value, index, array) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const decodedSegment = decodeURIComponent(value);
                    const displayName = names[decodedSegment] || decodedSegment;

                    return (
                        <div key={index} className="flex items-center">
                            {index === array.length - 1 ? <NextIcon /> : ''}
                            <li key={to}>
                                <Link to={to} className="truncate w-2">
                                    <span>{displayName}</span>
                                </Link>
                            </li>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default Breadcrumbs;