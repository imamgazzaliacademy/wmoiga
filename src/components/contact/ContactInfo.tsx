"use client";
import React, { useEffect, useRef, useState } from "react";

const ContactInfo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const contactDetails = [
    {
      id: 1,
      title: "Visit Us",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      ),
      details: [
        "WMO Imam Gazzali Academy",
        "Koolivayal, Wayanad",
        "Kerala, India - 670721",
      ],
    },
    {
      id: 2,
      title: "Call Us",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      ),
      details: [
        "+91 123 456 7890",
        "+91 098 765 4321",
        "Mon - Fri: 9:00 AM - 5:00 PM",
      ],
    },
    {
      id: 3,
      title: "Email Us",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
      details: [
        "info@imamgazzali.edu",
        "admissions@imamgazzali.edu",
        "Response within 24 hours",
      ],
    },
    {
      id: 4,
      title: "Office Hours",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Friday: Closed",
      ],
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="px-6 lg:px-20 py-20 w-screen overflow-hidden bg-(--secondary-bg)"
    >
      <div className="max-w-400 mx-auto">
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
              Contact Information
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
            Reach out to us through any of these channels. We're always happy to
            help!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((contact, index) => (
            <div
              key={contact.id}
              className={`group transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border-t-4 border-(--accent-gold)">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-(--primary-color) to-(--primary-color)/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {contact.icon}
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl  font-semibold text-(--primary-color) mb-4">
                  {contact.title}
                </h3>

                {/* Details */}
                <div className="space-y-2">
                  {contact.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Quick Contact */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-linear-to-r from-(--primary-color) to-(--primary-color)/90 rounded-lg p-8 md:p-10 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-5 bg-center bg-repeat bg-size-[400px_400px]"
              style={{ backgroundImage: "url('/vector.png')" }}
            />

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Need Immediate Assistance?
              </h3>
              <p className="text-[15px] md:text-[16px] opacity-90 mb-6 max-w-2xl mx-auto">
                For urgent inquiries or admission-related questions, feel free to
                call us directly during office hours.
              </p>
              <a
                href={`tel:+${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 px-8 py-3 bg-(--accent-gold) text-white rounded-[5px] font-semibold transition-all hover:bg-(--accent-light) hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;