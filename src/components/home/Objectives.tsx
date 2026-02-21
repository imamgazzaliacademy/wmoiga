"use client";
import React, { useEffect, useRef, useState } from "react";

const Objectives = () => {
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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const objectives = [
    "To mold Islamic scholars capable of leading the community socially, politically and internationally towards the desired goal.",
    "To propagate peaceful messages of Islam by diverse means and ways among all sections of people.",
    "To ensure adequate presence of the community in all spheres including representative democracy, bureaucracy, diplomacy, administration etc.",
    "To create a generation to volunteer to shoulder the responsibility of leading the community and the world towards the shore of spirituality.",
    "To enable Muslims to learn and internalize knowledge from a broad Islamic intellectual perspective.",
  ];

  return (
    <div
      ref={sectionRef}
      className="px-6 lg:px-20 py-20 w-screen overflow-hidden bg-(--primary-color) relative"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-3 bg-center bg-repeat bg-size-[600px_600px]"
        style={{ backgroundImage: "url('/vector.png')" }}
      />

      <div className="max-w-400 mx-auto relative z-10">
        <div className="flex flex-col gap-2 mb-12 text-center">
          <h2
            className={`text-xl md:text-2xl lg:text-3xl uppercase font-semibold text-(--secondary-bg) transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Our Objectives
          </h2>
          <div className="flex justify-center">
            <span
              className={`h-1 bg-(--accent-gold) transition-all duration-700 delay-200 ${
                isVisible ? "w-20" : "w-0"
              }`}
            />
          </div>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {objectives.map((objective, index) => {
            const isLastOdd =
              objectives.length % 2 !== 0 && index === objectives.length - 1;

            return (
              <div
                key={index}
                className={`flex ${isLastOdd ? "items-start  md:col-span-2 md:items-center" : "items-start "} gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-(--accent-gold)/20 hover:bg-white/20 hover:border-(--accent-gold)/40 transition-all duration-300 hover:-translate-y-1 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                {/* Icon */}
                <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-(--accent-gold) flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                {/* Objective Text */}
                <p className="text-[14px] md:text-[15px] lg:text-[16px] text-(--secondary-bg) leading-relaxed">
                  {objective}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        {/* <div
          className={`mt-12 text-center transition-all duration-1000 delay-1200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-[15px] md:text-[16px] text-(--secondary-bg)/90 italic max-w-3xl mx-auto">
            Through these objectives, we strive to develop individuals who are
            not only well-versed in Islamic knowledge but also equipped to
            contribute positively to society and lead with wisdom and integrity.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Objectives;
