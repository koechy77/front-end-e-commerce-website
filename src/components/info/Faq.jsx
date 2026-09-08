import { useState } from "react";
import { faqs } from "../../data/database";

export default function Faq() {
  const [openFAQs, setOpenFAQs] = useState({});

  const toggleFAQ = (id) => {
    setOpenFAQs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="py-20 px-5 md:px-10 ">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-gray-600">
          Find answers to the most common questions about shopping with us.
        </p>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto">

        {faqs.map((faq) => (

          <div
            key={faq.id}
            className="border-b border-gray-200 py-6"
          >

            <button
              type="button"
              aria-expanded={Boolean(openFAQs[faq.id])}
              aria-controls={`faq-answer-${faq.id}`}
              onClick={() => toggleFAQ(faq.id)}
              className="
                w-full
                flex
                justify-between
                items-center
                text-left
              "
            >

              <span className="text-lg font-semibold font-poppins">
                {faq.question}
              </span>

              <span className="text-2xl font-light">
                {openFAQs[faq.id] ? "−" : "+"}
              </span>

            </button>

            {openFAQs[faq.id] && (

              <p id={`faq-answer-${faq.id}`} className="mt-4 text-orange-500 leading-7 font-supermercado">
                {faq.answer}
              </p>

            )}

          </div>

        ))}

      </div>
    </section>
  );
}
