import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQ from "@/components/contact/FAQ";
import LocationMap from "@/components/contact/LocationMap";
import Footer from "@/components/Footer";
import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <LocationMap />
      <FAQ />
      <Footer/>
    </main>
  );
}