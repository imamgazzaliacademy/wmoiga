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
      title: "Our mission",
      content:
        "Imam Gazzali Academy aims to become a center of excellence in Islamic thoughts and research by providing authentic and scholarly leadership to assure the representation of the Muslim community in the educational, cultural, social, and political fields of the society.",
    },
    {
      id: 2,
      title: "Our Vision",
      content:
        "Imam Gazzali Academy envisions nurturing socially responsible, morally grounded, and intellectually competent Islamic scholars who possess knowledge, competitiveness, and strong values to contribute positively to society through education, research, and community engagement.",
    },
    {
      id: 3,
      title: "Our Values",
      content:
        "The Academy upholds core values such as commitment, respect, integrity, accountability, and responsibility, fostering an environment that encourages ethical leadership, mutual understanding, and dedication to personal and community development.",
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
              {item.title}
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
