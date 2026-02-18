import Admission from "@/components/home/Admission";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import MissionVission from "@/components/home/MissionVission";
import StatusBar from "@/components/home/StatusBar";
import Image from "next/image";
import LifeAtGazzali from "@/components/home/LifeAtGazzali";
import DirectorVoice from "@/components/home/DirectorVoice";
import FAQ from "@/components/contact/FAQ";

export default function Home() {
  return (
    <div className=" ">
      <Hero />
      <StatusBar />
      <MissionVission />
      <LifeAtGazzali />
      <DirectorVoice />
      <Admission />
      <Footer />
    </div>
  );
}
