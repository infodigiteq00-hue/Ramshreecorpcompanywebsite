import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../../assets/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** Keeps --nav-height in sync for sticky sections (e.g. Products search bar) */
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const syncHeight = () => {
      // rAF + ceil: avoids subpixel gaps between fixed nav and sticky bars (scroll “hairline”)
      requestAnimationFrame(() => {
        const h = el.getBoundingClientRect().height;
        document.documentElement.style.setProperty("--nav-height", `${Math.ceil(h)}px`);
      });
    };

    syncHeight();
    const ro = new ResizeObserver(syncHeight);
    ro.observe(el);
    window.addEventListener("scroll", syncHeight, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", syncHeight);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Expertise", path: "/expertise" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-slate-100 ${
        scrolled ? "shadow-sm py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img 
            src={logoImg} 
            alt="Ramshree Corporation" 
            className="h-12 md:h-16 w-auto object-contain transition-all duration-300" 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold transition-colors hover:text-blue-600 ${
                scrolled ? "text-slate-900" : "text-slate-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 transition-colors text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-medium text-slate-800"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="w-full py-3 bg-blue-600 text-white rounded-xl text-center font-bold"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
