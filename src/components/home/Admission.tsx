"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Admission = () => {
  const admissionsRef = useRef<HTMLElement>(null);
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
      { threshold: 0.15 },
    );

    if (admissionsRef.current) {
      observer.observe(admissionsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-20 px-6 lg:px-10 xl:px-20 bg-(--secondary-bg)">
      <section
        id="admissions"
        ref={admissionsRef}
        className="section-padding bg-(--primary-color) relative shadow-lg shadow-black/20 rounded-(--border-radius) overflow-hidden px-8  max-w-400 mx-auto flex flex-col-reverse md:flex-row items-end gap-8"
      >
        <div
          className="absolute inset-0 opacity-7 bg-center bg-repeat  bg-size-[600px_400px]"
          style={{ backgroundImage: "url('/vector2.png')" }}
        ></div>
        {/* Image Section - Left Side */}
        <div
          className={`relative w-full md:w-120 h-120 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}
        >
          <img
            src="/std1.png"
            alt="Students"
            className="w-full h-full object-contain object-bottom"
          />
          {/* Half Rounded Overlay - Pinned to bottom of image */}
          <div className="absolute  -bottom-20 left-20 right-0 h-100 w-80 bg-(--accent-gold) rounded-t-full -z-10"></div>
        </div>

        {/* Content Section - Right Side */}
        <div
          className={`w-full md:w-1/2 py-16 text-white text-center md:text-start transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <h2
            className={`text-3xl md:text-4xl uppercase font-semibold mb-4 text-white transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            Online Admissions Closed!
          </h2>
          <p
            className={`md:max-w-150 mb-10 opacity-90 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-90 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Online admissions are now closed for the 2026 academic year. For
            further inquiries, please contact +91 9745222294 or visit our
            office.
          </p>
          <div
            className={`flex gap-4 justify-center md:justify-start flex-wrap transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* <Link
              href="#"
              className="px-9 py-4 rounded bg-(--accent-gold) text-white font-semibold no-underline transition-all hover:bg-(--accent-light) hover:-translate-y-0.5"
            >
              Download Prospectus
            </Link>
            <Link
              href="/admission"
              className="px-9 py-4 rounded bg-white text-(--primary-color) font-semibold no-underline transition-all hover:bg-white/90"
            >
              Online Application
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
