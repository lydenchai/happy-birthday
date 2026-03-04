import { useEffect } from "react";
import Hero from "../components/Hero.jsx";
import Letter from "../components/Letter.jsx";
import Gallery from "../components/Gallery.jsx";
import Reasons from "../components/Reasons.jsx";
import Surprise from "../components/Surprise.jsx";
import Lenis from "lenis";

export default function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div style={{ background: "#fdf8fa", minHeight: "100vh" }}>
      <Hero />
      <Letter />
      <Gallery />
      <Reasons />
      <Surprise />
      <footer
        className="py-6! text-center text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase relative overflow-hidden"
        style={{
          background: "#fdf8fa",
          borderTop: "1px solid rgba(236,72,153,0.1)",
          color: "#ec4899",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/stardust.png')",
          }}
        />
        <span className="relative z-10 opacity-60 font-semibold">
          Made with ❤️ — Happy Birthday, My Love
        </span>
      </footer>
    </div>
  );
}
