import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import type { AccordionItemData } from "./Accordion.types";

type AccordionProps = {
  items: AccordionItemData[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="accordion">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          content={item.content}
          isOpen={openIndex === idx}
          onClick={() => handleToggle(idx)}
        />
      ))}
    </div>
  );
};

export default Accordion;
