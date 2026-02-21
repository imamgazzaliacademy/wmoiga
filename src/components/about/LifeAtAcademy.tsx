"use client";
import React, { useEffect, useRef, useState } from "react";

const LifeAtAcademy = () => {
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

  const highlights = [
    {
      id: 1,
      title: "Diverse Community",
      description: "Students from different regions united by shared values",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      id: 2,
      title: "Spiritual Growth",
      description: "Daily practices fostering spiritual development",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      ),
    },
    {
      id: 3,
      title: "Academic Excellence",
      description: "Rigorous curriculum with personalized mentorship",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      ),
    },
    {
      id: 4,
      title: "Social Development",
      description: "Building lifelong friendships and networks",
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
      id="lifeAtGazzali"
      className="px-6 lg:px-20 py-20 w-screen overflow-hidden bg-white relative"
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
              Life at Gazzali
            </h2>
            <span
              className={`h-1 bg-(--accent-gold) transition-all duration-700 delay-200 ${
                isVisible ? "w-20" : "w-0"
              }`}
            />
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Description */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-700">
              The academy offers a disciplined and inclusive environment where
              students grow academically, spiritually, and socially through
              shared values and community living.
            </p>

            <div className="bg-(--secondary-bg) rounded-lg p-6 border-l-4 border-(--accent-gold)">
              <h3 className="text-lg font-['Playfair_Display'] font-semibold text-(--primary-color) mb-3">
                A Unique Experience
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                Life at Imam Gazzali Academy offers a unique and enriching
                environment where learning goes beyond classrooms. Students enter
                a diverse and vibrant community united by shared values and a
                commitment to the betterment of the Ummah.
              </p>
            </div>

            <div className="bg-linear-to-br from-(--primary-color) to-(--primary-color)/90 rounded-lg p-6 text-white">
              <h3 className="text-lg font-['Playfair_Display'] font-semibold mb-3">
                Core Values
              </h3>
              <div className="space-y-2">
                {["Ta'leem (Education)", "Tarbiyah (Character Building)", "Da'wa (Service & Outreach)"].map(
                  (value, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-(--accent-gold) shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[14px] md:text-[15px]">{value}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right: Image Gallery */}
          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/photos/1.png"
                  alt="Campus Life"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/photos/std3.jpg"
                  alt="Study Hall"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/photos/5.JPG"
                  alt="Community"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.id}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${800 + index * 150}ms` }}
            >
              <div className="bg-(--secondary-bg) rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-(--primary-color) flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {highlight.icon}
                  </svg>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-(--primary-color) mb-2">
                  {highlight.title}
                </h4>
                <p className="text-[13px] md:text-[14px] text-gray-600">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1400 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-[15px] md:text-[16px] text-gray-600 mb-6">
            Experience a transformative journey of learning, growth, and service
          </p>
          <button className="px-8 py-3 rounded-[5px] bg-(--accent-gold) text-white font-semibold transition-all hover:bg-(--accent-light) hover:-translate-y-0.5">
            Explore Campus Life
          </button>
        </div>
      </div>
    </div>
  );
};

export default LifeAtAcademy;