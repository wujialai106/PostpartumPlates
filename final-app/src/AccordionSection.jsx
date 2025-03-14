import { useState } from "react";
import './styleAccordionSection.css'
import Button from './Button';

function AccordionSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openClass = isOpen ? "accordion-section__title--open" : "";
  return (
    <div className="accordion-section">

      <Button
        visual="title"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen ? "true" : "false"}>
        <span className={`accordion-section__title ${openClass}`}>{title}</span>
      </Button>

      {isOpen && (<div className="accordion-section__content">{children}</div>)}
    </div>
  );
}

export default AccordionSection;
