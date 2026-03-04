import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const letterText = `My dearest Sreypok,

From the moment we met, my world has been brighter and more beautiful than I ever imagined. Your smile — the one that reaches all the way to your eyes — is the first thing I think of every morning.

Your kindness, your warmth, and your beautiful heart inspire me every single day. In your arms, I have found my home. In your laughter, I have found my joy.

Thank you for being my everything. I cherish you more than words can ever say — more than stars in the sky, more than waves in the sea.

Happy Birthday, my soulmate.

Here's to forever with you. 🌹

— Yours, always ❤️`;

export default function Letter() {
  const [displayed, setDisplayed] = useState("");
  const [isDone, setIsDone] = useState(false);
  const sectionRef = useRef(null);
  const hasStarted = useRef(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          let i = 0;
          const interval = setInterval(() => {
            i++;
            setDisplayed(letterText.slice(0, i));
            if (i >= letterText.length) {
              clearInterval(interval);
              setIsDone(true);
            }
          }, 24);
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="letter-section"
      ref={sectionRef}
      className="relative min-h-screen flex justify-center items-center py-24! px-4! overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #fdf8fa 0%, #fef2f8 50%, #fdf4ff 100%)",
      }}
    >
      <motion.div
        className="orb"
        style={{
          y: y1,
          width: "40vw",
          height: "40vw",
          top: "10%",
          right: "-10%",
          background: "radial-gradient(circle, #fce7f3 0%, #fae8ff 100%)",
        }}
      />
      <motion.div
        className="orb"
        style={{
          y: y2,
          width: "30vw",
          height: "30vw",
          bottom: "10%",
          left: "-5%",
          background: "radial-gradient(circle, #fee2e2 0%, #fce7f3 100%)",
        }}
      />

      <motion.div
        initial={{ y: 80, opacity: 0, rotateX: 10 }}
        whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
        className="relative z-10 w-full max-w-4xl"
        style={{ perspective: 1000 }}
      >
        <div className="glass-pink rounded-3xl p-1! shadow-2xl overflow-hidden relative group transition-all duration-500 hover:shadow-3xl">
          <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent/0 pointer-events-none" />

          <div className="bg-white/60 backdrop-blur-2xl rounded-3xl overflow-hidden relative z-10">
            {/* Header pattern */}
            <div
              className="relative h-32 w-full overflow-hidden flex items-center justify-center mb-4!"
              style={{
                background: "linear-gradient(90deg, #fdf2f8 0%, #faf5ff 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-pink-300 to-transparent opacity-50" />

              <div className="flex flex-col items-center">
                <span className="text-pink-400 tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase mb-4!">
                  My Heart to Yours
                </span>
                <h2
                  className="text-2xl md:text-4xl lg:text-5xl"
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    color: "#be185d",
                  }}
                >
                  A Love Letter
                </h2>
              </div>
            </div>

            {/* Seal overlapping header and body */}
            <div className="absolute left-1/2 -translate-x-1/2 top-32 -translate-y-1/2 z-20">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg cursor-pointer bg-linear-to-br from-pink-400 to-purple-500 text-white border-4 border-white"
              >
                💝
              </motion.div>
            </div>
            <div className="px-4! md:px-8! pt-4! md:pt-8! relative">
              <div
                className="absolute right-10 top-16 text-pink-200 text-9xl leading-none opacity-20 font-serif"
                style={{ transform: "rotate(10deg)" }}
              >
                "
              </div>
              <p
                className={`text-base md:text-lg lg:text-xl leading-relaxed whitespace-pre-line text-slate-700 font-light relative z-10 ${!isDone ? "typing-cursor" : ""}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {displayed}
              </p>
              {isDone && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mt-4! md:mt-8 py-4! md:py-6! border-t border-pink-100 flex items-center justify-between gap-4"
                >
                  <p className="text-[10px] md:text-sm font-medium tracking-widest text-pink-400 uppercase">
                    Forever & Always
                  </p>
                  <div
                    className="text-2xl md:text-3xl"
                    style={{
                      fontFamily: "'Great Vibes', cursive",
                      color: "#a855f7",
                    }}
                  >
                    Lyden
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
