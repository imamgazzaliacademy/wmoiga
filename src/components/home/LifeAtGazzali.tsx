"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const LifeAtGazzali = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter()

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

  return (
    <div
      ref={sectionRef}
      className="px-6 lg:px-20 py-20 w-screen overflow-hidden bg-(--secondary-bg)"
    >
      <div className="lg:max-w-400 mx-auto ">
        <div className="flex flex-col-reverse gap-6 lg:flex-row lg:justify-between">
          <div
            className={`space-y-4 lg:w-1/2 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="flex flex-col gap-2 mb-6">
              <h2 className="text-2xl md:text-3xl pointer-events-none uppercase font-semibold text-(--primary-color)">
                Life At Gazzali
              </h2>
              <span
                className={`w-18 h-1 bg-(--accent-gold) transition-all duration-700 delay-200 ${
                  isVisible ? "w-18" : "w-0"
                }`}
              />
            </div>
            <p
              className={`font-medium text-[14px] md:text-[15px] transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >{`Life at Imam Gazzali Academy offers a unique and enriching environment where learning goes beyond classrooms. By becoming part of the academy, students enter a diverse and vibrant community united by shared values and a commitment to the betterment of the Ummah. Learners from different regions come together, crossing linguistic and cultural boundaries, while striving for spiritual growth, academic excellence, and personal development. The academy is firmly rooted in three core values: Ta'leem (Education), Tarbiyah (Character Building), and Da'wa (Service and Outreach).`}</p>
            <button
            onClick={()=>router.push('/about/#lifeAtGazzali')}
              className={`px-6 h-10 rounded-[5px] bg-(--accent-gold) font-medium text-[16px] text-(--secondary-bg) transition-all hover:bg-(--accent-light) hover:-translate-y-0.5 duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Learn More
            </button>
          </div>
          <div
            className={`w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg shadow-black/20 max-h-75 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <img
              src="/photos/1.png"
              alt=""
              className="h-full w-full object-cover transition-all ease-linear duration-300 hover:scale-[1.05]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeAtGazzali;
