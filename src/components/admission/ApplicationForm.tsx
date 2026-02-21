"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface FormData {
  // Personal Information
  fullName: string;
  fatherName: string;
  motherName: string;
  age: string;
  dateOfBirth: string;
  gender: string;

  // Contact Information
  email: string;
  contactNumber: string;
  whatsappNumber: string;
  houseName: string;
  place: string;
  postOffice: string;
  district: string;
  state: string;
  nationality: string;
  pincode: string;

  // Academic Information
  previousSchool: string;
  previousMadrasa: string;
  previousSchoolClass: string;
  previousMadrasaClass: string;

  // Guardian Information
  guardianName: string;
  guardianRelation: string;
  guardianContact: string;

  // Additional
  medicalConditions: string;
}

const ApplicationForm = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // File uploads
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [aadhaarFile, setAadhaarFile] = useState<File | null>(null);
  const [tcFile, setTcFile] = useState<File | null>(null);
  const [certificateFile, setCertificateFile] = useState<File | null>(null);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    fatherName: "",
    motherName: "",
    age: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    contactNumber: "",
    place: "",
    houseName: "",
    nationality: "",
    district: "",
    postOffice: "",
    state: "",
    pincode: "",
    previousSchool: "",
    previousMadrasaClass: "",
    previousSchoolClass: "",
    previousMadrasa: "",
    guardianName: "",
    guardianRelation: "",
    guardianContact: "",
    medicalConditions: "",
    whatsappNumber: "",
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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert("Photo size should be less than 2MB");
        return;
      }

      // Check file type
      if (!file.type.startsWith("image/")) {
        alert("Please upload an image file");
        return;
      }

      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "aadhaar" | "tc" | "certificate",
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size should be less than 5MB");
        return;
      }

      if (type === "aadhaar") setAadhaarFile(file);
      if (type === "tc") setTcFile(file);
      if (type === "certificate") setCertificateFile(file);
    }
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would normally send the form data and files to your backend
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      if (photoFile) formDataToSend.append("photo", photoFile);
      if (aadhaarFile) formDataToSend.append("aadhaar", aadhaarFile);
      if (tcFile) formDataToSend.append("tc", tcFile);
      if (certificateFile)
        formDataToSend.append("certificate", certificateFile);

      setSubmitStatus({
        type: "success",
        message:
          "Application submitted successfully! Your registration number is #ADM2026001. Please save it for future reference.",
      });

      // Reset form
      setFormData({
        fullName: "",
        fatherName: "",
        motherName: "",
        age: "",
        dateOfBirth: "",
        gender: "",
        email: "",
        contactNumber: "",
        place: "",
        houseName: "",
        nationality: "",
        district: "",
        postOffice: "",
        state: "",
        pincode: "",
        previousSchool: "",
        previousSchoolClass: "",
        previousMadrasaClass: "",
        previousMadrasa: "",
        guardianName: "",
        guardianRelation: "",
        guardianContact: "",
        medicalConditions: "",
        whatsappNumber: "",
      });
      setPhotoFile(null);
      setPhotoPreview("");
      setAadhaarFile(null);
      setTcFile(null);
      setCertificateFile(null);
      setCurrentStep(1);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or contact admissions office.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    "Personal Details",
    "Contact & Address",
    "Academic Info",
    "Documents",
  ];

  return (
    <div
      ref={sectionRef}
      id="application-form"
      className="px-6 lg:px-20 py-20 w-screen overflow-hidden bg-(--secondary-bg)"
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
              Application Form
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
            Fill out the form below to apply for admission. All fields marked
            with * are required.
          </p>
        </div>

        {/* Progress Indicator */}
        <div
          className={`mb-12 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      currentStep > index + 1
                        ? "bg-(--accent-gold) text-white"
                        : currentStep === index + 1
                          ? "bg-(--primary-color) text-white ring-4 ring-(--accent-gold)/30"
                          : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {currentStep > index + 1 ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className="text-xs mt-2 font-medium text-center hidden sm:block">
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 transition-all duration-300 ${
                      currentStep > index + 1
                        ? "bg-(--accent-gold)"
                        : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div
          className={`bg-white rounded-lg shadow-2xl p-8 md:p-10 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-(--primary-color) mb-6 pb-3 border-b-2 border-(--accent-gold)/20">
                  Personal Information
                </h3>

                {/* Photo Upload */}
                <div className="flex flex-col items-center mb-8">
                  <label className="block text-sm font-semibold text-(--primary-color) mb-4">
                    Passport Size Photo <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-col items-center gap-4">
                    {photoPreview ? (
                      <div className="relative w-40 h-48 border-4 border-(--accent-gold) rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={photoPreview}
                          alt="Photo preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setPhotoFile(null);
                            setPhotoPreview("");
                          }}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
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
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <div className="w-40 h-48 border-4 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                        <svg
                          className="w-12 h-12 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    )}
                    <label className="cursor-pointer px-6 py-2 bg-(--accent-gold) text-white rounded-[5px] font-semibold hover:bg-(--accent-light) transition-all">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                        required={!photoFile}
                      />
                      {photoPreview ? "Change Photo" : "Upload Photo"}
                    </label>
                    <p className="text-xs text-gray-500 text-center">
                      Max size: 2MB | Formats: jpg, PNG
                    </p>
                  </div>
                </div>

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
                    className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                    placeholder="Enter full name"
                  />
                </div>

                {/* Father's Name and Mother's Name */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fatherName"
                      className="block text-sm font-semibold text-(--primary-color) mb-2"
                    >
                      Father's Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fatherName"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                      placeholder="Father's full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="motherName"
                      className="block text-sm font-semibold text-(--primary-color) mb-2"
                    >
                      Mother's Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="motherName"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                      placeholder="Mother's full name"
                    />
                  </div>
                </div>

                {/* Date of Birth, Age, Gender */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="dateOfBirth"
                      className="block text-sm font-semibold text-(--primary-color) mb-2"
                    >
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="age"
                      className="block text-sm font-semibold text-(--primary-color) mb-2"
                    >
                      Age <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      min="10"
                      max="20"
                      className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                      placeholder="Age"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-sm font-semibold text-(--primary-color) mb-2"
                    >
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Contact & Address */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-(--primary-color) mb-6 pb-3 border-b-2 border-(--accent-gold)/20">
                  Contact & Address Information
                </h3>

                {/* Email and Contact Number */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-semibold text-(--primary-color) mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contactNumber"
                      className="block text-sm font-semibold text-(--primary-color) mb-2"
                    >
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contactNumber"
                      className="block text-sm font-semibold text-(--primary-color) mb-2"
                    >
                      Whatsapp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="whatsappNumber"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-semibold text-(--primary-color) mb-2"
                  >
                    Full Address <span className="text-red-500">*</span>
                  </label>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="houseName"
                        className="block text-sm font-semibold text-(--primary-color) mb-2"
                      >
                        House Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="houseName"
                        name="houseName"
                        value={formData.houseName}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                        placeholder="House Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="place"
                        className="block text-sm font-semibold text-(--primary-color) mb-2"
                      >
                        Place<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="place"
                        name="place"
                        value={formData.place}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                        placeholder="Place"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="postOffice"
                        className="block text-sm font-semibold text-(--primary-color) mb-2"
                      >
                        Post Office <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="postOffice"
                        name="postOffice"
                        value={formData.postOffice}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                        placeholder="Post Office"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="district"
                        className="block text-sm font-semibold text-(--primary-color) mb-2"
                      >
                        District<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="district"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                        placeholder="District"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 lg:grid-cols-3">
                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-semibold text-(--primary-color) mb-2"
                      >
                        State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                        placeholder="State"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="nationality"
                        className="block text-sm font-semibold text-(--primary-color) mb-2"
                      >
                        Nationality<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                        placeholder="Nationality"
                      />
                    </div>
                    <div>
                    <label
                      htmlFor="pincode"
                      className="block text-sm font-semibold text-(--primary-color) mb-2"
                    >
                      Pincode <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{6}"
                      className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                      placeholder="6-digit pincode"
                    />
                  </div>
                  </div>
                </div>

                

                {/* Guardian Information */}
                <div className="mt-8 pt-6 border-t-2 border-gray-200">
                  <h4 className="text-lg font-semibold text-(--primary-color) mb-4">
                    Guardian Information
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label
                        htmlFor="guardianName"
                        className="block text-sm font-semibold text-(--primary-color) mb-2"
                      >
                        Guardian Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="guardianName"
                        name="guardianName"
                        value={formData.guardianName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                        placeholder="Guardian's full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="guardianRelation"
                        className="block text-sm font-semibold text-(--primary-color) mb-2"
                      >
                        Relation <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="guardianRelation"
                        name="guardianRelation"
                        value={formData.guardianRelation}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                      >
                        <option value="">Select</option>
                        <option value="father">Father</option>
                        <option value="mother">Mother</option>
                        <option value="uncle">Uncle</option>
                        <option value="aunt">Aunt</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="guardianContact"
                        className="block text-sm font-semibold text-(--primary-color) mb-2"
                      >
                        Guardian Contact <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="guardianContact"
                        name="guardianContact"
                        value={formData.guardianContact}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                        placeholder="10-digit number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Academic Info */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-(--primary-color) mb-6 pb-3 border-b-2 border-(--accent-gold)/20">
                  Academic Information
                </h3>

                {/* Previous School */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="previousSchool"
                      className="block text-sm font-semibold text-(--primary-color) mb-2"
                    >
                      Previous School
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="previousSchool"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                      placeholder="Name of previous institution"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="previousSchool"
                      className="block text-sm font-semibold text-(--primary-color) mb-2"
                    >
                      Previous Madrasa
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="previousSchool"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors"
                      placeholder="Name of previous institution"
                    />
                  </div>
                </div>

                {/* Medical Conditions */}
                <div>
                  <label
                    htmlFor="medicalConditions"
                    className="block text-sm font-semibold text-(--primary-color) mb-2"
                  >
                    Medical Conditions (if any)
                  </label>
                  <textarea
                    id="medicalConditions"
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-[5px] border-2 border-gray-300 focus:border-(--accent-gold) focus:outline-none transition-colors resize-none"
                    placeholder="Please mention any medical conditions or allergies (optional)"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Documents */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-(--primary-color) mb-6 pb-3 border-b-2 border-(--accent-gold)/20">
                  Document Uploads
                </h3>

                {/* Aadhaar Card */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-(--accent-gold) transition-colors">
                  <label className="block text-sm font-semibold text-(--primary-color) mb-3">
                    Aadhaar Card Copy <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="cursor-pointer px-6 py-3 bg-(--primary-color) text-white rounded-[5px] font-semibold hover:bg-(--primary-color)/90 transition-all">
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileUpload(e, "aadhaar")}
                        className="hidden"
                        required={!aadhaarFile}
                      />
                      Choose File
                    </label>
                    {aadhaarFile && (
                      <div className="flex items-center gap-2 text-sm text-green-600">
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
                        {aadhaarFile.name}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Accepted formats: PDF, jpg, PNG | Max size: 5MB
                  </p>
                </div>

                {/* School TC */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-(--accent-gold) transition-colors">
                  <label className="block text-sm font-semibold text-(--primary-color) mb-3">
                    School Transfer Certificate (if available)
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="cursor-pointer px-6 py-3 bg-(--primary-color) text-white rounded-[5px] font-semibold hover:bg-(--primary-color)/90 transition-all">
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileUpload(e, "tc")}
                        className="hidden"
                      />
                      Choose File
                    </label>
                    {tcFile && (
                      <div className="flex items-center gap-2 text-sm text-green-600">
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
                        {tcFile.name}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Upload TC from previous school if available
                  </p>
                </div>

                {/* Madrasa Certificate */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-(--accent-gold) transition-colors">
                  <label className="block text-sm font-semibold text-(--primary-color) mb-3">
                    Madrasa 5th Certificate (if applicable)
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="cursor-pointer px-6 py-3 bg-(--primary-color) text-white rounded-[5px] font-semibold hover:bg-(--primary-color)/90 transition-all">
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileUpload(e, "certificate")}
                        className="hidden"
                      />
                      Choose File
                    </label>
                    {certificateFile && (
                      <div className="flex items-center gap-2 text-sm text-green-600">
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
                        {certificateFile.name}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Upload certificate if you have completed Madrasa 5th
                  </p>
                </div>

                {/* Important Notice */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-500 mt-0.5 shrink-0"
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
                    <p className="text-sm text-blue-800">
                      Please ensure all documents are clear and legible. Scanned
                      copies or clear photographs are acceptable.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Status */}
            {submitStatus.type && (
              <div
                className={`mt-6 p-4 rounded-[5px] ${
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

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t-2 border-gray-200">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-8 py-3 border-2 border-(--primary-color) text-(--primary-color) rounded-[5px] font-semibold transition-all hover:bg-(--primary-color) hover:text-white"
                >
                  Previous
                </button>
              )}
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto px-8 py-3 bg-(--accent-gold) text-white rounded-[5px] font-semibold transition-all hover:bg-(--accent-light)"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-auto px-8 py-3 bg-(--accent-gold) text-white rounded-[5px] font-semibold transition-all hover:bg-(--accent-light) disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
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
                    "Submit Application"
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
