import './globalNav.css';
import { useState } from 'react';

import menu from './menu';
function GlobalNav({ className, setPage }) {
    const [showMenu, setShowMenu] = useState(false);
    function go(e) {
        e.preventDefault();
        document.location.hash = e.target.getAttribute('href');
        setPage(e.target.getAttribute('href'));
        // hash based navigation
    }
    const list = menu.map(item => {
        return (
            <li className="global-nav__item" key={item.name} onClick={() => setShowMenu(false)}>
                {/* use Onlick to setShowMenu value to false to close the dropdown menu each time after cilck. */}

                <a className="global-nav__link" onClick={go} href={item.path}>
                    {item.name}
                </a>
            </li>
        );
    });

    const menuClass = showMenu ? 'global-nav__list--open' : '';

    const menuHtml = (
        <ul className={`global-nav__list ${menuClass}`}>
            {list}
        </ul>
    );
    return (
        <nav className={`global-nav ${className}`}>
            <a href='/' className="global-nav__gg-menu"
                aria-label={showMenu ? "Close Menu" : "Open Menu"}
                onClick={(e) => {
                    e.preventDefault();
                    setShowMenu(!showMenu);
                }}
            >
            </a>
            {/* href='/' can not be ignored, otherwise git would have a warning says The href attribute is required for an anchor to be keyboard accessible.  */}
            {/* to prevent page reload, add preventDefault in onClick. */}
            {menuHtml}
            {/* {showMenu && menuHtml} */}
            {/* conditional rendering the menu, can use this for dropdown menu */}

        </nav >
    );
}
export default GlobalNav;