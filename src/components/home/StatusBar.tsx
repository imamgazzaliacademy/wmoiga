"use client";
import React, { useEffect, useRef, useState } from "react";

const StatusBar = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { number: 1200, label: "Students Enrolled", suffix: "+" },
    { number: 30, label: "Expert Faculty", suffix: "+" },
    { number: 25, label: "Years of Excellence", suffix: "+" },
    { number: 300, label: "Gazzali's", suffix: "+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            entry.target.classList.add("active");
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(
          Math.floor(increment * currentStep),
          stat.number
        );

        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = newValue;
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  };

  return (
    <div
      ref={statsRef}
      className="reveal grid grid-cols-2 md:grid-cols-4 gap-8 bg-white px-6 py-12 -mt-12 relative z-10 rounded-(--border-radius) shadow-(--shadow) w-[90%] md:w-[85%] mx-auto opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      style={{
        animation: hasAnimated ? "slideUp 1s ease-out forwards" : "none",
      }}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center transform transition-all duration-500"
          style={{
            animation: hasAnimated
              ? `fadeInScale 0.6s ease-out ${index * 0.1}s forwards`
              : "none",
            opacity: 0,
          }}
        >
          <span className="block text-3xl md:text-4xl font-bold text-(--accent-gold) font-['Playfair_Display']">
            {counts[index].toLocaleString()}
            {stat.suffix}
          </span>
          <span className="text-[0.85rem] text-(--text-muted) font-medium">
            {stat.label}
          </span>
        </div>
      ))}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default StatusBar;