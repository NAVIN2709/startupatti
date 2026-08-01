import { Linkedin, Instagram, Youtube, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="Startup Atti"
                  width={64}
                  height={64}
                  className="h-16 w-auto object-contain"
                />
                <p className="text-white text-lg font-bold">Startup Atti</p>
              </Link>
              <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-md leading-relaxed mt-1">
                  An initiative by Madras Marketers
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-md">
              The gateway to the real startup ecosystem. Join us for meaningful
              connections, offline collisions, and a network that builds
              together.
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/optimized/mm-logo.png"
                alt="Madras Marketers"
                width={180}
                height={80}
                className="h-20 w-auto object-contain bg-white/10 rounded-lg p-2"
              />
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
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
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-yellow-500 transition-colors"></span>
                    {link.name}
                  </Link>
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
            <p className="mt-6 text-sm text-gray-400">
              Chennai, Tamil Nadu, India <br />
              startupatti@startupatti.com <br />
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Startup Atti. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
