"use client";
import React, { useEffect, useRef, useState } from "react";

const LocationMap = () => {
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
      <div className="max-w-400 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex flex-col gap-2 items-center mb-6">
            <h2
              className={`text-xl md:text-2xl lg:text-3xl uppercase font-semibold text-(--primary-color) transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Find Us
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
            Visit our campus and experience the Imam Gazzali Academy environment
            firsthand
          </p>
        </div>

        {/* Map and Directions Container */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl h-100 md:h-125 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.102416943055!2d76.03998757536884!3d11.757835240324845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5dfa63aa1a9dd%3A0xf584cf277f412bde!2sImam%20Gazzali%20Academy%2C%20Koolivayal!5e0!3m2!1sen!2sin!4v1770227268960!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Imam Gazzali Academy Location"
              />

              {/* Map Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-(--primary-color) flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
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
                  </div>
                  <div>
                    <h4 className="font-semibold text-(--primary-color) text-sm mb-1">
                      WMO Imam Gazzali Academy
                    </h4>
                    <p className="text-xs text-gray-600">
                      Koolivayal, Wayanad, Kerala - 670721
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Directions and Info */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            {/* Get Directions Card */}
            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-(--accent-gold)">
              <h3 className="text-lg font-semibold text-(--primary-color) mb-4">
                Get Directions
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Navigate to our campus using your preferred map application
              </p>
              <a
                href="https://www.google.com/maps/place/Imam+Gazzali+Academy,+Koolivayal/@11.7578352,76.0399876,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba5dfa63aa1a9dd:0xf584cf277f412bde!8m2!3d11.75783!4d76.0425625!16s%2Fg%2F1tkb3k0g?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-(--accent-gold) text-white rounded-[5px] font-semibold text-sm transition-all hover:bg-(--accent-light) hover:-translate-y-0.5 w-full justify-center"
              >
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
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                Open in Google Maps
              </a>
            </div>

            {/* Transportation Options */}
            <div className="bg-(--secondary-bg) rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-(--primary-color) mb-4">
                How to Reach
              </h3>
              <div className="space-y-4">
                {/* By Air */}
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-(--accent-gold) mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-sm text-(--primary-color) mb-1">
                      By Air
                    </h4>
                    <p className="text-xs text-gray-600">
                      {
                        "Calicut International Airport - 101 km (2 hr 48 min drive)"
                      }
                    </p>
                    <p className="text-xs text-gray-600">
                      {
                        "Kannur International Airport - 74 km (1 hr 56 min drive)"
                      }
                    </p>
                  </div>
                </div>

                {/* By Train */}
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-(--accent-gold) mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-sm text-(--primary-color) mb-1">
                      By Train
                    </h4>
                    <p className="text-xs text-gray-600">
                      {"Kozhikode Railway Station - 96 km (2 hr 36 min drive)"}
                    </p>
                    <p className="text-xs text-gray-600">
                      {"Kannur Railway Station - 98 km (2 hr 29 min drive)"}
                    </p>
                  </div>
                </div>

                {/* By Road */}
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-(--accent-gold) mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-sm text-(--primary-color) mb-1">
                      By Road
                    </h4>
                    <p className="text-xs text-gray-600">
                      Well connected by state and national highways
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Us */}
            {/* <div className="bg-linear-to-br from-(--primary-color) to-(--primary-color)/90 rounded-lg p-6 text-white shadow-lg">
              <h3 className="text-lg font-semibold mb-3">Plan Your Visit</h3>
              <p className="text-sm opacity-90 mb-4">
                Schedule a campus tour to explore our facilities and meet our
                team.
              </p>
              <button className="w-full px-4 py-2 bg-white text-(--primary-color) rounded-[5px] font-semibold text-sm transition-all hover:bg-(--secondary-bg)">
                Schedule Campus Tour
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
