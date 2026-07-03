import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Ticket, Coins } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

const Sparkle = ({ delay = 0 }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
    animate={{
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      x: [0, (Math.random() - 0.5) * 40],
      y: [0, (Math.random() - 0.5) * 40],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      delay,
      ease: "easeOut",
    }}
    className="absolute w-1 h-1 bg-yellow-400 rounded-full"
    style={{
      left: "50%",
      top: "50%",
      filter: "blur(0.5px)",
    }}
  />
);

const Navbar = ({ onOpenPerks }) => {
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

  const handleNavClick = (e, linkOrHref) => {
    // Check if it's an object with onClick or just a string href
    const isLinkObject = typeof linkOrHref === "object";
    const href = isLinkObject ? linkOrHref.href : linkOrHref;
    const onClick = isLinkObject ? linkOrHref.onClick : null;

    if (onClick) {
      e.preventDefault();
      onClick();
      return;
    }

    if (href && href.includes("#")) {
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
      const sections = ["events", "contact"];
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
    { name: "Events", href: "/#events" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-3 md:top-4 left-0 right-0 z-50 transition-all duration-300 px-3 md:px-0 flex justify-center`}
      >
        <div
          className={`
            w-full md:w-auto md:min-w-[900px] max-w-6xl
            backdrop-blur-md border border-white/10 rounded-full
            flex justify-between items-center px-4 py-2.5 md:px-6 md:py-3
            transition-all duration-500
            ${isScrolled ? "bg-black/80 shadow-lg shadow-yellow-500/10" : "bg-black/50"}
          `}
        >
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 group relative z-10 md:mr-8"
          >
            <img
              src="/logo.svg"
              alt="logo"
              className="w-14 h-14 md:w-16 md:h-16 object-contain group-hover:scale-110 transition-transform duration-300"
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
                    className="absolute inset-0 bg-white/10 rounded-full z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Book Tickets + Donate CTA */}
          <div className="hidden md:flex items-center ml-8 gap-3">
            <button
              onClick={onOpenPerks}
              className="
                    relative overflow-visible group
                    px-5 py-2.5 rounded-full 
                    border border-yellow-500/30
                    bg-yellow-500/10 text-white 
                    text-sm font-bold 
                    hover:bg-yellow-500/20 transition-all duration-300
                    flex items-center gap-2
                    cursor-pointer
                "
            >
              <div className="absolute inset-0 pointer-events-none overflow-visible">
                <Sparkle delay={0} />
                <Sparkle delay={0.4} />
                <Sparkle delay={0.8} />
                <Sparkle delay={1.2} />
              </div>
              <Coins
                size={14}
                className="text-yellow-500 group-hover:rotate-12 transition-transform"
              />
              <span className="relative z-10">Perks</span>
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-yellow-500/20 blur-md -z-10"
              />
            </button>
            <a
              href="https://www.kynhood.com/event/6a462a055a4cbbe93b536d85?utm_source=Startup_atti&utm_medium=Website"
              target="_blank"
              rel="noopener noreferrer"
              className="
                    relative overflow-hidden text-black
                    px-5 py-2.5 rounded-full 
                    bg-yellow-500 
                    text-sm font-bold 
                    hover:bg-yellow-400 transition-all duration-300
                    flex items-center gap-2
                    shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)]
                "
            >
              <Ticket size={14} />
              <span>Book Tickets</span>
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
                href="https://www.kynhood.com/event/6a462a055a4cbbe93b536d85?utm_source=Startup_atti&utm_medium=Website"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 mt-2 flex items-center justify-center gap-2 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Ticket size={16} />
                Book Tickets
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
