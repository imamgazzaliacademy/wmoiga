"use client";
import React, { useEffect, useRef, useState } from "react";

const AboutUs = () => {
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
    // {
    //   id: 3,
    //   title: "Our Values",
    //   content:
    //     "The Academy upholds core values such as commitment, respect, integrity, accountability, and responsibility, fostering an environment that encourages ethical leadership, mutual understanding, and dedication to personal and community development.",
    // },
  ];

  return (
    <div
      ref={sectionRef}
      className="px-6 lg:px-20 py-20 w-screen overflow-hidden bg-(--secondary-bg)"
    >
      <div className="max-w-400 mx-auto">
        <div className="flex flex-col gap-2 mb-8">
          <h2
            className={`text-xl md:text-2xl lg:text-3xl uppercase font-semibold text-(--primary-color) transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            About Us
          </h2>
          <span
            className={`h-1 bg-(--accent-gold) transition-all duration-700 delay-200 ${
              isVisible ? "w-20" : "w-0"
            }`}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-700">
              Imam Gazzali Academy. the abode and destination of knowledge
              seekers in Kerala, one of the southern states in India. is a
              reputed educational and research center which provides both
              religious and secular studies for the growing Islamic generation.
              The institute stands high as a light house guiding isolated and
              marginalized Muslim community towards the right path since 1999.
              Imam Gazzali Academy has played a vital role in uplifting the
              marginalized Muslim community in the country over its 20 years of
              journey.
            </p>
            {mission.map((val) => (
              <div
                key={val.id}
                className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-(--primary-color) flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-(--secondary-bg)"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-(--primary-color) mb-2">
                    {val.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-gray-600">
                    {val.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image with Decorative Elements */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="/photos/std1.jpg"
                alt="Students at Imam Gazzali Academy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--primary-color)/60 to-transparent" />
            </div>
            {/* Decorative Corner Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-(--accent-gold) rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-(--accent-gold)/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
