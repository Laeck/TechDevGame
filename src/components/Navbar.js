import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div class="nav-wrapper blue lighten-2">
                <ul class="left hide-on-med-and-down">
                    <li class="active"><a href="collapsible.html">Admin</a></li>
                </ul>
                <ul>
                    <li class="center"><a href="sass.html">Articles</a></li>
                    <li><a href="badges.html">Tests</a></li>
                    <li><a href="collapsible.html">Videos</a></li>
                    <li><a href="collapsible.html">News</a></li>
                </ul>
                <ul class="right hide-on-med-and-down">
                    <li class="center"><a href="sass.html">Inscription</a></li>
                    <li><a href="badges.html">Connexion</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
