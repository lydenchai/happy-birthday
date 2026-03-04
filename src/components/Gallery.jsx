import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import theBeginning from "../../public/images/the-beginning.jpg";
import ourFirstDate from "../../public/images/our-first-date.jpg";
import summerMemories from "../../public/images/summer-memories.jpg";
import adventuresTogether from "../../public/images/adventures-together.jpg";
import quietMoments from "../../public/images/quiet-moments.jpg";
import alwaysForever from "../../public/images/always-and-forever.jpg";

const images = [
  {
    src: theBeginning,
    label: "The Beginning 🌷",
    rotation: -4,
  },
  {
    src: ourFirstDate,
    label: "Our First Date 💫",
    rotation: 3,
  },
  {
    src: summerMemories,
    label: "Summer Memories ☀️",
    rotation: -2,
  },
  {
    src: adventuresTogether,
    label: "Adventures Together 🌍",
    rotation: 5,
  },
  {
    src: quietMoments,
    label: "Quiet Moments 🕯️",
    rotation: -3,
  },
  {
    src: alwaysForever,
    label: "Always & Forever ❤️",
    rotation: 4,
  },
];

export default function Gallery() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative py-32! px-4! overflow-hidden w-full! flex flex-col items-center justify-center min-h-screen"
      style={{ background: "#fef2f8" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/stardust.png')",
          opacity: 0.3,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center text-center mb-20! px-4! w-full"
      >
        <span className="text-pink-400 tracking-[0.4em] text-xs font-bold uppercase mb-4! block text-center w-full">
          A Look Back
        </span>
        <h2
          className="text-4xl md:text-5xl lg:text-7xl mb-4! w-full text-center"
          style={{ fontFamily: "'Great Vibes', cursive", color: "#9d174d" }}
        >
          Beautiful Memories
        </h2>
        <p className="mt-4! text-base md:text-lg max-w-md mx-auto text-slate-500 font-light text-center w-full">
          Every photo holds a piece of my heart. Pinning these moments up
          forever.
        </p>
      </motion.div>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto px-4! md:px-8! pb-40!">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: img.rotation }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: i * 0.1,
            }}
            className="polaroid flex flex-col justify-between"
          >
            {/* Cute pin or tape */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-3 bg-pink-200/80 transform -rotate-2 shadow-sm z-20"
              style={{ backdropFilter: "blur(4px)" }}
            />
            <div className="overflow-hidden bg-slate-100 flex-1 relative group">
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-72 object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="pt-6! relative text-center">
              <p
                className="text-lg md:text-xl text-slate-800"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                {img.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
