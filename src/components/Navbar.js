import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ count, setCount }) {
    const closeNavbarOnLinkClick = () => {
        // Check if the navbar is open (only on small screens)
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler && navbarToggler.getAttribute('aria-expanded') === 'true') {
            navbarToggler.click(); // Click the toggler to close the navbar
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link
                    className={`nav-link px-3 ${count === 1 ? 'active' : ''}`}
                    aria-current="page"
                    to="/"
                    onClick={closeNavbarOnLinkClick}
                >
                    <p className="fs-2">Ashwani Dubey</p>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${count === 2 ? 'active' : ''}`}
                                aria-current="page"
                                to="/education"
                                onClick={closeNavbarOnLinkClick}
                            >
                                Education
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${count === 3 ? 'active' : ''}`}
                                aria-current="page"
                                to="/experience"
                                onClick={closeNavbarOnLinkClick}
                            >
                                Experience
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${count === 4 ? 'active' : ''}`}
                                aria-current="page"
                                to="/projects"
                                onClick={closeNavbarOnLinkClick}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${count === 5 ? 'active' : ''}`}
                                aria-current="page"
                                to="/skills"
                                onClick={closeNavbarOnLinkClick}
                            >
                                Skills
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
