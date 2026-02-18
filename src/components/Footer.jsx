import { motion } from "framer-motion";
import {
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#roots" },
    { name: "Speakers", href: "/#speakers" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/#contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin size={20} />, href: "#" },
    { name: "Instagram", icon: <Instagram size={20} />, href: "#" },
    { name: "Twitter", icon: <Twitter size={20} />, href: "#" },
    { name: "Facebook", icon: <Facebook size={20} />, href: "#" },
  ];

  return (
    <footer
      id="contact"
      className="bg-[#050505] pt-24 pb-12 border-t border-white/10 relative overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand & Call to Action */}
          <div className="md:col-span-5 space-y-6">
            <a href="/" className="inline-block">
              <span className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Startup Atti
              </span>
            </a>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              The gateway to the real startup ecosystem. Join us for meaningful
              connections, offline collisions, and a community that builds
              together.
            </p>
            <div className="pt-4">
              <a
                href="https://wa.me/919940338848?text=i%20am%20here%20for%20donation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all group"
              >
                Support Our Mission
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-blue-500 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Chennai, Tamil Nadu, India <br />
              ecosystem@startupatti.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Startup Atti. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
