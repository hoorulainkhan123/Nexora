import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "AI-POWERED",
    "DIGITAL EXPERIENCES",
    "WEB DEVELOPMENT",
    "INTELLIGENT SYSTEMS",
  ];

  return (
    <section className="marquee-section">
      <div className="marquee-line" />

      <div className="marquee-window">
        <motion.div
          className="marquee-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...items, ...items].map((item, index) => (
            <div className="marquee-item" key={index}>
              <span>{item}</span>
              <b>✦</b>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="marquee-line" />
    </section>
  );
}