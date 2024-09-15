
import { navLinks } from '../../utilities/links';
import { Link, useLocation } from 'react-router-dom'; 

function NavBar() {
    const [openNavWidget, setOpenNavWidget] = useState(false);
    const [isActive, setActive] = useState(false);
    const location = useLocation(); // Get the current route location

    const handleHover = () => {
        setOpenNavWidget((prevState) => !prevState);
        setActive(!isActive);
    };

    return (
        <>
            <div className="w-fit">
                <div className="flex flex-row space-x-1.5 text-sm font-medium ssm:space-x-2 ssm:text-base">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            onMouseEnter={handleHover}
                            className={`block ${
                                index === 0 ? 'text' : ''
                            } p-1.5 text-default/75 hover:text-bg_variant1 hover:border-b-2 border-bg_variant1 ${
                                location.pathname === link.to ? 'active-link' : '' 
                            }`}
                        >
                            {link.text}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default NavBar;