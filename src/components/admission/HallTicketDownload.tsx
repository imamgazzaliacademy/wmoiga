"use client";
import React, { useEffect, useRef, useState } from "react";

const HallTicketDownload = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

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

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    setDownloadStatus({ type: null, message: "" });

    try {
      // Simulate API call to verify registration number
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Check if registration number exists (mock validation)
      const validPattern = /^ADM2026\d{3}$/;
      if (!validPattern.test(registrationNumber)) {
        setDownloadStatus({
          type: "error",
          message:
            "Invalid registration number. Please check and try again. Format: ADM2026XXX",
        });
        setIsDownloading(false);
        return;
      }

      // Generate and download hall ticket (mock)
      // In production, this would fetch the actual PDF from your server
      setDownloadStatus({
        type: "success",
        message: "Hall ticket downloaded successfully! Check your downloads folder.",
      });

      // Simulate PDF download
      // In production, replace this with actual PDF generation/download
      const link = document.createElement("a");
      link.href = "#"; // Replace with actual PDF URL
      link.download = `HallTicket_${registrationNumber}.pdf`;
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);

      setRegistrationNumber("");
    } catch (error) {
      setDownloadStatus({
        type: "error",
        message:
          "Failed to download hall ticket. Please try again or contact support.",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div
      ref={sectionRef}
      className="px-6 lg:px-20 py-20 w-screen overflow-hidden bg-white"
    >
      <div className="max-w-300 mx-auto">
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
              Download Hall Ticket
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
            Enter your registration number to download your entrance examination
            hall ticket
          </p>
        </div>

        {/* Download Card */}
        <div
          className={`max-w-2xl mx-auto transition-all duration-1000 delay-600 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="bg-linear-to-br from-(--secondary-bg) to-white rounded-lg shadow-2xl p-8 md:p-10 border-2 border-(--accent-gold)/20">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-(--primary-color) to-(--primary-color)/80 flex items-center justify-center shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </div>
            </div>

            <form onSubmit={handleDownload} className="space-y-6">
              {/* Registration Number Input */}
              <div>
                <label
                  htmlFor="registrationNumber"
                  className="block text-sm font-semibold text-(--primary-color) mb-2"
                >
                  Registration Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="registrationNumber"
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value.toUpperCase())}
                  required
                  placeholder="e.g., ADM2026001"
                  className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors text-center text-lg font-semibold tracking-wider"
                  maxLength={10}
                />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Enter the registration number received after application submission
                </p>
              </div>

              {/* Status Message */}
              {downloadStatus.type && (
                <div
                  className={`p-4 rounded-[5px] ${
                    downloadStatus.type === "success"
                      ? "bg-green-50 border border-green-200 text-green-800"
                      : "bg-red-50 border border-red-200 text-red-800"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 shrink-0 ${
                        downloadStatus.type === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {downloadStatus.type === "success" ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      )}
                    </svg>
                    <p className="text-sm font-medium">{downloadStatus.message}</p>
                  </div>
                </div>
              )}

              {/* Download Button */}
              <button
                type="submit"
                disabled={isDownloading || !registrationNumber}
                className="w-full px-8 py-4 bg-(--accent-gold) text-white rounded-[5px] font-semibold transition-all hover:bg-(--accent-light) hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
              >
                {isDownloading ? (
                  <>
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Downloading...
                  </>
                ) : (
                  <>
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
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download Hall Ticket
                  </>
                )}
              </button>
            </form>

            {/* Instructions */}
            <div className="mt-8 pt-6 border-t-2 border-gray-200">
              <h4 className="text-sm font-semibold text-(--primary-color) mb-3">
                Important Instructions:
              </h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-(--accent-gold) mt-0.5 shrink-0"
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
                  Download and print your hall ticket before the exam date
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-(--accent-gold) mt-0.5 shrink-0"
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
                  Bring the printed hall ticket along with a valid photo ID
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-(--accent-gold) mt-0.5 shrink-0"
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
                  Verify all details on the hall ticket before the exam
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-(--accent-gold) mt-0.5 shrink-0"
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
                  Contact admissions office if you face any issues
                </li>
              </ul>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Having trouble downloading your hall ticket?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`tel:+${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 px-6 py-2 border-2 border-(--primary-color) text-(--primary-color) rounded-[5px] font-semibold text-sm hover:bg-(--primary-color) hover:text-white transition-all"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Support
              </a>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ID}`}
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-2 border-2 border-(--primary-color) text-(--primary-color) rounded-[5px] font-semibold text-sm hover:bg-(--primary-color) hover:text-white transition-all"
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
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallTicketDownload;