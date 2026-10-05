import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { services } from "../data/services";

export default function Services() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  const getPosition = (index) => {
    let position = index - active;

    if (position > services.length / 2) {
      position -= services.length;
    }

    if (position < -services.length / 2) {
      position += services.length;
    }

    return position;
  };

  return (
    <section className="services section-pad" id="services">

      <div className="section-heading">
        <div>
          <p className="eyebrow">WHAT I BUILD</p>

          <h2>
            Digital work with
            <br />
            <em>an unfair amount of detail.</em>
          </h2>
        </div>

        <p className="section-note">
          A focused stack of services — designed to work together,
          not as disconnected deliverables.
        </p>
      </div>

      <div className="reference-carousel">

        {services.map((service, index) => {
          const position = getPosition(index);

          const isCenter = position === 0;
          const isLeft = position === -1;
          const isRight = position === 1;

          const isFarLeft = position === -2;
          const isFarRight = position === 2;

          let x = 0;
          let scale = 1;
          let opacity = 1;
          let blur = 0;
          let zIndex = 10;

          if (isLeft) {
            x = -330;
            scale = 0.78;
            opacity = 0.65;
            blur = 0.3;
            zIndex = 7;
          }

          if (isRight) {
            x = 330;
            scale = 0.78;
            opacity = 0.65;
            blur = 0.3;
            zIndex = 7;
          }

          if (isFarLeft) {
            x = -540;
            scale = 0.62;
            opacity = 0.32;
            blur = 1.5;
            zIndex = 4;
          }

          if (isFarRight) {
            x = 540;
            scale = 0.62;
            opacity = 0.32;
            blur = 1.5;
            zIndex = 4;
          }

          if (position < -2 || position > 2) {
            opacity = 0;
            scale = 0.5;
            zIndex = 1;
          }

          return (
            <motion.article
              key={service.number}
              className={`reference-card accent-${service.accent}`}
              animate={{
                x,
                scale,
                opacity,
                filter: `blur(${blur}px)`,
                zIndex,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src={service.image}
                alt={service.title}
              />

              <div className="reference-card-overlay" />

              {isCenter && (
  <>
    <div className="reference-card-top">
      <span>
        {service.number} / {service.category}
      </span>

      <ArrowUpRight size={16} />
    </div>

    <div className="reference-card-content">

      <small>{service.category}</small>

      <h3>{service.title}</h3>

      <p>{service.description}</p>

    </div>
  </>
)}
            </motion.article>
          );
        })}

      </div>

      <div className="reference-progress">

        <span>
          {String(active + 1).padStart(2, "0")}
        </span>

        <div>
          <motion.span
            animate={{
              width: `${((active + 1) / services.length) * 100}%`,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        </div>

        <span>
          {String(services.length).padStart(2, "0")}
        </span>

      </div>

    </section>
  );
}