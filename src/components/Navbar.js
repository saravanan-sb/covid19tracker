import React from 'react';

const Navbar = () => {
    return (
        <header>
            <nav className="nav-wrapper purple darken-4">
                <div className="container">
                    <a href='/#' className="brand-logo">YesBee</a>
                    <a href="www.google.com" className="sidenav-trigger data" data-target='mobile-menu'>
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="www.google.com">Photos</a></li>
                        <li><a href="www.google.com">Service</a></li>
                        <li><a href="www.google.com">Contact</a></li>
                        <li><a href="www.google.com" className="btn-floating btn-small indigo darken-4 tooltipped" data-tooltip='instagram'>
                            <i className="fab fa-instagram"></i>
                        </a></li>
                        <li><a href="www.google.com" className="btn-floating btn-small indigo darken-4 tooltipped" data-tooltip="linkedin">
                            <i className="fab fa-linkedin"></i>
                        </a></li>
                        <li><a href="www.google.com" className="tooltipped btn-floating btn-small indigo darken-4 " data-tooltip="facebook">
                            <i className="fab fa-facebook"></i>
                        </a></li>
                    </ul>
                    <ul className="sidenav grey lighten-2" id="mobile-menu">
                        <li><a href="www.google.com">Photos</a></li>
                        <li><a href="www.google.com">Service</a></li>
                        <li><a href="www.google.com">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;