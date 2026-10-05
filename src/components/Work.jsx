import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "WEB APP",
    title: "AI SaaS Platform",
    description:
      "A modern platform designed around AI-powered workflows and intelligent digital experiences.",
    tech: "React · Next.js · Tailwind",
    image: "/assets/agentic-ai.jpg",
    color: "purple",
  },
  {
    number: "02",
    category: "E-COMMERCE",
    title: "Commerce Experience",
    description:
      "A conversion-focused storefront combining clean product journeys with premium interaction.",
    tech: "React · JavaScript · UI",
    image: "/assets/ecommerce.jpg",
    color: "blue",
  },
  {
    number: "03",
    category: "DIGITAL EXPERIENCE",
    title: "Creative Web Experience",
    description:
      "A cinematic responsive website built around visual storytelling and smooth motion.",
    tech: "Next.js · Framer Motion",
    image: "/assets/web-development.jpg",
    color: "purple",
  },
  {
    number: "04",
    category: "DATA",
    title: "Analytics Dashboard",
    description:
      "A clean dashboard concept for turning complex information into useful visual insights.",
    tech: "React · Data · UI",
    image: "/assets/data-science.jpg",
    color: "cyan",
  },
];

export default function Work() {
  return (
    <section className="work section-pad" id="work">

      <div className="work-header">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >

          <p className="eyebrow">// MY WORK</p>

          <h2>
            SELECTED WORK
            <br />
            THAT <span>MOVES.</span>
          </h2>

        </motion.div>

        <motion.p
          className="work-intro"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
        >
          A collection of digital concepts and experiences
          where design, code and creativity come together
          to build something meaningful.
        </motion.p>

        <div className="work-counter">
          <button aria-label="Previous project">←</button>
          <button aria-label="Next project">→</button>
          <span>01 / 04</span>
        </div>

      </div>


      <div className="work-grid">

        {projects.map((project, index) => (
          <motion.article
            className={`work-card work-${project.color}`}
            key={project.number}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.12,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="work-image">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="work-image-overlay" />

              <span className="work-number">
                {project.number}
              </span>

              <a
                href="#contact"
                className="work-arrow"
                aria-label={`View ${project.title}`}
              >
                <ArrowUpRight size={18} />
              </a>

            </div>

            <div className="work-content">

              <small>
                {project.category}
              </small>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <span className="work-tech">
                {project.tech}
              </span>

            </div>

          </motion.article>
        ))}

      </div>


      <div className="work-bottom">

        <span />

        <p>
          MORE PROJECTS COMING SOON
        </p>

        <span />

      </div>

    </section>
  );
}