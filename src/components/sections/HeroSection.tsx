"use client";

import { useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.9,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-watch.mp4" type="video/mp4" />
          <source src="/videos/hero-watch.webm" type="video/webm" />
          {/* Fallback pour les navigateurs sans support vidéo */}
        </video>

        {/* Overlay sombre pour rendre le texte lisible */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient overlay pour un effet premium */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto"
        style={{ scale }}
      >
        <motion.h1
          className="hero-title font-display text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Luxonera
        </motion.h1>

        <motion.p
          className="hero-subtitle text-xl md:text-3xl font-light tracking-wider mb-12 text-neutral-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          L&apos;Excellence Horlogère
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Découvrez notre collection exclusive de montres de luxe, où
          l&apos;artisanat suisse rencontre l&apos;élégance intemporelle
        </motion.p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/catalog">
            <Button variant="primary" size="lg" className="min-w-[200px]">
              Découvrir la Collection
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="outline"
              size="lg"
              className="min-w-[200px] border-white text-white hover:bg-white hover:text-black"
            >
              Notre Histoire
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-15 left-1/2 translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </motion.section>
  );
}
