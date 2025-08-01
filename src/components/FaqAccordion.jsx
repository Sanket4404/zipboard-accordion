// src/components/FaqAccordion.jsx
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../data/faq';

export default function FaqAccordion() {
  const [openItems, setOpenItems] = useState({});

  const handleToggle = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="divide-y divide-gray-300 dark:divide-gray-700">
      {faqs.map((faq, index) => (
        <article key={index} className="py-5">
          <h2>
            <button
              aria-expanded={openItems[index]}
              aria-controls={`faq-panel-${index}`}
              onClick={() => handleToggle(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleToggle(index);
                }
              }}
              className="flex w-full items-center justify-between text-left text-xl font-semibold
                         text-gray-900 dark:text-gray-100
                         focus:outline-none focus-visible:ring-2
                         focus-visible:ring-purple-500 dark:focus-visible:ring-purple-400
                         rounded"
            >
              <span>{faq.q}</span>
              {openItems[index] ? (
                <ChevronUp className="w-5 h-5 shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 shrink-0" />
              )}
            </button>
          </h2>

          {openItems[index] && (
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-button-${index}`}
              className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              {faq.a}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}