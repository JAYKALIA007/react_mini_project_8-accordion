import AccordionItem from "./AccordionItem";
import { faqs } from "./constants";
import { useState } from "react";
const Accordion = () => {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  return (
    <div>
      <p>Accordion component</p>
      {faqs.map((faq) => (
        <div
          key={faq.question}
          onClick={() => setSelectedQuestion(faq.question)}
        >
          <AccordionItem faq={faq} selectedQuestion={selectedQuestion} />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
