import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs({ restaurantDoc }) {
    const location = useLocation();

    let currentLink = '';
    
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map((crumb, index) => {
            currentLink += `/${crumb}`;

            if (index === 1 && restaurantDoc) {
                return (
                    <div key={restaurantDoc.name} >
                        <Link to={currentLink}> {`> ${restaurantDoc.name}`}</Link>
                    </div>
                );
            }

            return (
                <div key={crumb} >
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            );
        });

    return (
        <>
            { restaurantDoc ? <div className="flex flex-row space-x-2 justify-left">{crumbs}</div> : <p>...</p>}
        </>
    );
}
