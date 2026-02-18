"use client";
import React, { useEffect, useRef, useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What are the admission requirements for Imam Gazzali Academy?",
      answer:
        "Admission requirements include a completed application form, academic transcripts, entrance examination, and an interview with the admissions committee. Students should demonstrate a commitment to Islamic values and academic excellence.",
    },
    {
      id: 2,
      question: "What is the academic curriculum like?",
      answer:
        "Our curriculum balances traditional Islamic studies with modern academic subjects including mathematics, science, languages, and social studies. We follow a comprehensive educational approach that prepares students for both spiritual growth and academic success.",
    },
    {
      id: 3,
      question: "Are there boarding facilities available?",
      answer:
        "Yes, we offer boarding facilities for students. Our hostel provides a safe, disciplined environment with proper supervision, nutritious meals, and study support. Boarding students benefit from a structured routine that balances academics with spiritual development.",
    },
    {
      id: 4,
      question: "What are the school timings?",
      answer:
        "Regular classes run from 8:00 AM to 4:00 PM, Monday through Friday. Additional study sessions and extracurricular activities are scheduled in the evenings. Saturday classes are held from 9:00 AM to 1:00 PM for certain programs.",
    },
    {
      id: 5,
      question: "How can parents stay updated on their child's progress?",
      answer:
        "We maintain regular communication through parent-teacher meetings, monthly progress reports, and digital platforms. Parents can contact teachers directly via email or phone. We also organize quarterly review sessions to discuss academic and personal development.",
    },
    {
      id: 6,
      question: "What extracurricular activities are offered?",
      answer:
        "We offer various activities including sports, Islamic arts, public speaking, debate, Quranic recitation competitions, community service projects, and leadership programs. These activities complement academic learning and help develop well-rounded individuals.",
    },
    {
      id: 7,
      question: "Is financial aid available?",
      answer:
        "Yes, we offer financial assistance to deserving students based on merit and need. Interested families should contact our admissions office to learn about scholarship opportunities and payment plans available.",
    },
    {
      id: 8,
      question: "How do I schedule a campus visit?",
      answer:
        "You can schedule a campus tour by calling our office at +91 123 456 7890 or filling out the contact form above. We recommend scheduling visits at least a week in advance. Tours are available on weekdays from 10:00 AM to 3:00 PM.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div
      ref={sectionRef}
      className="px-6 lg:px-20 py-20 w-screen overflow-hidden bg-white"
    >
      <div className="max-w-300 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex flex-col gap-2 items-center mb-6">
            <h2
              className={`text-xl md:text-2xl lg:text-3xl uppercase font-semibold text-(--primary-color) transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Frequently Asked Questions
            </h2>
            <span
              className={`h-1 bg-(--accent-gold) transition-all duration-700 delay-200 ${
                isVisible ? "w-20" : "w-0"
              }`}
            />
          </div>
          <p
            className={`text-[15px] md:text-[16px] text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Find answers to common questions about admissions, academics, and
            campus life
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="bg-(--secondary-bg) rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-(--secondary-bg)/80 transition-colors"
                >
                  <span className="font-semibold text-(--primary-color) text-[15px] md:text-[16px] pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-(--accent-gold) shrink-0 transition-transform duration-300 ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openId === faq.id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <div className="border-t border-(--primary-color)/10 pt-4">
                      <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1400 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-(--secondary-bg) rounded-lg p-8 md:p-10 border-2 border-(--primary-color)/10">
            <h3 className="text-xl md:text-2xl font-semibold text-(--primary-color) mb-3">
              Still Have Questions?
            </h3>
            <p className="text-[15px] md:text-[16px] text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our admissions team is
              here to help with any additional questions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=Hello`}
                target="_blank"
                className="px-8 py-3 bg-(--accent-gold) text-white rounded-[5px] font-semibold transition-all hover:bg-(--accent-light) hover:-translate-y-0.5"
              >
                Send Us a Message
              </a>
              <a
                href={`tel:+${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                className="px-8 py-3 border-2 border-(--primary-color) text-(--primary-color) rounded-[5px] font-semibold transition-all hover:bg-(--primary-color) hover:text-white"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;