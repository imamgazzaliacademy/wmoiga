"use client";
import React, { useEffect, useRef, useState } from "react";

interface Alumni {
  id: number;
  name: string;
  batch: string;
  currentPosition: string;
  organization: string;
  location: string;
  field: string;
  email: string;
  linkedin?: string;
}

const AllAlumni = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBatch, setFilterBatch] = useState("all");
  const [filterField, setFilterField] = useState("all");

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

  const allAlumni: Alumni[] = [
    {
      id: 1,
      name: "Dr. Ahmed Rahman",
      batch: "2010",
      currentPosition: "Senior Research Scholar",
      organization: "Oxford University",
      location: "Oxford, UK",
      field: "Islamic Studies",
      email: "ahmed.rahman@example.com",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Fatima Al-Hassan",
      batch: "2012",
      currentPosition: "Community Development Director",
      organization: "Islamic Relief Worldwide",
      location: "Birmingham, UK",
      field: "Humanitarian Work",
      email: "fatima.hassan@example.com",
      linkedin: "#",
    },
    {
      id: 3,
      name: "Ibrahim Malik",
      batch: "2008",
      currentPosition: "Founder & CEO",
      organization: "Halal Tech Solutions",
      location: "Dubai, UAE",
      field: "Technology",
      email: "ibrahim.malik@example.com",
    },
    {
      id: 4,
      name: "Aisha Begum",
      batch: "2015",
      currentPosition: "Islamic Education Coordinator",
      organization: "Malaysian Ministry of Education",
      location: "Kuala Lumpur, Malaysia",
      field: "Education",
      email: "aisha.begum@example.com",
    },
    {
      id: 5,
      name: "Muhammad Yusuf",
      batch: "2011",
      currentPosition: "Imam & Community Leader",
      organization: "Central Mosque of Toronto",
      location: "Toronto, Canada",
      field: "Religious Leadership",
      email: "muhammad.yusuf@example.com",
    },
    {
      id: 6,
      name: "Zainab Khan",
      batch: "2013",
      currentPosition: "Human Rights Advocate",
      organization: "United Nations",
      location: "Geneva, Switzerland",
      field: "Human Rights",
      email: "zainab.khan@example.com",
      linkedin: "#",
    },
    {
      id: 7,
      name: "Omar Farooq",
      batch: "2014",
      currentPosition: "Software Engineer",
      organization: "Microsoft",
      location: "Seattle, USA",
      field: "Technology",
      email: "omar.farooq@example.com",
    },
    {
      id: 8,
      name: "Maryam Siddiqui",
      batch: "2016",
      currentPosition: "Medical Doctor",
      organization: "Royal London Hospital",
      location: "London, UK",
      field: "Healthcare",
      email: "maryam.siddiqui@example.com",
    },
    {
      id: 9,
      name: "Hassan Abdullah",
      batch: "2009",
      currentPosition: "Islamic Finance Consultant",
      organization: "HSBC Amanah",
      location: "Riyadh, Saudi Arabia",
      field: "Finance",
      email: "hassan.abdullah@example.com",
    },
    {
      id: 10,
      name: "Nadia Ahmed",
      batch: "2017",
      currentPosition: "Research Assistant",
      organization: "Cambridge University",
      location: "Cambridge, UK",
      field: "Islamic Studies",
      email: "nadia.ahmed@example.com",
    },
    {
      id: 11,
      name: "Khalid Mansoor",
      batch: "2010",
      currentPosition: "Architect",
      organization: "Al-Furqan Design Studio",
      location: "Istanbul, Turkey",
      field: "Architecture",
      email: "khalid.mansoor@example.com",
    },
    {
      id: 12,
      name: "Amina Qureshi",
      batch: "2015",
      currentPosition: "Teacher",
      organization: "International Islamic School",
      location: "Doha, Qatar",
      field: "Education",
      email: "amina.qureshi@example.com",
    },
  ];

  // Get unique batches and fields for filters
  const batches = [...new Set(allAlumni.map((a) => a.batch))].sort(
    (a, b) => parseInt(b) - parseInt(a)
  );
  const fields = [...new Set(allAlumni.map((a) => a.field))].sort();

  // Filter alumni based on search and filters
  const filteredAlumni = allAlumni.filter((alumni) => {
    const matchesSearch =
      alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesBatch = filterBatch === "all" || alumni.batch === filterBatch;
    const matchesField = filterField === "all" || alumni.field === filterField;

    return matchesSearch && matchesBatch && matchesField;
  });

  return (
    <div
      ref={sectionRef}
      className="px-6 lg:px-20 py-20 w-screen overflow-hidden bg-white"
    >
      <div className="max-w-400 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex flex-col gap-2 items-center mb-6">
            <h2
              className={`text-xl md:text-2xl lg:text-3xl uppercase  font-semibold text-(--primary-color) transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              All Alumni
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
            Connect with our alumni community across the globe
          </p>
        </div>

        {/* Search and Filter Section */}
        <div
          className={`bg-(--secondary-bg) rounded-lg p-6 mb-12 shadow-lg transition-all duration-1000 delay-600 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-3 lg:col-span-1">
              <label
                htmlFor="search"
                className="block text-sm font-semibold text-(--primary-color) mb-2"
              >
                Search Alumni
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, organization, or location..."
                  className="w-full pl-10 pr-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Filter by Batch */}
            <div>
              <label
                htmlFor="batch"
                className="block text-sm font-semibold text-(--primary-color) mb-2"
              >
                Filter by Batch
              </label>
              <select
                id="batch"
                value={filterBatch}
                onChange={(e) => setFilterBatch(e.target.value)}
                className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
              >
                <option value="all">All Batches</option>
                {batches.map((batch) => (
                  <option key={batch} value={batch}>
                    Class of {batch}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter by Field */}
            <div>
              <label
                htmlFor="field"
                className="block text-sm font-semibold text-(--primary-color) mb-2"
              >
                Filter by Field
              </label>
              <select
                id="field"
                value={filterField}
                onChange={(e) => setFilterField(e.target.value)}
                className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
              >
                <option value="all">All Fields</option>
                {fields.map((field) => (
                  <option key={field} value={field}>
                    {field}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredAlumni.length} of {allAlumni.length} alumni
          </div>
        </div>

        {/* Alumni Grid */}
        {filteredAlumni.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlumni.map((alumni, index) => (
              <div
                key={alumni.id}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${800 + index * 50}ms` }}
              >
                <div className="bg-(--secondary-bg) rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col border-l-4 border-(--accent-gold)">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-(--primary-color) mb-1">
                        {alumni.name}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-(--accent-gold)/20 text-(--primary-color) text-xs font-semibold rounded-full">
                        {alumni.batch} Batch
                      </span>
                    </div>
                  </div>

                  {/* Current Position */}
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-(--primary-color)">
                      {alumni.currentPosition}
                    </p>
                    <p className="text-xs text-gray-600">{alumni.organization}</p>
                  </div>

                  {/* Field Tag */}
                  <div className="flex items-center gap-2 mb-3">
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
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-xs font-medium text-gray-600">
                      {alumni.field}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 mb-4">
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
                    <span className="text-xs text-gray-600">{alumni.location}</span>
                  </div>

                  {/* Contact Buttons */}
                  <div className="mt-auto pt-4 border-t border-gray-200 flex gap-2">
                    <a
                      href={`mailto:${alumni.email}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-(--primary-color) text-white rounded-[5px] text-xs font-semibold hover:bg-(--primary-color)/90 transition-all"
                    >
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Email
                    </a>
                    {alumni.linkedin && (
                      <a
                        href={alumni.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border-2 border-(--primary-color) text-(--primary-color) rounded-[5px] text-xs font-semibold hover:bg-(--primary-color) hover:text-white transition-all flex items-center justify-center"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <svg
              className="w-16 h-16 text-gray-300 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-500 text-lg mb-2">No alumni found</p>
            <p className="text-gray-400 text-sm">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllAlumni;