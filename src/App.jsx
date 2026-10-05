import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Work from "./components/Work";
import About from "./components/About";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function App() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursor({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <>
      <div
        className="cursor-glow"
        style={{
          left: cursor.x,
          top: cursor.y,
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <Marquee />

        <Reveal>
          <Services />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Work />
        </Reveal>

        <Reveal>
          <About />
        </Reveal>
      </main>

      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}