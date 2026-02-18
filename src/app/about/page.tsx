import AboutHero from "@/components/about/AboutHero";
import AboutUs from "@/components/about/AboutUs";
import Faculties from "@/components/about/Faculties";
import History from "@/components/about/History";
import LifeAtAcademy from "@/components/about/LifeAtAcademy";
import Management from "@/components/about/Management";
import WhatWeOffer from "@/components/about/WhatWeOffer";
import Footer from "@/components/Footer";
import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutUs />
      <History />
      <WhatWeOffer />
      <Management />
      <Faculties />
      <LifeAtAcademy />
      <Footer/>
    </main>
  );
}