"use client";
import React, { useEffect, useRef, useState } from "react";

const ImportantDates = () => {
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

  const dates = [
    {
      id: 1,
      event: "Application Start Date",
      date: "January 15, 2026",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      ),
      status: "active",//"completed"
    },
    {
      id: 2,
      event: "Last Date to Apply",
      date: "March 31, 2026",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      ),
      status: "upcoming",//"active"
    },
    {
      id: 3,
      event: "Hall Ticket Release",
      date: "April 10, 2026",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
        />
      ),
      status: "upcoming",
    },
    {
      id: 4,
      event: "Entrance Examination",
      date: "April 20, 2026",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      ),
      status: "upcoming",
    },
    
    {
      id: 6,
      event: "Counseling & Interview",
      date: "May 10, 2026",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
      status: "upcoming",
    },
    {
      id: 5,
      event: "Result Declaration",
      date: "May 15, 2026",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      ),
      status: "upcoming",
    },
    {
      id: 7,
      event: "Final Admission",
      date: "May 20, 2026",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      ),
      status: "upcoming",
    },
    {
      id: 8,
      event: "Classes Commence",
      date: "June 1, 2026",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      ),
      status: "upcoming",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-300";
      case "active":
        return "bg-(--accent-gold)/20 text-(--primary-color) border-(--accent-gold)";
      case "upcoming":
        return "bg-blue-50 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "active":
        return "Active";
      case "upcoming":
        return "Upcoming";
      default:
        return "";
    }
  };

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
              Important Dates
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
            Keep track of all important dates in the admission process
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-(--accent-gold)/30 hidden md:block" />

          <div className="space-y-8">
            {dates.map((item, index) => (
              <div
                key={item.id}
                className={`relative transition-all w-full duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : index % 2 === 0
                    ? "opacity-0 -translate-x-12"
                    : "opacity-0 translate-x-12"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div
                  className={`flex flex-col md:flex-row  items-start md:items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 md:w-5/12">
                    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-(--accent-gold)">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-lg font-semibold text-(--primary-color)">
                          {item.event}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {getStatusLabel(item.status)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-(--accent-gold)">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-sm font-medium text-gray-600">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center w-2/12">
                    <div className="relative">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                          item.status === "active"
                            ? "bg-(--accent-gold) ring-4 ring-(--accent-gold)/30"
                            : item.status === "completed"
                            ? "bg-green-500"
                            : "bg-(--primary-color)"
                        }`}
                      >
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {item.icon}
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1 w-5/12" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
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
                className="w-6 h-6 text-(--accent-gold) shrink-0 mt-1"
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
                <h4 className="text-lg font-semibold mb-2">Important Note</h4>
                <p className="text-sm opacity-90">
                  All dates are tentative and subject to change. Applicants are
                  advised to regularly check the website or their registered email
                  for any updates. Any changes to the schedule will be notified
                  well in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;