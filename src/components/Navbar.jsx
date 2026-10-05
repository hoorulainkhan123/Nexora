import { ArrowUpRight, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="nav">
           <a className="brand" href="#top" onClick={() => setOpen(false)}>
  
</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </div>

        <a className="nav-cta" href="#contact">
          Let's Talk
          <ArrowUpRight size={14} />
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

      </nav>

      {open && (
        <div className="mobile-menu">
          <a href="#services" onClick={() => setOpen(false)}>
            Services
          </a>

          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Let's Talk
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}