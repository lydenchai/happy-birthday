import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  { src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600", label: "The Beginning 🌷", rotation: -4 },
  { src: "https://images.unsplash.com/photo-1516589178581-6cd7833de3b2?auto=format&fit=crop&q=80&w=600", label: "Our First Date 💫", rotation: 3 },
  { src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600", label: "Summer Memories ☀️", rotation: -2 },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600", label: "Adventures Together 🌍", rotation: 5 },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=600", label: "Quiet Moments 🕯️", rotation: -3 },
  { src: "https://images.unsplash.com/photo-1501901609772-df0848060b33?auto=format&fit=crop&q=80&w=600", label: "Always & Forever ❤️", rotation: 4 },
];

export default function Gallery() {
  const containerRef = useRef(null);
  
  return (
    <section
      ref={containerRef}
      className="relative py-32 px-4 overflow-hidden"
      style={{ background: "#fef2f8" }}
    >
      <div className="absolute inset-0" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')", opacity: 0.3 }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-20"
      >
        <span className="text-pink-400 tracking-[0.4em] text-xs font-bold uppercase mb-4 block">
          A Look Back
        </span>
        <h2 className="text-5xl md:text-7xl mb-4" style={{ fontFamily: "'Great Vibes', cursive", color: "#9d174d" }}>
          Beautiful Memories
        </h2>
        <p className="mt-4 text-lg max-w-md mx-auto text-slate-500 font-light">
          Every photo holds a piece of my heart. Pinning these moments up forever.
        </p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto px-4 md:px-8 pb-40 mb-48">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: img.rotation }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.1 }}
            className="polaroid flex flex-col justify-between"
          >
            {/* Cute pin or tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-3 bg-pink-200/80 transform -rotate-2 shadow-sm z-20" style={{ backdropFilter: "blur(4px)" }} />
            
            <div className="overflow-hidden bg-slate-100 flex-1 relative group">
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-72 object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/10 transition-colors duration-500" />
            </div>
            
            <div className="pt-6 relative text-center">
              <p className="text-xl text-slate-800" style={{ fontFamily: "'Great Vibes', cursive" }}>{img.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
