"use client";
import React, { useEffect, useRef, useState } from "react";

interface ManagementMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

const Management = () => {
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

  const members: ManagementMember[] = [
    {
      id: 1,
      name: "Name Here",
      designation: "Director",
      image: "https://placehold.co/400x500/0d3b2e/ffffff?text=Director",
    },
    {
      id: 2,
      name: "Name Here",
      designation: "Principal",
      image: "https://placehold.co/400x500/0d3b2e/ffffff?text=Principal",
    },
    {
      id: 3,
      name: "Name Here",
      designation: "Convener",
      image: "https://placehold.co/400x500/0d3b2e/ffffff?text=Admin+Head",
    },
    {
      id: 4,
      name: "Name Here",
      designation: "Principal",
      image: "https://placehold.co/400x500/0d3b2e/ffffff?text=Principal",
    },
    {
      id: 5,
      name: "Name Here",
      designation: "Convener",
      image: "https://placehold.co/400x500/0d3b2e/ffffff?text=Admin+Head",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="px-6 lg:px-20 py-20 w-screen overflow-hidden bg-white"
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
              Our Management
            </h2>
            <span
              className={`h-1 bg-(--accent-gold) transition-all duration-700 delay-200 ${
                isVisible ? "w-20" : "w-0"
              }`}
            />
          </div>
          <p
            className={`text-[15px] md:text-[16px] text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            The management team provides strategic leadership and ensures the
            institution's mission, values, and educational standards are upheld.
          </p>
        </div>

        {/* Management Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {members.map((member, index) => (
            <div
              key={member.id}
              className={`group transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="relative bg-(--secondary-bg) h-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-(--primary-color) via-transparent to-transparent opacity-60" />
                  
                  {/* Designation Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-4 py-2 bg-(--accent-gold) text-white text-sm font-semibold rounded-full shadow-lg">
                      {member.designation}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-['Playfair_Display'] font-semibold text-(--primary-color) mb-3">
                    {member.name}
                  </h3>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-(--accent-gold)/20 rounded-bl-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;