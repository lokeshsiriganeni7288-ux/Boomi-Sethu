import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import boomiSethuLogo from "../assets/boomiSethuLogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navOffset = 72; // fixed navbar height
    const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname === "/") {
      scrollToSection(id);
      window.history.replaceState(null, "", `/#${id}`);
      return;
    }

    // From project detail (or other pages): go home, then scroll
    navigate("/", { state: { scrollTo: id } });
  };

  return (
    <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2.5">
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              scrollToSection("home");
            }
          }}
          className="flex items-center shrink-0 h-11 sm:h-12 w-[148px] sm:w-[180px] overflow-hidden"
          aria-label="Bhoomi Sethu home"
        >
          <img
            src={boomiSethuLogo}
            alt="Bhoomi Sethu"
            className="h-[100px] sm:h-[80px] w-auto max-w-none object-contain object-left -translate-y-0.5"
          />
        </Link>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="hover:text-yellow-400 transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 p-4 flex flex-col gap-4 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
