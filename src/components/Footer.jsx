import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-glow" />

      <motion.div
        className="footer-grid-glow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="footer-top">
        <p className="eyebrow">HAVE AN IDEA?</p>
        <span>03 / 04</span>
      </div>

      <div className="footer-main">
        <motion.div
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
          <h2>
            LET'S MAKE
            <br />
            IT <span>MOVE.</span>
          </h2>
        </motion.div>

        <motion.a
          className="footer-email"
          href="mailto:hello@example.com"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
        >
          <span>START A CONVERSATION</span>

          <motion.div
            whileHover={{
              rotate: 45,
              scale: 1.12,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <ArrowUpRight size={22} />
          </motion.div>
        </motion.a>
      </div>

      <div className="footer-bottom">
        <span>AI • WEB • DIGITAL EXPERIENCES</span>

        <span>
          © {new Date().getFullYear()} — ALL RIGHTS RESERVED
        </span>

        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}