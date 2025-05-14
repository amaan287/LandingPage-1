"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Search } from "lucide-react";
import { useGSAP } from "@gsap/react";
export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial animation
    gsap.fromTo(
      logoRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      linksRef.current?.querySelectorAll("a") || [],
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
      }
    );

    // Scroll animation
    const showAnim = gsap
      .from(navbarRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;

      if (st > lastScrollTop) {
        // Scrolling down
        showAnim.reverse();
      } else {
        // Scrolling up
        showAnim.play();
      }

      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 md:px-24 h-20 bg-gradient-to-b from-black/70 to-transparent backdrop-blur-sm "
    >
      <div ref={logoRef} className="flex items-center ">
        <div className="w-3 h-3 rounded-full bg-gradient-to-b from-orange-400 from-40% via-white via-60% to-green-400  mr-2"></div>
        <Link href="/" className="font-bold text-lg">
          TRAVEL
        </Link>
      </div>

      <div ref={linksRef} className="hidden md:flex items-center space-x-8">
        <Link
          href="/"
          className="text-sm uppercase hover:text-orange-500 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-sm uppercase hover:text-orange-500 transition-colors"
        >
          About us
        </Link>
        <Link
          href="/tours"
          className="text-sm uppercase hover:text-orange-500 transition-colors"
        >
          Tours
        </Link>
        <Link
          href="/gallery"
          className="text-sm uppercase hover:text-orange-500 transition-colors"
        >
          Gallary
        </Link>
        <Link
          href="/reviews"
          className="text-sm uppercase hover:text-orange-500 transition-colors"
        >
          Reviews
        </Link>
        <Link
          href="/contact"
          className="text-sm uppercase hover:text-orange-500 transition-colors"
        >
          Contact
        </Link>
      </div>

      <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors">
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
}
