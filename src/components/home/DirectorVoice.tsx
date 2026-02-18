"use client";
import React, { useEffect, useRef, useState } from "react";

const DirectorVoice = () => {
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

  return (
    <div
      ref={sectionRef}
      className="px-6 lg:px-20 py-10 w-screen overflow-hidden bg-(--primary-color) relative"
    >
        <div 
        className="absolute inset-0 opacity-3 bg-center bg-repeat  bg-size-[600px_600px]"
        style={{ backgroundImage: "url('/vector.png')" }}
      ></div>

      <div className="max-w-400 mx-auto flex flex-col-reverse items-center md:flex-row">
        <div
          className={`space-y-4 w-full text-center md:text-start transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}
        >
          <p
            className={`font-semibold text-[18px] md:text-[22px] text-(--secondary-bg) transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            {"Director's Message"}
          </p>
          <p
            className={`font-semibold text-[16px] md:text-[20px] capitalize text-(--secondary-bg) transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            {"Welcome to WMO Imam Gazzali Academy"}
          </p>
          <p
            className={`font-medium text-[14px] md:text-[15px] text-(--secondary-bg) transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >{`Imam Gazzali Academy was established with the vision of nurturing a new generation of students grounded in authentic Islamic knowledge and prepared to meet the challenges of the modern world. Founded in Koolivayal as an institution of learning and character formation, the academy aims to develop scholars and leaders who carry the responsibility of education, guidance, and service to the Ummah. Through structured Ta'leem, holistic Tarbiyah, and purposeful Da'wa, the academy continues its journey toward academic excellence and moral leadership.`}</p>
        </div>
        <div
          className={`shrink-0 md:min-w-100 flex flex-col items-center text-center transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-12 scale-95"
          }`}
        >
          <div className="relative">
            <img
              src="/rg.png"
              alt="Dr. Rashid Gazzali"
              className="border-b-4 border-(--accent-gold) mb-2 shrink-0 w-60.75 h-80.75 object-cover"
            />
          </div>
          <p
            className={`font-medium text-[16px] md:text-[18px] text-(--secondary-bg) leading-5 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Dr. Rashid Gazzali
          </p>
          <p
            className={`font-medium text-[14px] md:text-[16px] text-(--secondary-bg) transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Director
          </p>
        </div>
      </div>
    </div>
  );
};

export default DirectorVoice;