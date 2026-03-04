import { motion } from "framer-motion";
import { useMemo, useEffect, useState } from "react";

const scrollToNext = () =>
  document
    .getElementById("letter-section")
    ?.scrollIntoView({ behavior: "smooth" });

function Orbs() {
  return (
    <>
      <div
        className="orb"
        style={{
          width: "100vw",
          height: "100vw",
          top: "-20%",
          left: "-10%",
          background: "radial-gradient(circle, #ffd1e1 0%, #f3e8ff 100%)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="orb"
        style={{
          width: "80vw",
          height: "80vw",
          top: "10%",
          right: "-10%",
          background: "radial-gradient(circle, #fce7f3 0%, #fae8ff 100%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="orb"
        style={{
          width: "70vw",
          height: "70vw",
          bottom: "-10%",
          left: "20%",
          background: "radial-gradient(circle, #ffe4e6 0%, #fee2e2 100%)",
          filter: "blur(90px)",
        }}
      />
    </>
  );
}

function FloatingParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(() => {
    const symbols = [
      { char: "✨", size: "text-2xl" },
      { char: "🌸", size: "text-3xl" },
      { char: "💫", size: "text-xl" },
      { char: "💗", size: "text-2xl" },
      { char: "⭐", size: "text-base" },
      { char: "🌷", size: "text-3xl" },
      { char: "🤍", size: "text-xl" },
      { char: "✨", size: "text-base" },
      { char: "🎆", size: "text-base" },
      { char: "🎂", size: "text-lg" },
      { char: "🎁", size: "text-lg" },
      { char: "🎉", size: "text-lg" },
      { char: "💖", size: "text-lg" },
      { char: "💝", size: "text-lg" },
      { char: "🎀", size: "text-lg" },
    ];
    return symbols.map((p, i) => ({
      ...p,
      left: Math.random() * 100, // full screen width random
      top: Math.random() * 100,  // full screen height random
      delay: Math.random() * 2,  // random start delay
      duration: 3 + Math.random() * 3, // random loop duration
      drift: (Math.random() - 0.5) * 30, // random x sway
    }));
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className={`absolute select-none ${p.size}`}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: 0, // Let Framer animate it in
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, p.drift, 0],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, p.drift, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        >
          {p.char}
        </motion.span>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      style={{ background: "#fdf8fa" }}
    >
      <Orbs />
      <FloatingParticles />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-6! max-w-4xl"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          className="w-[90%] sm:w-auto glass-btn mb-8! px-3! md:px-6! py-3! rounded-full text-[9px] sm:text-xs md:text-sm font-bold tracking-widest sm:tracking-[0.2em] uppercase text-pink-600 flex flex-row items-center justify-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse shrink-0" />
          <span className="text-center leading-snug whitespace-nowrap overflow-hidden text-ellipsis">
            A Special Day For A Special Person
          </span>
        </motion.div>
        <h1 className="relative flex flex-col items-center justify-center mb-4!">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="text-2xl md:text-4xl lg:text-5xl text-pink-400 mb-2 font-medium"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            To my beautiful soulmate
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
            style={{
              fontFamily: "Playfair Display, serif",
              background:
                "linear-gradient(135deg, #be185d 0%, #ec4899 50%, #9333ea 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 10px 20px rgba(236,72,153,0.15))",
            }}
          >
            Happy Birthday,
            <br />
            My Love
          </motion.div>
        </h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-base md:text-xl lg:text-2xl mx-auto mb-12! leading-relaxed max-w-2xl text-slate-700 font-light"
        >
          Every moment with you is a gift. Thank you for filling my life with
          love, laughter, and endless happiness.
        </motion.p>

        <motion.button
          onClick={scrollToNext}
          initial={{ y: 20, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            delay: 1.1,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className="glass-btn px-6! py-3! md:px-10! md:py-4! rounded-2xl font-bold text-base md:text-lg text-pink-600 flex items-center gap-3 group relative overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 bg-linear-to-r from-pink-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10">Open My Heart</span>
          <motion.span
            className="relative z-10 text-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ❤️
          </motion.span>
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2 text-xs font-semibold tracking-widest text-pink-400 opacity-100"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>SCROLL</span>
        <div className="w-px h-8 bg-linear-to-b from-pink-400 to-transparent" />
      </motion.div>
    </section>
  );
}
