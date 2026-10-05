import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 90,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 90,
    damping: 20,
  });

  const videoX = useTransform(
    smoothX,
    [-500, 500],
    [-10, 10]
  );

  const videoY = useTransform(
    smoothY,
    [-500, 500],
    [-8, 8]
  );

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      event.clientX -
      (rect.left + rect.width / 2);

    const y =
      event.clientY -
      (rect.top + rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      className="hero section-pad"
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
    >
      <div className="hero-noise" />

      {/* Ambient background lights */}
      <motion.div className="ambient ambient-a" />
      <motion.div className="ambient ambient-b" />
      <motion.div className="ambient ambient-c" />

      <motion.div
        className="hero-topline"
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <span>INDEPENDENT DIGITAL STUDIO</span>
        <span>BASED IN PAKISTAN</span>
      </motion.div>

      <div className="hero-grid">
        {/* LEFT SIDE */}
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            AI <span>•</span> WEB <span>•</span>{" "}
            DIGITAL EXPERIENCES
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 70,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            I DON'T JUST
            <br />
            <span>WRITE CODE.</span>
            <br />
            I BUILD WHAT'S
            <br />
            <span>NEXT.</span>
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            I turn ambitious ideas into sharp
            digital experiences — combining
            strategy, design, artificial
            intelligence and development.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >
            <a
              className="button button-solid"
              href="#services"
            >
              Explore services
              <ArrowUpRight size={16} />
            </a>

            <a
              className="button button-ghost"
              href="#work"
            >
              <Play size={14} />
              See the work
            </a>
          </motion.div>

          <motion.div
            className="hero-meta"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} />
          </motion.div>
        </div>

        {/* RIGHT SIDE — CLEAN VIDEO */}
        <motion.div
          className="hero-media"
          style={{
            x: videoX,
            y: videoY,
          }}
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            ease: "easeOut",
          }}
        >
          <div className="video-frame">
            <video
              src="/assets/hero-model.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-bottom"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.9,
        }}
      >
        <span>01</span>
        <div />
        <span>SCROLL</span>
      </motion.div>
    </section>
  );
}