import logo from './pics/Logo.jpg';
import GlobalNav from './GlobalNav';
import './header.css';
function Header({ setPage }) {
    return (
        <header className="header">
            <a href="#/" onClick={(e) => {
                document.location.hash = '#/';
                setPage('#/');
                // go back to Home page and change the URL
            }}><img
                    src={logo}
                    className="header__logo"
                    alt="Cartoon of baby Brandon."
                    onClick={(e) => {
                        document.location.hash = '#/';
                        setPage('#/');
                        // go back to Home page and change the URL
                    }}
                /></a>


            <a href="#main" className="header__skiplink" aria-label="skip to the main content" >Skip to content</a>

            <h1 className="header__title">
                Welcome to PostpartumPlates! <br />
                Your Postnatal Meal Provider!
            </h1>

            <GlobalNav className="header__nav" setPage={setPage} />
        </header>
    );
}
export default Header;
