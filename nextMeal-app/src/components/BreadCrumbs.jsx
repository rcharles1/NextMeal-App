import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs({ itemDoc }) {
    const location = useLocation();

    let currentLink = '';
    
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map((crumb, index) => {
            currentLink += `/${crumb}`;

            if (index === 1 && itemDoc) {
                return (
                    <div key={itemDoc.name} >
                        <Link to={currentLink}>
                            {`> ${itemDoc.name}`}
                        </Link>
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
            { itemDoc ? <div className="flex flex-row space-x-1 text-base font-semibold justify-">{crumbs}</div> : <p>...</p>}
        </>
    );
}
