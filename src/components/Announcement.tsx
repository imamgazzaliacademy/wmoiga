"use client";
import React from "react";

const Announcement = () => {
  return (
    <div className="h-12 w-screen overflow-hidden px-6 lg:px-20 pointer-events-none bg-(--accent-gold)">
      <div className="max-w-400 mx-auto h-full w-full flex items-center overflow-hidden">
        <div className="animate-scroll-single whitespace-nowrap">
          <p className="font-medium text-[14px] text-(--secondary-bg) inline-block px-6">
            Admissions for 2026 are now open. Apply and confirm your application
            before march 20. for more information contact +91 9207396747
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-single {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-single {
          animation: scroll-single 15s linear infinite;
        }

        .animate-scroll-single:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Announcement;
