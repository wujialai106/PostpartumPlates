import './styleAbout.css';
import scriptAbout from './scriptAbout';
import AccordionSection from './AccordionSection';


function About() {
    const list = scriptAbout.map(item => {
        return (
            <div className="accordion__div" key={item.accordion__title}>
                <AccordionSection title={item.accordion__title}>
                    {item.accordion__content}
                </AccordionSection>
            </div>
        );
    });
    
    return (
        <div className='main__div'>
            <h2 className="main__title">More you should know...</h2>
            {list}
        </div>

    );
}

export default About;