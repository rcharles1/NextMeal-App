import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BreadcrumbIcon } from './svgs/InterfaceSvg';

const Breadcrumbs = () => {
    const location = useLocation();
    const [pathnames, setPathnames] = useState([]);
    const [names, setNames] = useState({});

    useEffect(() => {
        const paths = location.pathname.split('/').filter(x => x);
        setPathnames(paths);

        const fetchNames = async () => {
            const newNames = {};
            const idRegex = /^[a-f\d]{24}$/i;

            for (const path of paths) {
                if (idRegex.test(path)) {
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
        <div className="px-4 lg:px-8 py-3 sticky top-14 bg-white/90 backdrop-blur-sm z-30 shadow-sm">
            <nav className="max-w-screen-xl mx-auto">
                <ol className="flex items-center space-x-2 text-sm font-medium text-gray-500">
                    <li className="flex items-center">
                        <Link to="/" className="text-blue-600 hover:text-blue-700 transition-colors">
                            <BreadcrumbIcon className="w-4 h-4" />
                        </Link>
                    </li>
                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const decodedSegment = decodeURIComponent(value);
                        const displayName = names[decodedSegment] || decodedSegment;
                        const isLast = index === pathnames.length - 1;

                        return (
                            <li key={to} className="flex items-center">
                                <svg className="w-4 h-4 mx-2 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                                {isLast ? (
                                    <span className="text-gray-700 truncate max-w-[160px]">
                                        {displayName}
                                    </span>
                                ) : (
                                    <Link to={to} className="text-gray-600 hover:text-gray-900 transition-colors truncate max-w-[160px]">
                                        {displayName}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs;