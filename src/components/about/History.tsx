"use client";
import React, { useEffect, useRef, useState } from "react";

const History = () => {
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
            className={`text-xl md:text-2xl lg:text-3xl uppercase  font-semibold text-(--secondary-bg) transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Our History
          </h2>
          <div className="flex justify-center">
            <span
              className={`h-1 bg-(--accent-gold) transition-all duration-700 delay-200 ${
                isVisible ? "w-20" : "w-0"
              }`}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Timeline Decoration */}
          <div
            className={`hidden md:block relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="w-48 h-48 rounded-full border-4 border-(--accent-gold) flex items-center justify-center relative">
              <div className="text-center">
                <svg
                  className="w-20 h-20 text-(--accent-gold) mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <p className="text-sm font-medium text-(--secondary-bg)">
                  Building Legacy
                </p>
              </div>
              <div className="absolute -right-4 top-1/2 w-8 h-0.5 bg-(--accent-gold)" />
            </div>
          </div>

          {/* Content */}
          <div
            className={`flex-1 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-(--accent-gold)/20">
              <p className="text-[15px] md:text-[16px] leading-relaxed text-(--secondary-bg) mb-6">
                Established with a vision of value-based education, the academy
                has grown as a trusted institution committed to academic
                excellence, discipline, and character formation, while adapting
                to the needs of the modern era.
              </p>

              {/* Key Milestones */}
              <div className="space-y-4">
                <div
                  className={`flex items-start gap-4 transition-all duration-1000 delay-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                >
                  <div className="shrink-0 w-3 h-3 rounded-full bg-(--accent-gold) mt-2" />
                  <div>
                    <h4 className="font-semibold text-(--accent-gold) mb-1">
                      Foundation
                    </h4>
                    <p className="text-sm text-(--secondary-bg)/80">
                      Established with a clear vision of providing value-based
                      education
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-4 transition-all duration-1000 delay-900 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                >
                  <div className="shrink-0 w-3 h-3 rounded-full bg-(--accent-gold) mt-2" />
                  <div>
                    <h4 className="font-semibold text-(--accent-gold) mb-1">
                      Growth & Excellence
                    </h4>
                    <p className="text-sm text-(--secondary-bg)/80">
                      Evolved into a trusted institution known for academic
                      excellence
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-4 transition-all duration-1000 delay-1100 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                >
                  <div className="shrink-0 w-3 h-3 rounded-full bg-(--accent-gold) mt-2" />
                  <div>
                    <h4 className="font-semibold text-(--accent-gold) mb-1">
                      Modern Adaptation
                    </h4>
                    <p className="text-sm text-(--secondary-bg)/80">
                      Continuously adapting to meet contemporary educational needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;