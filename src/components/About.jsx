import { motion } from "framer-motion";

const words = ["STRATEGY", "DESIGN", "AI", "DEVELOPMENT"];

export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="about-top">
        <p className="eyebrow">ABOUT THE WORK</p>
        <span>02 / 04</span>
      </div>

      <div className="about-main">
        <motion.h2
          initial={{
            opacity: 0,
            y: 80,
            filter: "blur(14px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          I DON'T JUST
          <br />
          <span>WRITE CODE.</span>
          <br />
          I BUILD WHAT'S
          <br />
          <em>NEXT.</em>
        </motion.h2>

        <motion.div
          className="about-copy"
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p>
            I combine artificial intelligence, development,
            design and strategy to turn ambitious ideas into
            digital experiences that actually move people.
          </p>

          <p>
            From intelligent systems and e-commerce to
            high-performance websites, every project is built
            around one thing — the outcome.
          </p>

          <div className="about-line">
            {words.map((word, index) => (
              <motion.span
                key={word}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.45 + index * 0.1,
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}