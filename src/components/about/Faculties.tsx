"use client";
import React, { useEffect, useRef, useState } from "react";

interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  subject: string;
  image: string;
  bio: string;
}

const Faculties = () => {
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

  const faculties: FacultyMember[] = [
    {
      id: 1,
      name: "Name Here",
      designation: "Senior Faculty",
      subject: "Islamic Studies",
      image: "https://placehold.co/400x500/0d3b2e/ffffff?text=Faculty+1",
      bio: "Specializes in Islamic studies with a focus on teaching, guidance, and character development.",
    },
    {
      id: 2,
      name: "Name Here",
      designation: "Faculty",
      subject: "Arabic Language",
      image: "https://placehold.co/400x500/0d3b2e/ffffff?text=Faculty+2",
      bio: "Experienced in Arabic language instruction and student mentorship.",
    },
    {
      id: 3,
      name: "Name Here",
      designation: "Faculty",
      subject: "General Studies",
      image: "https://placehold.co/400x500/0d3b2e/ffffff?text=Faculty+3",
      bio: "Focuses on delivering academic subjects with clarity and student engagement.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="px-6 lg:px-20 py-20 w-screen overflow-hidden bg-(--secondary-bg)"
    >
      <div className="max-w-400 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex flex-col gap-2 items-center mb-6">
            <h2
              className={`text-xl md:text-2xl lg:text-3xl uppercase  font-semibold text-(--primary-color) transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Our Faculties
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
            Our faculty members are dedicated educators committed to academic
            excellence and student mentorship.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculties.map((faculty, index) => (
            <div
              key={faculty.id}
              className={`group transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Subject Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                      <svg
                        className="w-4 h-4 text-(--primary-color)"
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
                      <span className="text-xs font-semibold text-(--primary-color)">
                        {faculty.subject}
                      </span>
                    </div>
                  </div>

                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-['Playfair_Display'] font-semibold text-white mb-1">
                      {faculty.name}
                    </h3>
                    <p className="text-sm text-(--accent-gold) font-medium">
                      {faculty.designation}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed flex-1">
                    {faculty.bio}
                  </p>

                  {/* Decorative Bottom Border */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-(--primary-color)">
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-medium">Dedicated Educator</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-(--accent-gold)/10 rounded-br-full -z-10" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1400 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-linear-to-r from-(--primary-color)/5 to-(--accent-gold)/5 rounded-lg p-8 border border-(--primary-color)/10">
            <h3 className="text-lg md:text-xl font-semibold text-(--primary-color) mb-3">
              Join Our Academic Community
            </h3>
            <p className="text-[14px] md:text-[15px] text-gray-600 mb-6 max-w-2xl mx-auto">
              Our experienced faculty members are committed to nurturing the next
              generation of leaders, scholars, and responsible citizens.
            </p>
            <button className="px-8 py-3 rounded-[5px] bg-(--accent-gold) text-white font-semibold transition-all hover:bg-(--accent-light) hover:-translate-y-0.5">
              Learn More About Admissions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculties;