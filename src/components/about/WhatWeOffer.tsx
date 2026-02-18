"use client";
import React, { useEffect, useRef, useState } from "react";

const WhatWeOffer = () => {
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

  const offerings = [
    {
      id: 1,
      title: "Ta'leem",
      subtitle: "Education",
      description:
        "Comprehensive academic learning that combines traditional Islamic knowledge with modern scientific education.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      ),
    },
    {
      id: 2,
      title: "Tarbiyah",
      subtitle: "Character Building",
      description:
        "Holistic spiritual and moral development focused on nurturing ethical values, discipline, and Islamic character.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
    },
    {
      id: 3,
      title: "Da'wa",
      subtitle: "Service & Outreach",
      description:
        "Active engagement in community service, leadership development, and spreading beneficial knowledge to society.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="px-6 lg:px-20 py-20 w-screen overflow-hidden bg-(--secondary-bg)"
    >
      <div className="max-w-400 mx-auto">
        <div className="text-center mb-16">
          <div className="flex flex-col gap-2 items-center mb-6">
            <h2
              className={`text-xl md:text-2xl lg:text-3xl uppercase font-semibold text-(--primary-color) transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              What We Offer
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
            A balanced educational system combining academic learning with
            spiritual growth, mentorship, and character development through our
            three core pillars
          </p>
        </div>

        {/* Offerings Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={offering.id}
              className={`group transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="relative h-full bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-(--accent-gold)">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-(--primary-color) to-(--primary-color)/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-(--secondary-bg)"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {offering.icon}
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-['Playfair_Display'] font-semibold text-(--primary-color) mb-2">
                  {offering.title}
                </h3>
                <p className="text-sm text-(--accent-gold) font-medium mb-4">
                  {offering.subtitle}
                </p>
                <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                  {offering.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-(--accent-gold)/5 rounded-bl-full -z-10" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1400 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-linear-to-r from-(--primary-color) to-(--primary-color)/90 rounded-lg p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-5 bg-center bg-repeat bg-size-[400px_400px]"
              style={{ backgroundImage: "url('/vector.png')" }}
            />
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-['Playfair_Display'] font-semibold mb-4">
                Holistic Development
              </h3>
              <p className="text-[15px] md:text-[16px] opacity-90 max-w-3xl mx-auto">
                Through the integration of Ta'leem, Tarbiyah, and Da'wa, we
                cultivate well-rounded individuals equipped with knowledge,
                strong moral character, and a commitment to serving humanity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;