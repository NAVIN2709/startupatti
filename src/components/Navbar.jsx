import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAttiDropdownOpen, setIsAttiDropdownOpen] = useState(false);

  const attiMonths = [
    "August 2025",
    "September 2025",
    "October 2025",
    "November 2025",
    "December 2025",
    "January 2026",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Atti", href: "#atti" },
    { name: "About", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${
        isScrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 h-12 flex justify-between items-center relative">
        <a href="/" className="flex items-center gap-3 group relative z-10">
          <img src="/logo.png" alt="logo" className="w-20 h-20" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 mr-6 border-r border-white/20 pr-6">
            <a
              href="/"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Atti Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsAttiDropdownOpen(true)}
              onMouseLeave={() => setIsAttiDropdownOpen(false)}
            >
              <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-1 relative">
                Atti
                <ChevronDown
                  size={16}
                  className={`transition-transform ${isAttiDropdownOpen ? "rotate-180" : ""}`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>

              <AnimatePresence>
                {isAttiDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-black border border-white/10 rounded-xl shadow-xl overflow-hidden"
                  >
                    <div className="py-2 flex flex-col">
                      {attiMonths.map((month, idx) => (
                        <a
                          key={idx}
                          href={`/events/${month.toLowerCase().replace(/ /g, "-")}`}
                          className="px-4 py-2 text-sm text-gray-400 hover:text-black hover:bg-white focus:bg-white active:bg-white transition-colors text-left group flex items-center justify-between"
                          onClick={() => setIsAttiDropdownOpen(false)}
                        >
                          <span className="relative">{month}</span>
                          <ArrowRight
                            size={16}
                            className="text-black opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                          />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#about"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <button className="px-5 py-2 rounded border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer">
            Get In Touch
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-white/10 overflow-hidden bg-black"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-300 hover:text-white block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-3 mt-4 rounded border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-colors">
                Get In Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
