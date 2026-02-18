"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen w-screen overflow-hidden bg-(--secondary-bg) flex items-center justify-center px-6 relative">
      <div
        className="absolute inset-0 opacity-5 bg-center bg-repeat bg-size-[600px_600px]"
        style={{ backgroundImage: "url('/vector.png')" }}
      ></div>

      <div className="max-w-200 mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-12"
          }`}
        >
          <h1 className="text-[120px] md:text-[180px] lg:text-[220px] font-bold text-(--primary-color) leading-none">
            404
          </h1>
          <div className="flex justify-center mb-6">
            <span
              className={`h-1 bg-(--accent-gold) transition-all duration-700 delay-200 ${
                isVisible ? "w-24" : "w-0"
              }`}
            />
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-(--primary-color) transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Page Not Found
          </h2>
          <p
            className={`text-[14px] md:text-[16px] text-gray-600 max-w-120 mx-auto transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>

        <div
          className={`flex gap-4 justify-center flex-wrap transition-all duration-1000 delay-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/"
            className="px-8 py-3 rounded-[5px] bg-(--accent-gold) text-(--secondary-bg) font-semibold no-underline transition-all hover:bg-(--accent-light) hover:-translate-y-0.5"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-[5px] border-2 border-(--primary-color) text-(--primary-color) font-semibold no-underline transition-all hover:bg-(--primary-color) hover:text-(--secondary-bg)"
          >
            Contact Us
          </Link>
        </div>

        <div
          className={`mt-12 transition-all duration-1000 delay-900 ${
            isVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75"
          }`}
        >
          <svg
            className="w-20 h-20 md:w-24 md:h-24 mx-auto text-(--primary-color) opacity-20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}