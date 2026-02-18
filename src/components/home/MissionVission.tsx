"use client";
import React, { useEffect, useRef, useState } from "react";

const MissionVission = () => {
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

  const mission = [
    {
      id: 1,
      titile: "Our mission",
      content:
        "Imam Gazzali Academy is committed to nurturing students with strong academic foundations and sound moral values rooted in Islamic teachings. Our mission is to provide quality education that balances religious knowledge with modern learning, enabling students to grow intellectually, spiritually, and socially. We strive to shape disciplined, confident individuals who contribute positively to society with integrity and responsibility.",
    },
    {
      id: 2,
      titile: "Our Vission",
      content:
        "Our vision is to become a leading educational institution that produces knowledgeable, morally upright, and socially responsible individuals. Imam Gazzali Academy envisions a future where students excel academically while embodying Islamic values, leadership qualities, and compassion. We aim to prepare generations capable of facing modern challenges with wisdom, confidence, and a strong sense of purpose.",
    },
    {
      id: 3,
      titile: "Philosophy",
      content:
        "The philosophy of Imam Gazzali Academy is built on the belief that true education nurtures both the mind and the soul. Inspired by Islamic principles, we emphasize character development, discipline, and ethical conduct alongside academic achievement. We believe education should cultivate wisdom, humility, and service, guiding students to lead meaningful lives rooted in faith, knowledge, and responsibility.",
    },
  ];

  return (
    <div ref={sectionRef} className="px-6 lg:px-20 py-20 max-w-400 mx-auto">
      <div
        className={`flex flex-col gap-2 items-center mb-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        }`}
      >
        <h2 className="text-2xl md:text-3xl text-center pointer-events-none uppercase font-semibold text-(--primary-color)">
          our Mission & vission
        </h2>
        <span className="w-20 h-1 bg-(--accent-gold)"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {mission.map((item, index) => (
          <div
            key={item.id}
            className={`space-y-4 text-(--text-dark) rounded-lg border-b-4 py-4 border-(--accent-gold) h-full w-full transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 500}ms` : "0ms",
            }}
          >
            <div className="flex items-center p-1 pointer-events-none border-l-2 border-(--accent-gold) rounded-full">
              <div className="w-10 md:w-12 md:h-12 h-10  rounded-full bg-(--accent-gold) text-(--secondary-bg) font-semibold text-[14px] md:text-[16px] flex items-center justify-center transform transition-transform duration-500 hover:scale-110">
                {item.id}
              </div>
            </div>
            <p className="font-semibold text-[16px] md:text-[18px]">
              {item.titile}
            </p>
            <p className="font-medium text-[14px] md:text-[15px]">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVission;
