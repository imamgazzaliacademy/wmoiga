"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import apiClient from "@/services/api";
import { toast } from "react-toastify";

interface AlumniProfile {
  id: number;
  name: string;
  batch: string;
  currentPosition: string;
  organization: string;
  image: string;
  achievement: string;
  location: string;
  field: string;
}

const FeaturedAlumni = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [featuredAlumni, setFeaturedAlumni] = useState<AlumniProfile[]>([]);
  const [loading, setLoading] = useState(true);

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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const response = await apiClient.get('/get_featured_alumni');
        if (response.data.success) {
          // Normalize the data format from backend if needed
          const backendAlumni = response.data.data.map((item: any) => ({
            ...item,
            image: item.photoUrl || item.photo,
            currentPosition: item.profession, // map assuming backend uses 'profession'
            field: item.field || 'General',
            location: item.location || 'Unknown',
            achievement: item.achievement || 'Notable Alumnus',
            organization: item.organization || '',
          }));
          setFeaturedAlumni(backendAlumni);
        }
      } catch (error) {
        console.error("Failed to fetch featured alumni", error);
        toast.error("Failed to load featured alumni data.");
      } finally {
        setLoading(false);
      }
    };
    fetchAlumni();
  }, []);

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
              Successful Alumni
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
            Celebrating the remarkable achievements of our distinguished alumni
            who are making a global impact
          </p>
        </div>

        {/* Featured Alumni Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
          {loading ? (
            [1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="bg-white rounded-lg overflow-hidden shadow-lg h-[450px] animate-pulse flex flex-col">
                <div className="h-80 bg-gray-300 w-full"></div>
                <div className="p-6 flex-1 flex flex-col gap-3">
                  <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>
              </div>
            ))
          ) : (
            featuredAlumni.map((alumni, index) => (
              <div
                key={alumni.id}
                className={`group transition-all duration-1000 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
                  }`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Batch Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-(--accent-gold) text-white text-xs font-semibold rounded-full shadow-lg">
                        {alumni.batch}
                      </span>
                    </div>

                    {/* Name & Position Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {alumni.name}
                      </h3>
                      <p className="text-sm text-(--accent-gold) font-medium mb-1">
                        {alumni.currentPosition}
                      </p>
                      <p className="text-xs text-white/80">{alumni.organization}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Field Tag */}
                    <div className="inline-flex items-center gap-2 mb-4 text-xs">
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
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="font-medium text-(--primary-color)">
                        {alumni.field}
                      </span>
                    </div>

                    {/* Achievement */}
                    <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed">
                      {alumni.achievement}
                    </p>


                    {/* Location */}
                    <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                      <svg
                        className="w-4 h-4 text-(--accent-gold)"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{alumni.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1400 ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
            }`}
        >
          <div className="bg-linear-to-r from-(--primary-color) to-(--primary-color)/90 rounded-lg p-8 md:p-10 text-white relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-5 bg-center bg-repeat bg-size-[400px_400px]"
              style={{ backgroundImage: "url('/vector.png')" }}
            />
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Join Our Alumni Network
              </h3>
              <p className="text-[15px] md:text-[16px] opacity-90 mb-6 max-w-2xl mx-auto">
                Are you an alumnus of Imam Gazzali Academy? Connect with fellow
                graduates and share your success story with our community.
              </p>
              <button onClick={() => router.push("/alumni#alumni-register")} className="px-8 py-3 bg-(--accent-gold) text-white rounded-[5px] font-semibold transition-all hover:bg-(--accent-light) hover:-translate-y-0.5">
                Register as Alumni
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAlumni;