"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

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

  const featuredAlumni: AlumniProfile[] = [
    {
      id: 1,
      name: "Dr. Ahmed Rahman",
      batch: "2010 Batch",
      currentPosition: "Senior Research Scholar",
      organization: "Oxford University",
      image: "https://placehold.co/400x500/0d3b2e/ffffff?text=Dr.+Ahmed",
      achievement:
        "Published over 20 research papers in Islamic jurisprudence and contributed to interfaith dialogue initiatives across Europe.",
      location: "Oxford, United Kingdom",
      field: "Islamic Studies & Research",
    },
    {
      id: 2,
      name: "Hassan",
      batch: "2012 Batch",
      currentPosition: "Community Development Director",
      organization: "Islamic Relief Worldwide",
      image: "https://placehold.co/400x500/0d3b2e/ffffff?text=Fatima",
      achievement:
        "Led humanitarian projects across 15 countries, impacting over 100,000 lives through education and healthcare initiatives.",
      location: "Birmingham, United Kingdom",
      field: "Humanitarian Work",
    },
    {
      id: 3,
      name: "Ibrahim Malik",
      batch: "2008 Batch",
      currentPosition: "Founder & CEO",
      organization: "Halal Tech Solutions",
      image: "https://placehold.co/400x500/0d3b2e/ffffff?text=Ibrahim",
      achievement:
        "Built a successful tech company providing Sharia-compliant financial solutions, serving over 500,000 users globally.",
      location: "Dubai, UAE",
      field: "Technology & Finance",
    },
    {
      id: 4,
      name: "Rahman",
      batch: "2015 Batch",
      currentPosition: "Islamic Education Coordinator",
      organization: "Malaysian Ministry of Education",
      image: "https://placehold.co/400x500/0d3b2e/ffffff?text=Aisha",
      achievement:
        "Developed innovative Islamic curriculum adopted by over 200 schools, integrating traditional values with contemporary pedagogy.",
      location: "Kuala Lumpur, Malaysia",
      field: "Education & Curriculum Development",
    },
    {
      id: 5,
      name: "Muhammad Yusuf",
      batch: "2011 Batch",
      currentPosition: "Imam & Community Leader",
      organization: "Central Mosque of Toronto",
      image: "https://placehold.co/400x500/0d3b2e/ffffff?text=Muhammad",
      achievement:
        "Established youth mentorship programs and interfaith initiatives, fostering harmony and understanding in diverse communities.",
      location: "Toronto, Canada",
      field: "Community Leadership",
    },
    {
      id: 6,
      name: "Zainab Khan",
      batch: "2013 Batch",
      currentPosition: "Human Rights Advocate",
      organization: "United Nations",
      image: "https://placehold.co/400x500/0d3b2e/ffffff?text=Zainab",
      achievement:
        "Works on refugee rights and women's empowerment programs, advocating for vulnerable communities across Asia and Africa.",
      location: "Geneva, Switzerland",
      field: "Human Rights & Advocacy",
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
              Successful Alumni
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
            Celebrating the remarkable achievements of our distinguished alumni
            who are making a global impact
          </p>
        </div>

        {/* Featured Alumni Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
          {featuredAlumni.map((alumni, index) => (
            <div
              key={alumni.id}
              className={`group transition-all duration-1000 ${
                isVisible
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
              <button onClick={()=>router.push("/alumni#alumni-register")} className="px-8 py-3 bg-(--accent-gold) text-white rounded-[5px] font-semibold transition-all hover:bg-(--accent-light) hover:-translate-y-0.5">
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