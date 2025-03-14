import sunglassCat from './pics/cat-sunglass.jpg';
import yawnCat from './pics/cat-yawn.jpg';

import './styleHome.css';
import { useState } from 'react';

function Home() {
    const [count, setCount] = useState(1);
    return (
        <div className='main__div'>
            <div className="panels">
                <div className="panel">
                    <div className="panel1__pic-container">
                        <img src={sunglassCat} alt="A cat is wearing sunglass." className="panel1__pic" />
                    </div>
                    <div className="panel1__text-container">
                        <h2 className="panel__title">Long time Internet Subjects</h2>
                        <p className="panel__text">Adipiscing obcaecati praesentium repellendus a lusto Debitis nesclunt elus laborum
                            nostrum illo liio aliquid amet.</p>
                        <p className="panel__text">Elit necessitatibus inventore sed aliquid magnam eos,velit nisi Ea distinctio itaque
                            suscipit animi voluptate.</p>
                        <p className="panel__text">Elit quas similique pariatur eaque adipicing Enim delictus neque rerum sed nobis Dolor
                            suscipit nulla?</p>
                    </div>
                </div>

                <div className="panel">
                    <div className="panel2__pic-container">
                        <img src={yawnCat} alt="A cat is yawning." className="panel2__pic" />
                    </div>
                    <div className="panel2__text-container">
                        <h2 className="panel__title">Long time Internet Kings</h2>
                        <p className="panel__text">Elit quaeral ut quibusdam lure qui quibusdam baatea praesentium quaerat aut labore
                            debitis, possimus Veniam quod ab recusandae eco inventore.</p>
                        <p className="panel__text">Amet nisi illo unde eligendi nemo. Libero laboriosam quaeral accusamus incidunt at.
                            Pariatur nescium praesentium unde dolore assumenda,itaque officlis.</p>
                        <p className="panel__text">Ipsum fuga recusandae quae nescuint nisi? Magnam maiores natus a magni ture. Tenetur
                            error nam ab exceptun natus voluptatibus aut.</p>
                    </div>
                </div>
            </div>
            {/* <button
                onClick={() => {
                    const delay = Math.floor(Math.random() * 2000);
                    // Called after 1-2 seconds
                    setTimeout(() => setCount(prev => prev + 1), delay);
                }}
            > {count} </button> */}
        </div>
    );
}

export default Home;