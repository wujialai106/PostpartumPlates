import './styleContact.css';
import Carousel from './Carousel';
import mealsEssential from './pics/Meals-Essential.jpg';
import mealsPremium from './pics/Meals-Premium.jpg';
import mealsGolden from './pics/Meals-Golden.jpg';
import dessertsEssential from './pics/Desserts-Essential.jpg';
import dessertsPremium from './pics/Desserts-Premium.jpg';
import dessertsGolden from './pics/Desserts-Golden.jpg';

function Contact() {

    const images = [
        mealsEssential,
        mealsPremium,
        mealsGolden,
        dessertsEssential,
        dessertsPremium,
        dessertsGolden,
    ];
    const alts = [
        "Rib, sunny egg and rice set.",
        "Beef rice and seafood pho set.",
        "Japanese sushi and ramen set.",
        "Beef skew, corn and rice with strawberry cake.",
        "Tuna salad with Alice afternoon tea set.",
        "Seabass, spagetti, clam chowder, red wine with celebration cake and GODIVA chocolate.",
    ];

    return (
        <div className='main__div'>
            <div className="container">
                <h2 className="main__title">Contact Us</h2>
                <div className="target"></div>
            </div>
            <div className='main__text'>
                <p>Get answers to your questions about PostpartumPlates benefits and services. Ask us a question via email, call us, or explore our FAQs and other resources in About page.</p>
                <p>By call: 571-430-9941</p>
                <p>By email: PostpartumPlates@gmail.com</p>

            </div>
            <Carousel images={images} alts={alts} />
        </div>

    );
}

export default Contact;