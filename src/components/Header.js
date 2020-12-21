import React from 'react';
import './header.css';
import Logo from '../logo.png';

const Header = () => {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo center">
                    <img src={Logo} alt='logo' class="logo" width="100" />
                </a>
            </div>
        </nav>
    );
}

export default Header;
