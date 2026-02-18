"use client";
import React, { useEffect, useState } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen w-screen overflow-hidden bg-[#f5f5f0] flex items-center justify-center px-6">
          <div className="max-w-200 mx-auto text-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-75 rotate-12"
              }`}
            >
              <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 rounded-full bg-[#0d3b2e] flex items-center justify-center">
                <svg
                  className="w-16 h-16 md:w-20 md:h-20 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="flex justify-center mb-6">
                <span
                  className={`h-1 bg-[#d4af37] transition-all duration-700 delay-200 ${
                    isVisible ? "w-24" : "w-0"
                  }`}
                />
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-4 mb-8">
              <h1
                className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0d3b2e] transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Critical Error Occurred
              </h1>
              <p
                className={`text-[14px] md:text-[16px] text-gray-600 max-w-120 mx-auto transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                We apologize for the inconvenience. A critical error has occurred.
                Please try refreshing the page or contact support if the problem
                persists.
              </p>

              {process.env.NODE_ENV === "development" && (
                <details
                  className={`mt-4 text-left max-w-120 mx-auto transition-all duration-1000 delay-600 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <summary className="cursor-pointer text-[14px] text-[#0d3b2e] font-medium mb-2">
                    Error Details (Development Only)
                  </summary>
                  <div className="mt-2 p-4 bg-gray-100 rounded-[5px] text-[12px] text-gray-700 overflow-auto max-h-40">
                    <p className="font-semibold mb-1">Error Message:</p>
                    <p className="mb-2">{error.message}</p>
                    {error.digest && (
                      <>
                        <p className="font-semibold mb-1">Error Digest:</p>
                        <p>{error.digest}</p>
                      </>
                    )}
                  </div>
                </details>
              )}
            </div>

            <div
              className={`flex gap-4 justify-center flex-wrap transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <button
                onClick={reset}
                className="px-8 py-3 rounded-[5px] bg-[#d4af37] text-white font-semibold transition-all hover:bg-[#c19b2e] hover:-translate-y-0.5"
              >
                Try Again
              </button>
              <a
                href="/"
                className="px-8 py-3 rounded-[5px] border-2 border-[#0d3b2e] text-[#0d3b2e] font-semibold no-underline transition-all hover:bg-[#0d3b2e] hover:text-white"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}