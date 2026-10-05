import { motion } from "framer-motion";

const skills = [
  {
    name: "React",
    level: "95%",
    type: "WEB",
    color: "cyan",
  },
  {
    name: "Next.js",
    level: "90%",
    type: "WEB",
    color: "purple",
  },
  {
    name: "JavaScript",
    level: "90%",
    type: "LANGUAGE",
    color: "lime",
  },
  {
    name: "TypeScript",
    level: "85%",
    type: "LANGUAGE",
    color: "blue",
  },
  {
    name: "Tailwind CSS",
    level: "90%",
    type: "UI",
    color: "cyan",
  },
  {
    name: "Framer Motion",
    level: "85%",
    type: "MOTION",
    color: "purple",
  },
  {
    name: "Node.js",
    level: "80%",
    type: "BACKEND",
    color: "lime",
  },
  {
    name: "Git & GitHub",
    level: "85%",
    type: "TOOLS",
    color: "white",
  },
  {
    name: "Figma",
    level: "75%",
    type: "DESIGN",
    color: "pink",
  },
];

export default function Skills() {
  return (
    <section className="skills section-pad" id="skills">

      <div className="skills-inner">

        {/* LEFT */}
        <motion.div
          className="skills-intro"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <p className="eyebrow">// MY SKILLS</p>

          <h2>
            TOOLS I USE
            <br />
            TO <span>BUILD</span>
            <br />
            <em>IDEAS.</em>
          </h2>

          <p className="skills-description">
            I work with modern technologies to create fast,
            scalable and visually stunning digital experiences.
            Every tool has a purpose — the goal is always
            building something meaningful.
          </p>

          <div className="skills-stats">

            <div>
              <strong>10+</strong>
              <span>TECH STACKS</span>
            </div>

            <div>
              <strong>3+</strong>
              <span>YEARS LEARNING</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>PASSION</span>
            </div>

          </div>

        </motion.div>


        {/* RIGHT */}
        <div className="skills-grid">

          {skills.map((skill, index) => (
            <motion.div
              className={`skill-card skill-${skill.color}`}
              key={skill.name}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
            >

              <div className="skill-card-top">

                <div className="skill-icon">
                  {skill.name.charAt(0)}
                </div>

                <span>
                  {skill.level}
                </span>

              </div>

              <div className="skill-card-info">

                <h3>
                  {skill.name}
                </h3>

                <small>
                  {skill.type}
                </small>

              </div>

              <div className="skill-bar">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{
                    width: skill.level,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.2 + index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>

            </motion.div>
          ))}

        </div>

      </div>

      <div className="skills-bottom">

        <span>⚡ ALWAYS LEARNING</span>

        <div />

        <span>BETTER TOOLS. BIGGER IDEAS.</span>

      </div>

    </section>
  );
}