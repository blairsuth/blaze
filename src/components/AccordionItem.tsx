import React, { useRef } from "react";
import "index.css"; // Assuming you have a global CSS file for styles

type AccordionItemProps = {
  title: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="accordion-item">
      <button
        className={`accordion-title${isOpen ? " open" : ""}`}
        onClick={onClick}
        aria-expanded={isOpen}
        type="button"
      >
        {title}
        <span className={`arrow${isOpen ? " rotated" : ""}`}>▼</span>
      </button>
      <div
        className="accordion-content"
        ref={contentRef}
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight || 0}px` : "0px",
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
        aria-hidden={!isOpen}
      >
        <div style={{ padding: isOpen ? "1rem" : "0" }}>{content}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
