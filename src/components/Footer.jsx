import { Linkedin, Instagram, Youtube, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/#events" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/#contact" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/startupatti",
    },
    {
      name: "YouTube",
      icon: <Youtube size={20} />,
      href: "https://youtube.com/@startupatti",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/company/startupatti/",
    },
  ];

  return (
    <footer
      id="contact"
      className="bg-[#050505] pt-10 md:pt-24 pb-8 md:pb-12 border-t border-white/10 relative overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Brand & Call to Action */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col gap-4">
              <a href="/" className="flex items-center gap-2">
                <img
                  src="/logo.svg"
                  alt="Startup Atti"
                  className="h-16 w-auto object-contain"
                />
                <p className="text-white text-lg font-bold">Startup Atti</p>
              </a>
              <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-md leading-relaxed mt-1">
                  An Initiative by Department of Economic &amp; Entrepreneurship
                  Development
                </p>
                <p className="text-gray-400 text-md leading-relaxed">
                  Unity of Youth Foundation
                </p>
                <p className="text-gray-500 text-md">
                  Darpan ID: TN/2024/0425767
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-md">
              The gateway to the real startup ecosystem. Join us for meaningful
              connections, offline collisions, and a network that builds
              together.
            </p>
            <div className="flex items-center gap-3">
              <img
                src="/optimized/UOY.webp"
                alt="Unity of Youth Foundation"
                className="h-12 w-auto object-contain bg-white/10 rounded-lg p-1"
              />
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919487445528?text=Hi%2C%20I%20strongly%20believe%20in%20empowering%20young%20entrepreneurs%20and%20would%20be%20glad%20to%20contribute%20to%20your%20initiative.%20Kindly%20share%20the%20details%20to%20proceed%20with%20a%20donation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all group"
              >
                Support Our Mission
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
              <a
                href="https://tally.so/r/Xxeo1O"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-bold text-sm hover:bg-white/5 transition-all group"
              >
                Become a Speaker
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
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-yellow-500 transition-colors"></span>
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
              startupatti@startupatti.com <br />
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Startup Atti. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
