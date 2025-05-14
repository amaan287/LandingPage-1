"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/navbar";
import TourCard from "@/components/tour-card";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const toursRef = useRef<HTMLDivElement>(null);
  const inspireRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      }
    );

    // Text animation
    gsap.fromTo(
      textRef.current?.querySelectorAll(".animate-text") || [],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
      }
    );

    // Tours section animation
    gsap.fromTo(
      toursRef.current?.querySelectorAll(".tour-card") || [],
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: toursRef.current,
          start: "top 80%",
        },
      }
    );

    // Inspire section animation
    gsap.fromTo(
      inspireRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: inspireRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <main className="min-h-screen bg-[#121921] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div ref={heroRef} className="relative h-screen w-full">
        <Image
          src="/images/Taragarh-2.jpg"
          alt="Taragarh fort"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-10% via-transparent via-80% to-[#121921] "></div>
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col justify-center px-12 md:px-24 z-10"
        >
          <h1 className="text-7xl md:text-9xl font-bold mb-4 animate-text">
            VISIT
            <br />
            BUNDI
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="animate-text">
              <p className="text-sm mb-2 opacity-80">
                Discover new experiences
              </p>
              <p className="text-sm mb-4 opacity-60">
                Explore India's culuture and Traditions
              </p>
              <Link
                href="#"
                className="inline-block px-6 py-2 border-b-2 border-orange-500 text-sm hover:bg-orange-500/10 transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="animate-text">
              <p className="text-sm mb-2 opacity-80">
                Discover new experiences
              </p>
              <p className="text-sm mb-4 opacity-60">
                Explore India's culuture and Traditions
              </p>
              <Link
                href="#"
                className="inline-block px-6 py-2 border-b-2 border-orange-500 text-sm hover:bg-orange-500/10 transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="animate-text">
              <p className="text-sm mb-2 opacity-80">
                Discover new experiences{" "}
              </p>
              <p className="text-sm mb-4 opacity-60">
                Explore India's culuture and Traditions
              </p>
              <Link
                href="#"
                className="inline-block px-6 py-2 border-b-2 border-orange-500 text-sm hover:bg-orange-500/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="h-12 w-px bg-gray-500/50 mb-2"></div>
          <div className="text-xs opacity-50">01</div>
          <div className="text-xs opacity-50">02</div>
          <div className="text-2xl font-bold">03</div>
          <div className="text-xs opacity-50">04</div>
          <div className="text-xs opacity-50">05</div>
          <div className="h-12 w-px bg-gray-500/50 mt-2"></div>
        </div>
      </div>

      {/* Popular Tours Section */}
      <div ref={toursRef} className="py-20 px-12 md:px-24">
        <h2 className="text-sm uppercase opacity-60 mb-2">
          What this Trip includes
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">Popular Parts</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TourCard
            number="1"
            image="/images/holi.jpg"
            title="Part 1"
            description="Learn Tradition"
            className="tour-card"
          />
          <TourCard
            number="2"
            image="/images/Round2.jpg"
            title="Part 2"
            description="Surrounding Mountains"
            className="tour-card"
          />
          <TourCard
            number="3"
            image="/images/Round-3.png"
            title="Part 3"
            description="All the local Handcrafts "
            className="tour-card"
          />
          <TourCard
            number="4"
            image="/images/Round-4.png"
            title="Part 4"
            description="Ending the day with Beautiful sunset"
            className="tour-card"
          />
        </div>
      </div>

      {/* Inspire Section */}
      <div ref={inspireRef} className="relative h-screen w-full">
        <Image
          src="/images/Suraj-chatri.jpg"
          alt="Inspire Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121921] to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24 z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            TRAVEL AND
            <br />
            INSPIRE YOUR
            <br />
            LIFE
          </h2>

          <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 w-fit hover:bg-white/20 transition-colors">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <div className="w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-black border-b-4 border-b-transparent ml-1"></div>
            </div>
            <span className="text-sm">Learn more</span>
          </button>
        </div>
      </div>
    </main>
  );
}
