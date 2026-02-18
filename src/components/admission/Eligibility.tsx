"use client";
import React, { useEffect, useRef, useState } from "react";

const Eligibility = () => {
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

  const eligibilityCriteria = [
    {
      id: 1,
      class: "School 7th pass, madrasa 5th Pass",
      ageRange: "11 to 14 years",
      requirements: [
        "Completion of previous class from recognized school/madrasa",
        "Basic proficiency in Malayalam or English",
        "Interest in Islamic studies",
      ],
    },
  ];

  const generalRequirements = [
    {
      title: "Age Criteria",
      description: "Students must fall within the specified age range for their class",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      ),
    },
    {
      title: "Academic Record",
      description: "Good academic standing from previous educational institution",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: "Conduct Certificate",
      description: "Certificate of good conduct from previous school/madrasa",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
    },
    {
      title: "Entrance Test",
      description: "Qualifying score in academy entrance examination",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      ),
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
              className={`text-xl md:text-2xl lg:text-3xl uppercase  font-semibold text-(--primary-color) transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Eligibility Criteria
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
            Ensure you meet the following criteria before applying for admission
          </p>
        </div>

        {/* Class-wise Eligibility */}
        <div className="mb-16 space-y-6">
          {eligibilityCriteria.map((criteria, index) => (
            <div
              key={criteria.id}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="bg-(--secondary-bg) rounded-lg p-6 md:p-8 shadow-lg border-l-4 border-(--accent-gold)">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-(--primary-color) mb-2 md:mb-0">
                    {criteria.class}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-(--accent-gold)">
                    <svg
                      className="w-5 h-5 text-(--primary-color)"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm font-semibold text-(--primary-color)">
                      Age: {criteria.ageRange}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {criteria.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-(--accent-gold) mt-0.5 shrink-0"
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
                      <span className="text-[14px] md:text-[15px] text-gray-700">
                        {req}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* General Requirements */}
        <div
          className={`transition-all duration-1000 delay-1200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-(--primary-color) mb-8 text-center">
            General Requirements
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {generalRequirements.map((req, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-(--accent-gold) hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-(--primary-color) flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {req.icon}
                  </svg>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-(--primary-color) mb-2">
                  {req.title}
                </h4>
                <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed">
                  {req.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Note */}
        <div
          className={`mt-12 transition-all duration-1000 delay-1400 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-linear-to-r from-(--primary-color) to-(--primary-color)/90 rounded-lg p-6 md:p-8 text-white relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-7 bg-center bg-repeat bg-size-[400px_400px]"
              style={{ backgroundImage: "url('/vector.png')" }}
            />
            <div className="relative z-10 flex items-start gap-4">
              <svg
                className="w-8 h-8 text-(--accent-gold) shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-2">
                  Important Note
                </h4>
                <p className="text-sm md:text-base opacity-90">
                  Meeting the eligibility criteria does not guarantee admission.
                  Final selection is based on entrance examination performance,
                  interview, and availability of seats. We encourage all eligible
                  students to apply and showcase their potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;