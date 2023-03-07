import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="mx-auto bg-themeBlue py-4">
            <div className="max-w-7xl flex items-center justify-between px-5 md:px-0 mx-auto">
                <div>
                    <img src="images/RapidataLogo.svg" width="100px" alt="" />
                </div>

                <div className="font-Graphik text-cream">
                    <NavLink
                        to="/"
                        className="text-base md:text-lg font-Graphik text-themeCream mt-1 flex items-center">
                        <p>About us</p>
                        <img
                            src="images/Arrow.svg"
                            className="inline-block ml-1"
                            width="13"
                            alt=""
                        />
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;
