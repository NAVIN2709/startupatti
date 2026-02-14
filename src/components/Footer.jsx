import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Logo & Info */}
          <div className="md:w-1/3">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <span className="text-2xl font-bold tracking-tighter text-white">
                Startup Atti
              </span>
            </a>
            <h2 className="text-xl font-bold mb-4 text-white">
              Let’s collaborate together
            </h2>
            <p className="text-gray-400 mb-6">
              Take action today and join us for an event experience like no
              other.
            </p>
            <button className="px-6 py-2 rounded border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-all">
              Contact Us
            </button>
          </div>

          {/* Links */}
          <div className="md:w-1/3 grid grid-cols-2 gap-8">
            <div>
              <h6 className="text-white text-sm font-bold uppercase tracking-wider mb-4 opacity-50">
                Pages
              </h6>
              <ul className="space-y-3">
                {["Home", "Events", "Speakers", "About Us", "News"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h6 className="text-white text-sm font-bold uppercase tracking-wider mb-4 opacity-50">
                Socials
              </h6>
              <ul className="space-y-3">
                {["Instagram", "Twitter", "LinkedIn", "Facebook"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:w-1/3">
            <h6 className="text-white text-sm font-bold uppercase tracking-wider mb-4 opacity-50">
              Sign up to our newsletter
            </h6>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-[#111] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Startup Atti. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
