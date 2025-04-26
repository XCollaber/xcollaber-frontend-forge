
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Is this legal?',
    answer: 'Yes, XCollaber operates in full compliance with international financial regulations and data protection laws. We ensure all transactions meet legal requirements in both origin and destination countries.',
  },
  {
    question: 'Can I trust XCollaber?',
    answer: 'Absolutely. We implement bank-level security measures, are fully transparent about our fees and processes, and have a team of financial experts ensuring your transactions are secure and compliant.',
  },
  {
    question: "What's the fee?",
    answer: 'Our fee structure is simple and transparent. We charge a small percentage of each transaction (typically 2.5-3.9%) depending on the countries involved. There are no hidden fees or monthly charges.',
  },
  {
    question: 'How quickly will I get paid?',
    answer: 'Most transactions are processed within 1-2 business days. The exact timing depends on your local banking system and the payment method chosen.',
  },
  {
    question: 'Which countries do you support?',
    answer: 'We currently support over 120 countries worldwide. You can check if your country is supported by contacting our support team or checking the country list in your account settings.',
  },
  {
    question: 'What type of content can I submit?',
    answer: 'We accept a wide range of digital content including courses, ebooks, software, music, videos, and digital services. All content must comply with our terms of service and legal requirements.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Get answers to common questions about XCollaber's services and processes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-lg bg-white overflow-hidden reveal"
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus size={20} className="text-xcollaber-blue" />
                ) : (
                  <Plus size={20} className="text-xcollaber-blue" />
                )}
              </button>
              <div
                className={`px-5 pb-5 ${
                  openIndex === index ? 'block animate-accordion-down' : 'hidden'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
