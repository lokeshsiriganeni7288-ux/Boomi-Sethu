import { useState } from "react";
import boomiSethuLogo from "../assets/boomiSethuLogo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2.5">
        {/* Logo — cropped slightly to cut excess black padding in the asset */}
        <a
          href="#home"
          className="flex items-center shrink-0 h-11 sm:h-12 w-[148px] sm:w-[180px] overflow-hidden"
          aria-label="Bhoomi Sethu home"
        >
          <img
            src={boomiSethuLogo}
            alt="Bhoomi Sethu"
            className="h-[100px] sm:h-[80px] w-auto max-w-none object-contain object-left -translate-y-0.5"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-yellow-400 transition-colors">
            Home
          </a>
          <a
            href="#projects"
            className="hover:text-yellow-400 transition-colors"
          >
            Projects
          </a>
          <a href="#about" className="hover:text-yellow-400 transition-colors">
            About
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-400 transition-colors"
          >
            Contact
          </a>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 p-4 flex flex-col gap-4 border-t border-white/10">
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
