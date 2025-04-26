import React from 'react';
import { Link } from 'react-router' // Updated to react-router-dom

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                <ul className="flex space-x-6">
                    <li>
                        <Link
                            to="/Dashboard"
                            className={"text-gray-700 hover:text-gray-900 transition-colors"}>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/About"
                            className={
                                "text-gray-700 hover:text-gray-900 transition-colors"}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;