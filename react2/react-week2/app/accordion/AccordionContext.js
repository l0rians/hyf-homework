import { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

export function AccordionProvider({ children }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onChange = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? 0 : index));
  };

  return (
    <AccordionContext.Provider value={{ activeIndex, onChange }}>
      {children}
    </AccordionContext.Provider>
  );
}

export function useAccordionContext() {
  return useContext(AccordionContext);
}
