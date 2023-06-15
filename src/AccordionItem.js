const AccordionItem = ({ faq, selectedQuestion }) => {
  return (
    <div
      style={{ border: "2px solid black", margin: "2px", padding: "5px" }}
      key={faq.question}
    >
      <p style={{ fontWeight: "bold" }}>{faq.question}</p>
      {selectedQuestion === faq.question && <p>{faq.answer}</p>}
    </div>
  );
};

export default AccordionItem;
