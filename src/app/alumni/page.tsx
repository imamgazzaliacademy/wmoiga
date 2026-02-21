import React from "react";
import AlumniHero from "@/components/alumni/AlumniHero";
import AlumniStats from "@/components/alumni/AlumniStats";
import FeaturedAlumni from "@/components/alumni/FeaturedAlumni";
import AllAlumni from "@/components/alumni/AllAlumni";
import AlumniRegistration from "@/components/alumni/AlumniRegistration";
import Footer from "@/components/Footer";

export default function AlumniPage() {
  return (
    <main className="min-h-screen">
      <AlumniHero />
      <AlumniStats />
      {/* <FeaturedAlumni /> */}
      {/* <AllAlumni /> */}
      {/* <AlumniRegistration /> */}
      <Footer/>
    </main>
  );
}