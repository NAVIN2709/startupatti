import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeHash, setActiveHash] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (href) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const targetPath = path || "/";
      return location.pathname === targetPath && activeHash === hash;
    }
    // Exact match for path-only links
    return location.pathname === href && !activeHash;
  };

  const handleNavClick = (e, href) => {
    if (href.includes("#")) {
      e.preventDefault();
      const [path, hash] = href.split("#");
      const targetPath = path || "/";

      if (location.pathname === targetPath) {
        // Same page — just scroll
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Different page — navigate then scroll
        navigate(targetPath);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect which hash section is currently in view
      const sections = ["speakers", "contact"];
      let found = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            found = id;
            break;
          }
        }
      }
      setActiveHash(found);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset activeHash when navigating to a different page
  useEffect(() => {
    setActiveHash("");
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
    { name: "Speakers", href: "/#speakers" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-0 flex justify-center`}
      >
        <div
          className={`
            w-full md:w-auto md:min-w-[700px] max-w-5xl
            backdrop-blur-md border border-white/10 rounded-full
            flex justify-between items-center px-6 py-3
            transition-all duration-500
            ${isScrolled ? "bg-black/80 shadow-lg shadow-blue-500/10" : "bg-black/50"}
          `}
        >
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 group relative z-10 mr-8"
          >
            <img
              src="/logo.png"
              alt="logo"
              className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-bold text-white tracking-tight hidden sm:block">
              Startup Atti
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 relative">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 z-10 ${
                  isActive(link.href)
                    ? "bg-white text-black"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {link.name}
                {hoveredIndex === index && !isActive(link.href) && (
                  <motion.span
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white/10 rounded-full -z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Donate / CTA */}
          <div className="hidden md:flex items-center ml-8">
            <a
              href="https://wa.me/919940338848?text=i%20am%20here%20for%20donation"
              target="_blank"
              rel="noopener noreferrer"
              className="
                    relative overflow-hidden
                    px-5 py-2 rounded-full 
                    bg-white text-black 
                    text-sm font-bold 
                    hover:bg-gray-200 transition-colors duration-300
                    flex items-center gap-2
                "
            >
              <span>Donate</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none p-2 bg-white/10 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl md:hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl transition-all font-medium flex justify-between items-center ${
                    isActive(link.href)
                      ? "bg-white text-black"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white"
                  />
                </a>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <a
                href="https://wa.me/919940338848?text=i%20am%20here%20for%20donation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 mt-2 flex items-center justify-center gap-2 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Donate Support
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
