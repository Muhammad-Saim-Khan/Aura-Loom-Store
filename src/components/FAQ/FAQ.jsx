import React from "react";

const faqData = [
  {
    question: "What makes AURA LOOM different from other clothing brands?",
    answer:
      "At AURA LOOM, we combine bold designs with eco-friendly and ethically sourced materials. Our passion lies in creating timeless styles that allow you to express your individuality while caring for the planet.",
  },
  {
    question: "How can I care for my AURA LOOM garments?",
    answer:
      "We recommend washing our garments in cold water with mild detergent, avoiding harsh chemicals, and air-drying to maintain their quality and longevity.",
  },
  {
    question: "Are AURA LOOM products sustainably made?",
    answer:
      "Yes, sustainability is at the heart of AURA LOOM. All our products are crafted using eco-friendly processes and ethically sourced materials to ensure minimal environmental impact.",
  },
  {
    question: "Where can I shop AURA LOOM products?",
    answer:
      "You can explore our entire collection on our official website or at select retail partners. Stay tuned for updates on new collections and exclusive offers by following us on social media.",
  },
];
const FAQ = () => {
  const [active, setActive] = React.useState(null);
  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };
  return (
    <div className="max-w-2xl mx-auto mt-20 mb-28 px-8">
      <h1 className="text-3xl font-bold text-center pb-8">
        Frequently Asked Questions
      </h1>

      {faqData.map((item, index) => (
        <div key={index} className="mb-4 py-4 border-b border-gray-300 ">
          <div
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => handleClick(index)}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {item.question}
            </h3>
            <span>{active === index ? "-" : "+"}</span>
          </div>

          {active === index && <p className="text-gray-600">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
