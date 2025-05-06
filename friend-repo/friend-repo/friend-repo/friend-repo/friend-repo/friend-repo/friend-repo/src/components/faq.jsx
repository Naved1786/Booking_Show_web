import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I sell my unused tickets?",
      answer: "You can list your tickets on our platform for others to view and purchase at a discounted rate.",
    },
    {
      question: "Is there a fee for buying or selling tickets?",
      answer: "No, our platform is free to use. Simply register and start listing or purchasing tickets.",
    },
    {
      question: "How are payments handled?",
      answer: "We offer secure payment options for a seamless transaction experience.",
    },
    {
      question: "Can I transfer tickets to someone else?",
      answer: "Yes, you can transfer tickets securely through our platform to another user.",
    },
    {
      question: "What happens if the event is canceled?",
      answer: "If an event is canceled, you'll be notified, and a refund may be issued depending on the event organizer's policy.",
    },
    {
      question: "Do I need an account to buy or sell tickets?",
      answer: "Yes, creating an account helps us ensure secure transactions for both buyers and sellers.",
    },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-stone-200 pb-4">
          <button
            className="w-full text-left text-lg font-medium text-stone-700 focus:outline-none"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            {faq.question}
          </button>
          <p className={`text-stone-500 text-sm mt-2 ${activeIndex === index ? "block" : "hidden"}`}>
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
