import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import Announcement from "./Announcement";
import { facebook_url, instagram_url, youtube_url } from "@/lib/utils/config";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <Announcement />
      <footer className="bg-(--primary-color) text-white px-6 lg:px-20 py-10 relative">
        <div
          className="absolute inset-0  opacity-10 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/photos/4.JPG')" }}
        ></div>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 z-10 mb-16">
          {/* Footer Info */}
          <div className="h-full flex flex-col justify-between gap-6">
            <div>
              <Link
                href="/"
                className="block uppercase font-semibold col-span-3 text-2xl text-(--accent-gold) mb-4 no-underline"
              >
                WMO Imam Gazzali Academy
              </Link>
              <p className="opacity-70 mb-6 text-[0.9rem] max-w-125">
                Empowering students to excel academically while upholding moral
                integrity and spiritual depth in Koolivayal, Wayanad.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap lg:mb-6">
              <div className="flex gap-2 items-center bg-white px-4 py-2 rounded-[3px]">
                <img src="/moulanaazad.png" className="w-10" alt="moula"/> 
                <div className="text-(--text-dark)">
                  <p className="text-[10px] font-semibold uppercase">Approved BY</p>
                  <p className="text-[10px] leading-3">Moulana Azad <br /> National Urdu University</p>
                </div>
              </div>
              <div className="flex gap-2 items-center bg-white px-4 py-2 rounded-[3px]">
                <img src="/iuou.png" className="w-10" alt="moula"/> 
                <div className="text-(--text-dark)">
                  <p className="text-[10px] font-semibold uppercase">Member</p>
                  <p className="text-[10px] leading-3">international union<br /> of universities</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Link
                href={facebook_url || ""}
                target="_blank"
                className="text-white text-xl opacity-70 hover:opacity-100 hover:text-(--accent-gold) transition-all"
              >
                <FaFacebook />
              </Link>
              <Link
                href={instagram_url || ""}
                target="_blank"
                className="text-white text-xl opacity-70 hover:opacity-100 hover:text-(--accent-gold) transition-all"
              >
                <FaInstagram />
              </Link>
              <Link
                href={youtube_url || ""}
                target="_blank"
                className="text-white text-xl opacity-70 hover:opacity-100 hover:text-(--accent-gold) transition-all"
              >
                <FaYoutube />
              </Link>
              <Link
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ID}`}
                target="_blank"
                className="text-white text-xl opacity-70 hover:opacity-100 hover:text-(--accent-gold) transition-all"
              >
                <SiGmail />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 sm:gap-24 flex-col sm:flex-row z-10">
            <div>
              <h4 className="mb-6 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-(--accent-gold)">
                Quick Links
              </h4>
              <ul className="list-none">
                <li className="mb-3">
                  <Link
                    href="/about"
                    className="text-white/70 no-underline text-[0.95rem] hover:text-(--accent-gold) hover:pl-1 transition-all"
                  >
                    About Academy
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/alumni"
                    className="text-white/70 no-underline text-[0.95rem] hover:text-(--accent-gold) hover:pl-1 transition-all"
                  >
                    Our Alumni
                  </Link>
                </li>
                
                <li className="mb-3">
                  <Link
                    href="/admission"
                    className="text-white/70 no-underline whitespace-nowrap text-[0.95rem] hover:text-(--accent-gold) hover:pl-1 transition-all"
                  >
                    Admission Process
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="/contact"
                    className="text-white/70 no-underline text-[0.95rem] hover:text-(--accent-gold) hover:pl-1 transition-all"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="#admissions"
                    className="text-white/70 opacity-0 no-underline whitespace-nowrap text-[0.95rem] hover:text-(--accent-gold) hover:pl-1 transition-all"
                  >
                    Admission Processkkk
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="mb-6 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-(--accent-gold)">
                Contact Us
              </h4>
              <ul className="list-none text-white/70 text-[0.95rem]">
                <li className="mb-3 flex gap-2 items-center">
                  <FaLocationDot className="fas fa-envelope text-(--accent-gold)" />
                  <span>Koolivayal, Wayanad, Kerala</span>
                </li>
                <li className="mb-3 flex gap-2 items-center">
                  <IoCall className="fas fa-envelope text-(--accent-gold)" />
                  <span>+91 9745 222 294</span>
                </li>
                <li className="mb-3 flex gap-2 items-center">
                  <SiGmail className="fas fa-envelope text-(--accent-gold)" />
                  <span>imamgazzaliacademy@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-[0.85rem] text-white/50">
          © 2026 WMO Imam Gazzali Academy. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
