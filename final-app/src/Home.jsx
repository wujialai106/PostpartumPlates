import postnatal from './pics/Postnatal.jpg';
import prenatal from './pics/Prenatal.jpg';

import './styleHome.css';

function Home() {
    return (
        <div className='main__div'>
            <div className="panels">
                <div className="panel">
                    <div className="panel1__pic-container">
                        <img src={prenatal} alt="A pregnant woman is sitting on a sofa." className="panel1__pic" />
                    </div>
                    <div className="panel1__text-container">
                        <h2 className="panel__title">Eastern Postpartum Culture</h2>
                        <p className="panel__text">The Chinese postpartum program, also known as "Zuo Yuezi," is a traditional practice that focuses on postpartum recovery. The program entails a 30 to 40-day confinement period during which new mothers are encouraged to rest, recover, and receive specialized postpartum care. <br />
                        Nourishing foods are critical components of the Chinese postpartum program. The program emphasizes the significance of nutrient-rich, warm, and easily digestible foods in promoting postpartum recovery. The foods are typically prepared using traditional Chinese medicinal ingredients, such as ginger, sesame oil, and rice wine, which are believed to enhance healing and replenish vital energy.</p>
                    </div>
                </div>

                <div className="panel">
                    <div className="panel2__pic-container">
                        <img src={postnatal} alt="A postnatal woman with her kid." className="panel2__pic" />
                    </div>
                    <div className="panel2__text-container">
                        <h2 className="panel__title">Benefits of Nourishing Foods in the Chinese Postpartum Program</h2>
                        <p className="panel__text">The Chinese postpartum program prioritizes holistic postpartum care, including nourishing foods, herbal remedies, and postpartum practices. The program aims to enhance physical and emotional recovery following childbirth and is based on traditional Chinese medicine principles. As a new mother, incorporating nourishing foods into your postpartum diet can support your postpartum recovery. <br />
                        The Chinese postpartum program emphasizes the importance of nourishing foods in promoting physical and emotional recovery. Nutrient-rich, warm, and easily digestible foods are believed to provide numerous benefits, including improved digestion, increased energy, and support for lactation. These foods are also believed to help prevent postpartum depression and improve overall postpartum recovery.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;