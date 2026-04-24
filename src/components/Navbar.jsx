import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  ["Intro", "intro"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Resume", "resume"],
  ["Contact", "contact"],
];

function goTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <button className="nav-logo" onClick={() => goTo("intro")}>SA</button>

      <nav className="desktop-nav">
        {links.map(([label, id]) => (
          <button key={id} className="nav-link" onClick={() => goTo(id)}>
            {label}
          </button>
        ))}
      </nav>

      <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            className="mobile-nav"
            exit={{ opacity: 0, y: -16 }}
            initial={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {links.map(([label, id]) => (
              <button
                key={id}
                onClick={() => {
                  setOpen(false);
                  goTo(id);
                }}
              >
                {label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
