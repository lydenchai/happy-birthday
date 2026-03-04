import { motion } from "framer-motion";
import {
  HeartIcon,
  SparklesIcon,
  StarIcon,
  SunIcon,
  FireIcon,
  GiftIcon,
} from "@heroicons/react/24/solid";

const reasons = [
  {
    Icon: HeartIcon,
    color: "#ec4899",
    text: "Your endless kindness",
    sub: "You give love freely and without condition",
  },
  {
    Icon: SparklesIcon,
    color: "#a855f7",
    text: "The way you make me smile",
    sub: "A single look from you lights up my whole world",
  },
  {
    Icon: StarIcon,
    color: "#f59e0b",
    text: "Your beautiful soul",
    sub: "Inside and out, you are radiant",
  },
  {
    Icon: SunIcon,
    color: "#f43f5e",
    text: "How you light up my life",
    sub: "You are my sunshine on the darkest days",
  },
  {
    Icon: FireIcon,
    color: "#ea580c",
    text: "Your passion and warmth",
    sub: "Everything you do, you do with your whole heart",
  },
  {
    Icon: GiftIcon,
    color: "#8b5cf6",
    text: "Every moment is a gift",
    sub: "I treasure each second we share together",
  },
];

export default function Reasons() {
  return (
    <section
      className="relative py-32! px-4! overflow-hidden w-full! flex flex-col items-center justify-center min-h-screen"
      style={{ background: "#fdf4ff" }}
    >
      {/* Background elements */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, #fce7f3 0%, transparent 50%), radial-gradient(circle at 100% 100%, #ede9fe 0%, transparent 50%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center text-center mb-20! mt-24! px-4! w-full"
      >
        <span className="text-pink-400 tracking-[0.4em] text-xs font-bold uppercase mb-4! block text-center w-full">
          From My Heart
        </span>
        <h2
          className="text-4xl md:text-5xl lg:text-7xl mb-4! w-full text-center"
          style={{ fontFamily: "'Great Vibes', cursive", color: "#9d174d" }}
        >
          Reasons I Love You
        </h2>
        <p className="mt-4! text-base md:text-lg max-w-md mx-auto text-slate-500 font-light text-center w-full">
          The list goes on forever, but here are just a few magical reasons.
        </p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8! md:gap-12! max-w-6xl mx-auto px-4! md:px-8! pb-40! mb-48">
        {reasons.map(({ Icon, color, text, sub }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1, type: "spring" }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative bg-white rounded-3xl p-8! lg:p-10! flex flex-col items-center text-center cursor-pointer overflow-hidden z-20"
            style={{
              boxShadow:
                "0 10px 40px -10px rgba(236,72,153,0.1), inset 0 0 0 1px rgba(236,72,153,0.05)",
              transition:
                "box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1)",
            }}
          >
            {/* Hover gradient background reveal */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${color}, transparent)`,
              }}
            />

            <motion.div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6! relative z-10 bg-white"
              style={{
                boxShadow: `0 10px 30px -5px ${color}30, inset 0 0 0 1px ${color}20`,
                transform: "rotate(-5deg)",
              }}
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Icon style={{ width: 36, height: 36, color }} />
            </motion.div>

            <h3
              className="text-base md:text-xl font-semibold mb-3! relative z-10"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#4a154b",
              }}
            >
              {text}
            </h3>
            <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed relative z-10">
              {sub}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
