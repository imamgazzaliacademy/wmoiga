"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Announcement from "./Announcement";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const NavItems = [
    { title: "About", href: "/about" },
    { title: "Admission", href: "/admission" },
    { title: "Alumni", href: "/alumni" },
    { title: "Contact Us", href: "/contact" },
    // {title: "Examination",href:"/examination"},
    // { title: "Gallery", href: "/gallery" },
  ];

  const handleHome = () => router.push("/");

  const handleApply = () => router.push("/admission#application-form");

  return (
    <>
      <div
        className={`
          fixed top-0 left-1/2 -translate-x-1/2 z-50
          transition-all duration-500 ease-in-out mobile-menu-container
          ${isScrolled
            ? "w-screen sm:px-4 md:w-[85%] lg:w-[80%] xl:w-[75%] top-0 md:top-4 md:rounded-full md:backdrop-blur-md bg-white md:bg-white/70 md:hadow-lg md:border border-(--accent-gold)"
            : "w-screen top-0 rounded-none bg-white  shadow-sm sm:px-6 lg:px-8"
          }
          h-16 px-4 
          flex items-center justify-between
        `}
      >
        {/* Logo */}
        <div className="font-bold text-lg sm:text-xl text-[#b38e44]">
          <img
            onClick={handleHome}
            src="/fullLogo.png"
            alt=""
            className="w-50 hidden lg:block"
          />
          <img
            onClick={handleHome}
            src="/logo.png"
            alt=""
            className="w-10 lg:hidden"
          />
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden md:flex gap-6 transition-all duration-300 lg:gap-8 items-center">
          <AnimatePresence>
            {pathname !== "/" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Link
                  href="/"
                  className="font-medium text-sm lg:text-[16px] capitalize hover:text-[#b38e44] transition-colors duration-300"
                >
                  Home
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
          {NavItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`font-medium text-sm lg:text-[16px] capitalize hover:text-[#b38e44] transition-colors duration-300 ${pathname === item.href && "text-[#b38e44]"}`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100  rounded-lg transition-colors relative z-50"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            ></span>
          </div>
        </button>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <button
            onClick={handleApply}
            className={`px-4 sm:px-6 h-10 gold-button ${isScrolled ? "rounded-full " : "rounded-[5px]"} text-[13px] sm:text-[14px] font-semibold text-white shadow-md hover:shadow-xl transition-all duration-300`}
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          md:hidden fixed inset-0 z-40 transition-all duration-300 mobile-menu-container
          ${isMobileMenuOpen ? "visible" : "invisible"}
        `}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`
            absolute top-20 right-4 w-[90%] max-w-sm
            bg-white rounded-2xl shadow-2xl
            transition-all duration-300 transform
            ${isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
            }
          `}
        >
          {/* Navigation Links */}
          <nav className="flex flex-col p-4">
            {pathname !== "/" && (
              <Link
                href={"/"}
                className={`px-4 py-4 font-medium text-[16px] hover:text-[#b38e44] hover:bg-gray-50 rounded-xl transition-all duration-200 flex items-center justify-between  group`}
              >
                Home
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-[#b38e44] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            )}
            {NavItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-4 font-medium text-[16px] hover:text-[#b38e44] hover:bg-gray-50 rounded-xl transition-all duration-200 flex items-center justify-between ${pathname === item.href && "text-[#b38e44] bg-gray-50"} group`}
              >
                {item.title}
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-[#b38e44] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}

            {/* Divider */}
            <div className="h-px bg-gray-200 dark:bg-gray-700 my-2"></div>

            <button
              onClick={() => {
                handleApply();
                setIsMobileMenuOpen(false);
              }}
              className="mt-2 w-full h-12 gold-button rounded-[5px] text-[15px] font-semibold text-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              Apply Now
            </button>
          </nav>
        </div>
      </div>
      {!isScrolled && <div className="top-16 fixed z-50 w-screen">
        <Announcement />
      </div>}
    </>
  );
};

export default Navbar;
