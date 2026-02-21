"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative px-6 py-32 min-h-[60vh] bg-cover bg-center text-white flex flex-col justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(13, 59, 46, 0.7), rgba(13, 59, 46, 0.7)), url('/photos/2.JPG')`,
      }}
    >
      {/* Breadcrumb */}
      <div
        className={`absolute bottom-8 left-6 md:left-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        <nav className="flex items-center gap-2 text-sm md:text-base">
          <Link
            href="/"
            className="text-(--secondary-bg) hover:text-(--accent-gold) transition-colors flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </Link>
          <span className="text-(--secondary-bg)/60">/</span>
          <span className="text-(--accent-gold) font-medium">About</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl text-center z-10">
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold mb-4">
            About Us
          </h1>
          <div className="flex justify-center mb-6">
            <span
              className={`h-1 bg-(--accent-gold) transition-all duration-700 delay-500 ${
                isVisible ? "w-24" : "w-0"
              }`}
            />
          </div>
          <p
            className={`text-lg md:text-xl opacity-90 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-90 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Nurturing minds, building character, and fostering excellence through
            the harmonious integration of faith and knowledge
          </p>
        </div>
      </div>

      {/* Decorative Bottom Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-linear-to-r from-transparent via-(--accent-gold) to-transparent opacity-50" />
    </section>
  );
};

export default AboutHero;