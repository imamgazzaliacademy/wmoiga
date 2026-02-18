"use client";
import React, { useEffect, useRef, useState } from "react";

interface RegistrationData {
  fullName: string;
  batch: string;
  email: string;
  phone: string;
  currentPosition: string;
  organization: string;
  location: string;
  field: string;
  achievements: string;
}

const AlumniRegistration = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [formData, setFormData] = useState<RegistrationData>({
    fullName: "",
    batch: "",
    email: "",
    phone: "",
    currentPosition: "",
    organization: "",
    location: "",
    field: "",
    achievements: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus({
        type: "success",
        message:
          "Registration successful! Thank you for joining the alumni network. We'll be in touch soon.",
      });

      // Reset form
      setFormData({
        fullName: "",
        batch: "",
        email: "",
        phone: "",
        currentPosition: "",
        organization: "",
        location: "",
        field: "",
        achievements: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={sectionRef}
      id="alumni-register"
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
              Alumni Registration
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
            Register to stay connected with the alumni network and share your
            success story
          </p>
        </div>

        {/* Registration Form */}
        <div
          className={`bg-(--secondary-bg) rounded-lg shadow-2xl p-8 md:p-10 transition-all duration-1000 delay-600 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold text-(--primary-color) mb-6 pb-3 border-b-2 border-(--accent-gold)/20">
                Personal Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-(--primary-color) mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors bg-white"
                    placeholder="Your full name"
                  />
                </div>

                {/* Batch */}
                <div>
                  <label
                    htmlFor="batch"
                    className="block text-sm font-semibold text-(--primary-color) mb-2"
                  >
                    Graduation Year <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="batch"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select Year</option>
                    {Array.from({ length: 20 }, (_, i) => 2025 - i).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-(--primary-color) mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-(--primary-color) mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors bg-white"
                    placeholder="+91 123 456 7890"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-(--primary-color) mb-6 pb-3 border-b-2 border-(--accent-gold)/20">
                Professional Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Current Position */}
                <div>
                  <label
                    htmlFor="currentPosition"
                    className="block text-sm font-semibold text-(--primary-color) mb-2"
                  >
                    Current Position <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="currentPosition"
                    name="currentPosition"
                    value={formData.currentPosition}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors bg-white"
                    placeholder="e.g., Senior Manager"
                  />
                </div>

                {/* Organization */}
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-semibold text-(--primary-color) mb-2"
                  >
                    Organization <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors bg-white"
                    placeholder="Company/Institution name"
                  />
                </div>

                {/* Field */}
                <div>
                  <label
                    htmlFor="field"
                    className="block text-sm font-semibold text-(--primary-color) mb-2"
                  >
                    Field/Industry <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="field"
                    name="field"
                    value={formData.field}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select Field</option>
                    <option value="Islamic Studies">Islamic Studies</option>
                    <option value="Education">Education</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Finance">Finance</option>
                    <option value="Humanitarian Work">Humanitarian Work</option>
                    <option value="Religious Leadership">
                      Religious Leadership
                    </option>
                    <option value="Human Rights">Human Rights</option>
                    <option value="Business">Business</option>
                    <option value="Architecture">Architecture</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-semibold text-(--primary-color) mb-2"
                  >
                    Current Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors bg-white"
                    placeholder="City, Country"
                  />
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-(--primary-color) mb-6 pb-3 border-b-2 border-(--accent-gold)/20">
                Share Your Story
              </h3>

              <div>
                <label
                  htmlFor="achievements"
                  className="block text-sm font-semibold text-(--primary-color) mb-2"
                >
                  Notable Achievements or Message (Optional)
                </label>
                <textarea
                  id="achievements"
                  name="achievements"
                  value={formData.achievements}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors resize-none bg-white"
                  placeholder="Share your achievements, message to current students, or how the academy impacted your journey..."
                />
              </div>
            </div>

            {/* Submit Status */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-[5px] ${
                  submitStatus.type === "success"
                    ? "bg-green-50 border border-green-200 text-green-800"
                    : "bg-red-50 border border-red-200 text-red-800"
                }`}
              >
                <div className="flex items-start gap-3">
                  <svg
                    className={`w-5 h-5 mt-0.5 shrink-0 ${
                      submitStatus.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {submitStatus.type === "success" ? (
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
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 rounded-[5px] bg-(--accent-gold) text-white font-semibold transition-all hover:bg-(--accent-light) hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
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
                  Submitting...
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Register as Alumni
                </>
              )}
            </button>

            {/* Privacy Notice */}
            <p className="text-xs text-gray-500 text-center">
              Your information will be used solely for alumni network purposes and
              will not be shared with third parties without your consent.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AlumniRegistration;