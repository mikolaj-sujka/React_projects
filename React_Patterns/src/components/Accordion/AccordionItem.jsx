import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error(
      "AccordionItem compound components cannot be rendered outside the AccordionItem component"
    );
  }
  return context;
};

export const AccordionItem = ({ id, className, children }) => {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
};
