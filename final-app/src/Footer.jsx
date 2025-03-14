import './footer.css';
function Footer({ setPage }) {
    return (
        <footer className="footer">
            <h2 className='footer__title'>Copyright reserved.</h2>
            <ul className='footer__link-list link-list'>
                <li className='link-list__item'>
                    <a className="link-list__link" onClick={(e) => {
                        document.location.hash = '#/contact';
                        setPage('#/contact');
                        // go to contact page and change the URL
                    }} href='#/contact'>
                        Contact Us
                    </a>
                </li>
            </ul>

            <ul className='footer__social-list social-list'>
                <li className='social-list__item'>
                    <a className='social-list__link' target="_blank"  rel="noreferrer" href="https://www.instagram.com/post.partumplates/">Instagram</a>
                </li>
                {/*  target="_blank"  rel="noreferrer" can open the link in new tabs and avoid warning */}
                <li className='social-list__item'>
                    <a className='social-list__link' target="_blank"  rel="noreferrer" href="https://www.facebook.com/profile.php?id=100091883496973">Facebook</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;