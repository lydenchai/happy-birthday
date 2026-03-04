import { motion } from "framer-motion";

const scrollToNext = () =>
  document.getElementById("letter-section")?.scrollIntoView({ behavior: "smooth" });

function Orbs() {
  return (
    <>
      <div className="orb" style={{ width: "60vw", height: "60vw", top: "-20%", left: "-10%", background: "radial-gradient(circle, #ffd1e1 0%, #f3e8ff 100%)", filter: "blur(120px)" }} />
      <div className="orb" style={{ width: "50vw", height: "50vw", top: "10%", right: "-10%", background: "radial-gradient(circle, #fce7f3 0%, #fae8ff 100%)", filter: "blur(100px)" }} />
      <div className="orb" style={{ width: "40vw", height: "40vw", bottom: "-10%", left: "20%", background: "radial-gradient(circle, #ffe4e6 0%, #fee2e2 100%)", filter: "blur(90px)" }} />
    </>
  );
}

function FloatingParticles() {
  const particles = [
    { char: "✨", size: "text-2xl" }, { char: "🌸", size: "text-3xl" }, 
    { char: "💫", size: "text-xl" }, { char: "💗", size: "text-2xl" },
    { char: "⭐", size: "text-sm" }, { char: "🌷", size: "text-3xl" },
    { char: "🤍", size: "text-xl" }, { char: "✨", size: "text-sm" }
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className={`absolute select-none ${p.size}`}
          style={{ 
            left: `${10 + (i * 12 + Math.random() * 5)}%`, 
            top: `${10 + (i * 10 + Math.random() * 15)}%`, 
            opacity: 0.4
          }}
          animate={{ y: [0, -30, 0], x: [0, i % 2 === 0 ? 15 : -15, 0], opacity: [0.3, 0.7, 0.3], rotate: [0, i % 2 === 0 ? 15 : -15, 0] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
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
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          className="glass-btn mb-8 px-6 py-2.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-pink-600 flex items-center justify-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
          A Special Day For A Special Person
        </motion.div>

        <h1 className="relative flex flex-col items-center justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="text-3xl md:text-5xl text-pink-400 mb-2 font-medium"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            To my beautiful soulmate
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-[1.1] tracking-tight"
            style={{
              fontFamily: "Playfair Display, serif",
              background: "linear-gradient(135deg, #be185d 0%, #ec4899 50%, #9333ea 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 10px 20px rgba(236,72,153,0.15))"
            }}
          >
            Happy Birthday,<br />My Love
          </motion.div>
        </h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-lg md:text-2xl mb-12 leading-relaxed max-w-2xl text-slate-700 font-light"
        >
          Every moment with you is a gift. Thank you for filling my life with
          love, laughter, and endless happiness. 
        </motion.p>

        <motion.button
          onClick={scrollToNext}
          initial={{ y: 20, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, type: "spring", stiffness: 200, damping: 15 }}
          className="glass-btn px-10 py-4 rounded-2xl font-bold text-lg text-pink-600 flex items-center gap-3 group relative overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
        className="absolute bottom-10 flex flex-col items-center gap-2 text-xs font-semibold tracking-widest text-pink-400 opacity-70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-pink-400 to-transparent" />
      </motion.div>
    </section>
  );
}
