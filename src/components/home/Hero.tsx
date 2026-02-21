'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const router = useRouter()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealElements = heroRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <section
      ref={heroRef}
      className="relative px-6 py-24 min-h-[80vh] bg-cover bg-center text-white text-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(13, 59, 46, 0.7), rgba(13, 59, 46, 0.7)), url('/photos/3.jpg')`,
      }}
    >
      <div className="reveal max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-semibold font-['Playfair_Display'] lg:text-6xl mb-6 max-w-200">
          Excellence in Academic and Spiritual Learning
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-175 opacity-90">
          Empowering the next generation with a harmonious blend of traditional Islamic values and modern scientific education.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/admission"
            className="px-9 py-4 rounded bg-(--accent-gold) text-white font-semibold no-underline transition-all hover:bg-(--accent-light) hover:-translate-y-0.5"
          >
            Our Admissions 2026
          </Link>
          <Link
            href="/contact"
            className="px-9 py-4 rounded border border-white text-white font-semibold no-underline transition-all hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}