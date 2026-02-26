"use client";
import React, { useEffect, useRef, useState } from "react";
import apiClient from "@/services/api";
import { toast } from "react-toastify";

const ImportantDates = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [dates, setDates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const response = await apiClient.get('/get_important_dates');
        if (response.data.success) {
          setDates(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch important dates", error);
        toast.error("Failed to load important dates.");
      } finally {
        setLoading(false);
      }
    };
    fetchDates();
  }, []);

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

  if (!loading && dates.length <= 0) return null

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
              className={`text-xl md:text-2xl lg:text-3xl uppercase  font-semibold text-(--primary-color) transition-all duration-1000 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
                }`}
            >
              Important Dates
            </h2>
            <span
              className={`h-1 bg-(--accent-gold) transition-all duration-700 delay-200 ${isVisible ? "w-20" : "w-0"
                }`}
            />
          </div>
          <p
            className={`text-[15px] md:text-[16px] text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${isVisible
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
            {loading ? (
              [1, 2, 3].map((n, index) => (
                <div key={n} className={`relative transition-all w-full duration-1000 ${isVisible ? "opacity-100 translate-x-0" : index % 2 === 0 ? "opacity-0 -translate-x-12" : "opacity-0 translate-x-12"}`}>
                  <div className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="flex-1 md:w-5/12">
                      <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-gray-300 animate-pulse">
                        <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-2/12">
                      <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse shadow-lg"></div>
                    </div>
                    <div className="hidden md:block flex-1 w-5/12" />
                  </div>
                </div>
              ))
            ) : dates.map((item, index) => (
              <div
                key={item.id}
                className={`relative transition-all w-full duration-1000 ${isVisible
                  ? "opacity-100 translate-x-0"
                  : index % 2 === 0
                    ? "opacity-0 -translate-x-12"
                    : "opacity-0 translate-x-12"
                  }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div
                  className={`flex flex-col md:flex-row  items-start md:items-center gap-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 md:w-5/12">
                    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-(--accent-gold)">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-lg font-semibold text-(--primary-color)">
                          {item.event_name}
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
                          {item.event_date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center w-2/12">
                    <div className="relative">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${item.status === "active"
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
                          {item.icon ? item.icon : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />}
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
          className={`mt-12 transition-all duration-1000 delay-1400 ${isVisible
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