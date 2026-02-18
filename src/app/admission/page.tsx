import AdmissionHero from "@/components/admission/AdmissionHero";
import AdmissionProcess from "@/components/admission/AdmissionProcess";
import ApplicationForm from "@/components/admission/ApplicationForm";
import Eligibility from "@/components/admission/Eligibility";
import HallTicketDownload from "@/components/admission/HallTicketDownload";
import ImportantDates from "@/components/admission/ImportandDates";
import Footer from "@/components/Footer";
import React from "react";

export default function AdmissionPage() {
  return (
    <main className="min-h-screen">
      <AdmissionHero />
      <AdmissionProcess />
      <Eligibility />
      <ImportantDates />
      <ApplicationForm />
      {/* <HallTicketDownload /> */}
      <Footer/>
    </main>
  );
}