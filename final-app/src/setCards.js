import mealsEssential from './pics/Meals-Essential.jpg';
import mealsPremium from './pics/Meals-Premium.jpg';
import mealsGolden from './pics/Meals-Golden.jpg';
import dessertsEssential from './pics/Desserts-Essential.jpg';
import dessertsPremium from './pics/Desserts-Premium.jpg';
import dessertsGolden from './pics/Desserts-Golden.jpg';

const setCards = [
    {
        name: "Meals-Essential",
        path: "#/subscribe",
        text:"The package includes the necessary nutrients for postpartum recovery diet, including staple foods, vegetables, meat and seafood or soy products and other protein-rich foods to ensure that mothers receive adequate nutrition after delivery and provide the necessary nutritional foundation for postpartum recovery.",
        src: mealsEssential,
        // not {squaCat}
        alt:"Rib, sunny egg and rice set."
    },
    {
        name: "Meals-Premium",
        path: "#/subscribe",
        text:"The package contains the necessary nutrients for postpartum recovery diet, including staple foods, vegetables, meat and seafood or soy products and other protein-rich foods, focusing on the nature of the food to ensure that the mother can fully absorb the nutrients in the food, providing a high-quality source of nutrition for postpartum recovery.",
        src:mealsPremium,        
        alt: "Beef rice and seafood pho set."
    },
    {
        name: "Meals-Golden",
        path: "#/subscribe",
        text:"The package includes the necessary nutrients for postpartum recovery diet, including protein-rich foods such as staple foods, vegetables, meat and seafood or soy products, selecting quality types of products and cooking them into beautiful meals with a variety of colors and flavors to provide a quality meal plan for postpartum recovery.",
        src:mealsGolden,
        alt: "Japanese sushi and ramen set."
    },
    {
        name: "Desserts-Essential",
        path: "#/subscribe",
        text:"The package includes desserts to help with postpartum recovery, including noodle desserts full of Chinese dietary characteristics and Western-style desserts in line with the North American diet, providing a more balanced source of nutrition for mothers.",
        src: dessertsEssential,
        alt:"Beef skew, corn and rice with strawberry cake."
    },
    {
        name: "Desserts-Premium",
        path: "#/subscribe",
        text:"The package includes exquisite desserts to help postpartum recovery, including noodle desserts full of Chinese dietary characteristics and Western-style desserts in line with the North American diet, ensuring the integrity and exquisiteness of the product, providing a more balanced source of nutrition for the mother, and providing a beautiful mood from the dessert.",
        src:dessertsPremium,        
        alt: "Tuna salad with Alice afternoon tea set."
    },
    {
        name: "Desserts-Golden",
        path: "#/subscribe",
        text:"The package includes exquisite desserts that help postpartum recovery, including noodle desserts full of Chinese dietary characteristics and Western-style desserts in line with the North American diet, ensuring quality diversity and deliciousness, providing a more balanced source of nutrition for the mother and providing a beautiful mood from desserts.",
        src:dessertsGolden,
        alt: "Seabass, spagetti, clam chowder, red wine with celebration cake and GODIVA chocolate."
    },
];

export default setCards;
