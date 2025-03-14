import Home from './Home';
import Sets from './Sets';
import Subscribe from './Subscribe';
import About from './About';
import Contact from './Contact';

function Main({ page,name }) {
    return (
        <main className="main" id="main">
            {(page === '#/') && <Home name={name} />}
            {(page === '#/sets') && <Sets name={name} />}
            {(page === '#/subscribe') && <Subscribe name={name} />}
            {(page === '#/about') && <About name={name} />}
            {(page === '#/contact') && <Contact name={name} />}
        </main>
    );
}

export default Main;