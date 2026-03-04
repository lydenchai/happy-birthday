import Hero from "../components/Hero.jsx";
import Letter from "../components/Letter.jsx";
import Gallery from "../components/Gallery.jsx";
import Reasons from "../components/Reasons.jsx";
import Surprise from "../components/Surprise.jsx";

export default function App() {
  return (
    <div style={{ background: "#fdf8fa", minHeight: "100vh" }}>
      <Hero />
      <Letter />
      <Gallery />
      <Reasons />
      <Surprise />

      <footer
        className="py-12 text-center text-xs tracking-[0.3em] uppercase relative overflow-hidden"
        style={{
          background: "#fdf8fa",
          borderTop: "1px solid rgba(236,72,153,0.1)",
          color: "#ec4899",
        }}
      >
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }} />
        <span className="relative z-10 opacity-60 font-semibold">
          Made with ❤️ — Happy Birthday, My Love
        </span>
      </footer>
    </div>
  );
}
