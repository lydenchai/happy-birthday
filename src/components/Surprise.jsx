import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ConfettiPiece({ i, rv }) {
  const colors = [
    "#ff4b91",
    "#a855f7",
    "#f43f5e",
    "#c084fc",
    "#ec4899",
    "#fbbf24",
    "#6ee7b7",
    "#f9a8d4",
  ];
  return (
    <motion.div
      initial={{ y: -50, opacity: 0, rotate: 0 }}
      animate={{
        y: "110vh",
        opacity: [0, 1, 1, 0],
        rotate: rv[i].rotate,
        x: rv[i].drift,
      }}
      transition={{
        duration: 3 + rv[i].dur,
        delay: rv[i].delay,
        ease: "linear",
      }}
      style={{
        position: "fixed",
        top: 0,
        left: `${rv[i].left}%`,
        zIndex: 100,
        width: rv[i].size,
        height: rv[i].size,
        borderRadius: i % 3 === 0 ? "50%" : i % 3 === 1 ? "4px" : "0",
        background: colors[i % colors.length],
        pointerEvents: "none",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    />
  );
}

function Confetti() {
  const rv = useMemo(
    () =>
      [...Array(100)].map(() => ({
        dur: Math.random() * 2,
        delay: Math.random() * 1.5,
        left: Math.random() * 100,
        drift: (Math.random() - 0.5) * 200,
        rotate: (Math.random() - 0.5) * 1080,
        size: 8 + Math.random() * 14,
      })),
    [],
  );
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 100 }}>
      {[...Array(100)].map((_, i) => (
        <ConfettiPiece key={i} i={i} rv={rv} />
      ))}
    </div>
  );
}

export default function Surprise() {
  const [show, setShow] = useState(false);

  return (
    <section
      className="relative py-32! px-4! flex flex-col items-center justify-center min-h-[60vh] overflow-hidden min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #fdf8fa 0%, #fae8ff 50%, #fdf4ff 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/stardust.png')",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        className="relative z-10 text-center flex flex-col items-center max-w-2xl"
      >
        <span className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-2xl mb-6! shadow-sm border border-pink-200">
          🎁
        </span>
        <h2
          className="text-4xl md:text-5xl lg:text-7xl mb-6!"
          style={{ fontFamily: "'Great Vibes', cursive", color: "#9d174d" }}
        >
          One Last Surprise
        </h2>
        <p className="text-base md:text-xl mb-12! text-slate-500 font-light leading-relaxed">
          I have something special waiting just for you. Open it when you're
          ready.
        </p>
        <motion.button
          onClick={() => setShow(true)}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="relative group overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8! py-4! md:px-12! md:py-5! rounded-full font-bold text-base md:text-lg tracking-wide shadow-xl shadow-pink-500/30 border border-white/20 cursor-pointer"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10 flex items-center gap-2">
            Reveal Gift ✨
          </span>
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {show && (
          <>
            <Confetti />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4!"
              style={{
                backdropFilter: "blur(20px)",
                background: "rgba(253, 244, 255, 0.85)",
              }}
              onClick={() => setShow(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white rounded-3xl md:rounded-[3rem] p-8! md:p-16! text-center max-w-xl w-[90%] md:w-full relative overflow-hidden shadow-2xl"
                style={{
                  boxShadow:
                    "0 25px 50px -12px rgba(236, 72, 153, 0.25), 0 0 0 1px rgba(236,72,153,0.1)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50 pointer-events-none" />
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="text-6xl md:text-8xl mb-4! md:mb-6! relative z-10 drop-shadow-xl"
                >
                  💝
                </motion.div>

                <h2
                  className="text-3xl md:text-5xl font-bold mb-6! relative z-10"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    background:
                      "linear-gradient(135deg, #be185d 0%, #ec4899 50%, #a855f7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  I Love You Forever
                </h2>

                <p className="text-base md:text-xl text-slate-600 mb-10! font-light leading-relaxed relative z-10">
                  You are my greatest gift, my brightest star, my forever home.
                  Words will never be enough to explain how much you mean to me.
                </p>

                <motion.button
                  onClick={() => setShow(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-8! py-3! rounded-full font-medium transition-colors border border-slate-200 relative z-10 cursor-pointer"
                >
                  Close with love ❤️
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
